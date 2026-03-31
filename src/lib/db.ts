import type { D1Database } from '@cloudflare/workers-types';
import type {
  TeamMember,
  WorkExperienceEntry,
  Project,
  Hobby,
  SocialLinks,
} from '@/types/team';

type MemberRow = {
  slug: string;
  handle: string;
  name: string;
  role: string;
  short_bio: string;
  bio: string;
  image_url: string;
  cv_url: string | null;
  cv_filename: string | null;
};

type SocialRow = {
  slug: string;
  linkedin: string | null;
  github: string | null;
  youtube: string | null;
  twitter: string | null;
  instagram: string | null;
};

type WorkRow = {
  id: number;
  slug: string;
  start_date: string;
  end_date: string;
  role: string;
  description: string; // JSON
};

type ProjectRow = {
  id: number;
  slug: string;
  name: string;
  description: string;
  github_url: string | null;
};

type HobbyRow = {
  id: number;
  slug: string;
  name: string;
  description: string;
  youtube_video_id: string | null;
};

function toTeamMember(
  member: MemberRow,
  socials: SocialRow | null,
  work: WorkRow[],
  projects: ProjectRow[],
  hobbies: HobbyRow[],
): TeamMember {
  const socialLinks: SocialLinks = {};
  if (socials?.linkedin) socialLinks.linkedin = socials.linkedin;
  if (socials?.github) socialLinks.github = socials.github;
  if (socials?.youtube) socialLinks.youtube = socials.youtube;
  if (socials?.twitter) socialLinks.twitter = socials.twitter;
  if (socials?.instagram) socialLinks.instagram = socials.instagram;

  return {
    slug: member.slug,
    handle: member.handle,
    name: member.name,
    role: member.role,
    shortBio: member.short_bio,
    bio: member.bio,
    imageURL: member.image_url,
    cvURL: member.cv_url,
    cvFilename: member.cv_filename,
    socials: socialLinks,
    workExperience: work.map((w) => ({
      startDate: w.start_date,
      endDate: w.end_date,
      role: w.role,
      description: JSON.parse(w.description) as string[],
    })),
    projects: projects.map((p) => ({
      name: p.name,
      description: p.description,
      githubURL: p.github_url,
    })),
    hobbies: hobbies.map((h) => ({
      name: h.name,
      description: h.description,
      ...(h.youtube_video_id ? { youtubeVideoId: h.youtube_video_id } : {}),
    })),
  };
}

export async function getMember(
  db: D1Database,
  slug: string,
): Promise<TeamMember | null> {
  const [memberResult, socialsResult, workResult, projectsResult, hobbiesResult] =
    await Promise.all([
      db.prepare('SELECT * FROM members WHERE slug = ?').bind(slug).first<MemberRow>(),
      db.prepare('SELECT * FROM member_socials WHERE slug = ?').bind(slug).first<SocialRow>(),
      db.prepare('SELECT * FROM member_work WHERE slug = ? ORDER BY id').bind(slug).all<WorkRow>(),
      db.prepare('SELECT * FROM member_projects WHERE slug = ? ORDER BY id').bind(slug).all<ProjectRow>(),
      db.prepare('SELECT * FROM member_hobbies WHERE slug = ? ORDER BY id').bind(slug).all<HobbyRow>(),
    ]);

  if (!memberResult) return null;

  return toTeamMember(
    memberResult,
    socialsResult,
    workResult.results,
    projectsResult.results,
    hobbiesResult.results,
  );
}

export async function getAllMembers(db: D1Database): Promise<TeamMember[]> {
  const { results: members } = await db
    .prepare('SELECT * FROM members ORDER BY rowid')
    .all<MemberRow>();

  if (members.length === 0) return [];

  const slugs = members.map((m) => m.slug);
  const placeholders = slugs.map(() => '?').join(',');

  const [socialsResult, workResult, projectsResult, hobbiesResult] = await Promise.all([
    db.prepare(`SELECT * FROM member_socials WHERE slug IN (${placeholders})`).bind(...slugs).all<SocialRow>(),
    db.prepare(`SELECT * FROM member_work WHERE slug IN (${placeholders}) ORDER BY slug, id`).bind(...slugs).all<WorkRow>(),
    db.prepare(`SELECT * FROM member_projects WHERE slug IN (${placeholders}) ORDER BY slug, id`).bind(...slugs).all<ProjectRow>(),
    db.prepare(`SELECT * FROM member_hobbies WHERE slug IN (${placeholders}) ORDER BY slug, id`).bind(...slugs).all<HobbyRow>(),
  ]);

  const socialsMap = new Map(socialsResult.results.map((s) => [s.slug, s]));
  const workMap = new Map<string, WorkRow[]>();
  const projectsMap = new Map<string, ProjectRow[]>();
  const hobbiesMap = new Map<string, HobbyRow[]>();

  for (const w of workResult.results) {
    workMap.set(w.slug, [...(workMap.get(w.slug) ?? []), w]);
  }
  for (const p of projectsResult.results) {
    projectsMap.set(p.slug, [...(projectsMap.get(p.slug) ?? []), p]);
  }
  for (const h of hobbiesResult.results) {
    hobbiesMap.set(h.slug, [...(hobbiesMap.get(h.slug) ?? []), h]);
  }

  return members.map((m) =>
    toTeamMember(
      m,
      socialsMap.get(m.slug) ?? null,
      workMap.get(m.slug) ?? [],
      projectsMap.get(m.slug) ?? [],
      hobbiesMap.get(m.slug) ?? [],
    ),
  );
}

