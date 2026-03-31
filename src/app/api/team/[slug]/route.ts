import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getMember, updateMember } from '@/lib/db';
import type { MemberPatch } from '@/lib/db';

export const runtime = 'edge';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { env } = await getCloudflareContext({ async: true });
  const member = await getMember(env.DB, slug);

  if (!member) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json(member);
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { env } = await getCloudflareContext({ async: true });

  const existing = await getMember(env.DB, slug);
  if (!existing) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  let patch: MemberPatch;
  try {
    patch = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  await updateMember(env.DB, slug, patch);

  const updated = await getMember(env.DB, slug);
  return Response.json(updated);
}
