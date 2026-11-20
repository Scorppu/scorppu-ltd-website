***

# Member Profile Guide — How to Add Yourself

Welcome! This guide walks you through everything you need to do to get your profile showing up on the site. There are two parts: filling in your data in `team.json`, and creating your own page file.

***

## Part 1 — Fill In Your JSON

Open `public/team.json` and find your entry in the `members` array (or add one if it's not there yet). Here's what each field means:

### The Basics

- **`slug`** — Your unique ID, lowercase, no spaces. This will be part of your URL (e.g. `scorppu` → `/team/scorppu`). Pick something and stick with it.
- **`handle`** — Your display name / username (e.g. `"Scorppu"`).
- **`name`** — Your actual full name.
- **`role`** — What you do on the team (e.g. `"Software Engineer"`, `"Founder & CEO"`).
- **`shortBio`** — A punchy one-liner about yourself. Shows up in preview cards. Keep it under 15 words.
- **`bio`** — A longer paragraph about you — your studies, current work, what you're into technically, maybe a hobby or two. Leave it as `""` if you're not ready yet.
- **`imageURL`** — Path to your profile pic. Drop your photo in `/public/profilePics/` and set this to `"/profilePics/yourname.jpg"`.
- **`bannerURL`** — Path to your banner pic. Drop your photo in `/public/bannerPics/` and set this to `"/bannerPics/yourname.jpg"`.
- **`cvURL`** — Path to your CV PDF under `/public/cvs/`. Format: `"/cvs/YourNameCV.pdf"`. Set to `null` if you don't have one.
- **`cvFilename`** — Just the filename without the extension (e.g. `"ChanEugeneCV"`). `null` if no CV.

***

### `socials`

Only include platforms you actually use. Just delete the ones you don't need.

```json
"socials": {
  "linkedin": "https://www.linkedin.com/in/your-profile/",
  "github": "https://github.com/YourUsername",
  "youtube": "https://youtube.com/@YourChannel",
  "twitter": "https://twitter.com/YourHandle",
  "instagram": "https://instagram.com/YourHandle"
}
```

**Supported keys:** `linkedin`, `github`, `youtube`, `twitter`, `instagram`

***

### `workExperience`

List your jobs, most recent first. Leave as `[]` if you've got nothing to put here yet.

```json
{
  "startDate": "Jun 2025",
  "endDate": "Aug 2025",       // Use "Present" if you're still there
  "role": "Job Title at Company Name",
  "description": [
    "Something cool you built or shipped.",
    "Another thing you did or learned."
  ]
}
```

- Dates go in **Month Year** format (e.g. `"Sep 2025"`).
- Write bullets in **past tense** for old jobs, **present tense** for your current one.
- 2–4 punchy bullets per role is the sweet spot.

***

### `projects`

Your notable projects. Leave as `[]` if none. No shame, you can always add later.

```json
{
  "name": "Project Name (Year)",       // Tack on the year, or "(ongoing)" if it's still active
  "description": "One or two sentences — what it does, what you used to build it, anything worth mentioning.",
  "githubURL": "https://github.com/YourUsername/repo-name"  // null if private or not on GitHub
}
```


***

### `hobbies`

The fun stuff. Leave as `[]` if you'd rather keep it professional. You can optionally link a YouTube video.

```json
{
  "name": "Hobby Name",
  "description": "A sentence about why you're into it.",
  "youtubeVideoId": "pxiPG_ZMFuY"   // Just the video ID, not the full URL. null if none.
}
```

To grab the video ID, it's the bit after `v=` in a YouTube URL:
`https://www.youtube.com/watch?v=`**`pxiPG_ZMFuY`**

***

### Bare Minimum Entry

Not ready to fill everything? Here's the minimum to avoid breaking anything:

```json
{
  "slug": "yourslug",
  "handle": "YourHandle",
  "name": "Your Name",
  "role": "Your Role",
  "shortBio": "",
  "bio": "",
  "imageURL": "/profilePics/yourname.jpg",
  "socials": {
    "github": "https://github.com/YourUsername"
  },
  "workExperience": [],
  "projects": [],
  "hobbies": [],
  "cvURL": null,
  "cvFilename": null
}
```


***

## Part 2 — Create Your Page

Once your JSON entry is ready, you need to create a page file so Next.js actually renders your profile.

### Where to put it

Create a new folder named after your **slug** inside:

```
src/app/(content)/(team)/
```

So if your slug is `yourslug`, the full path would be:

```
src/app/(content)/(team)/yourslug/page.tsx
```


### What to put in it

Copy this template and swap in your slug and function name:

```tsx
import teamData from "@/../public/team.json";
import type { TeamMember } from "@/types/team";
import ProfileHero from "@/components/team/profile/ProfileHero";
import ProfileWorkExperience from "@/components/team/profile/ProfileWorkExperience";
import ProfileProjects from "@/components/team/profile/ProfileProjects";
import ProfileHobbies from "@/components/team/profile/ProfileHobbies";
import ProfileCVDownload from "@/components/team/profile/ProfileCVDownload";
import ProfileDivider from "@/components/team/profile/ProfileDivider";

export default function YourHandle() {                                               // 👈 Change this
  const member = teamData.members.find((m) => m.slug === "yourslug") as TeamMember; // 👈 And this

  return (
    <div className="pt-10 pb-10">
      <ProfileHero member={member} />

      {member.workExperience.length > 0 && <><ProfileDivider /><ProfileWorkExperience entries={member.workExperience} /></>}
      {member.projects.length > 0 && <><ProfileDivider /><ProfileProjects projects={member.projects} /></>}
      {member.hobbies.length > 0 && <><ProfileDivider /><ProfileHobbies hobbies={member.hobbies} /></>}
      {member.cvURL && member.cvFilename && <><ProfileDivider /><ProfileCVDownload cvURL={member.cvURL} cvFilename={member.cvFilename} /></>}
    </div>
  );
}
```

The sections for work experience, projects, hobbies, and CV download will **automatically hide** if those fields are empty or `null` in the JSON — no extra work needed.

### Quick Checklist

- [ ] Added/updated my entry in `public/team.json`
- [ ] Dropped my profile picture in `public/profilePics/`
- [ ] (Optional) Added my CV to `public/cvs/`
- [ ] Created `src/app/(content)/(team)/<my-slug>/page.tsx`
- [ ] Updated the function name and slug in `page.tsx`

That's it — your profile should be live at `/team/<your-slug>`! 🎉