export type MemberPatch = Partial<{
  handle: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string;
  imageURL: string;
  cvURL: string | null;
  cvFilename: string | null;
  socials: SocialLinks;
  workExperience: WorkExperienceEntry[];
  projects: Project[];
  hobbies: Hobby[];
}>;

export async function updateMember(
  db: D1Database,
  slug: string,
  patch: MemberPatch,
): Promise<void> {
  const statements: ReturnType<D1Database['prepare']>[] = [];

  const coreFields: [string, unknown][] = [];
  if (patch.handle !== undefined) coreFields.push(['handle', patch.handle]);
  if (patch.name !== undefined) coreFields.push(['name', patch.name]);
  if (patch.role !== undefined) coreFields.push(['role', patch.role]);
  if (patch.shortBio !== undefined) coreFields.push(['short_bio', patch.shortBio]);
  if (patch.bio !== undefined) coreFields.push(['bio', patch.bio]);
  if (patch.imageURL !== undefined) coreFields.push(['image_url', patch.imageURL]);
  if (patch.cvURL !== undefined) coreFields.push(['cv_url', patch.cvURL]);
  if (patch.cvFilename !== undefined) coreFields.push(['cv_filename', patch.cvFilename]);

  if (coreFields.length > 0) {
    const setClause = coreFields.map(([col]) => `${col} = ?`).join(', ');
    const values = coreFields.map(([, v]) => v);
    statements.push(
      db.prepare(`UPDATE members SET ${setClause} WHERE slug = ?`).bind(...values, slug),
    );
  }

  if (patch.socials !== undefined) {
    const s = patch.socials;
    statements.push(
      db
        .prepare(
          `INSERT INTO member_socials (slug, linkedin, github, youtube, twitter, instagram)
           VALUES (?, ?, ?, ?, ?, ?)
           ON CONFLICT(slug) DO UPDATE SET
             linkedin = excluded.linkedin,
             github = excluded.github,
             youtube = excluded.youtube,
             twitter = excluded.twitter,
             instagram = excluded.instagram`,
        )
        .bind(slug, s.linkedin ?? null, s.github ?? null, s.youtube ?? null, s.twitter ?? null, s.instagram ?? null),
    );
  }

  if (patch.workExperience !== undefined) {
    statements.push(db.prepare('DELETE FROM member_work WHERE slug = ?').bind(slug));
    for (const w of patch.workExperience) {
      statements.push(
        db
          .prepare('INSERT INTO member_work (slug, start_date, end_date, role, description) VALUES (?, ?, ?, ?, ?)')
          .bind(slug, w.startDate, w.endDate, w.role, JSON.stringify(w.description)),
      );
    }
  }

  if (patch.projects !== undefined) {
    statements.push(db.prepare('DELETE FROM member_projects WHERE slug = ?').bind(slug));
    for (const p of patch.projects) {
      statements.push(
        db
          .prepare('INSERT INTO member_projects (slug, name, description, github_url) VALUES (?, ?, ?, ?)')
          .bind(slug, p.name, p.description, p.githubURL ?? null),
      );
    }
  }

  if (patch.hobbies !== undefined) {
    statements.push(db.prepare('DELETE FROM member_hobbies WHERE slug = ?').bind(slug));
    for (const h of patch.hobbies) {
      statements.push(
        db
          .prepare('INSERT INTO member_hobbies (slug, name, description, youtube_video_id) VALUES (?, ?, ?, ?)')
          .bind(slug, h.name, h.description, h.youtubeVideoId ?? null),
      );
    }
  }

  if (statements.length > 0) {
    await db.batch(statements);
  }
}
