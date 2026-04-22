# Biplob Portfolio — Next.js 14

## File Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar + Footer)
│   ├── page.tsx            ← Home page
│   ├── about/
│   │   └── page.tsx        ← About page
│   └── projects/
│       └── page.tsx        ← All projects with filter
├── components/
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── TechStack.tsx
│       ├── FeaturedProjects.tsx
│       ├── GitHubStats.tsx   ← Fetches LIVE from GitHub API
│       ├── Contact.tsx
│       └── Footer.tsx
└── data/
    ├── config.ts             ← YOUR info — edit this file only
    └── projects.ts           ← All 20 real projects with links
```

## Setup

```bash
npx create-next-app@latest biplob-portfolio --typescript --tailwind --eslint --app --src-dir
cd biplob-portfolio
# Replace files with the ones provided
npm run dev
```

## To update your info

Edit ONLY `src/data/config.ts` — all sections pull from this one file.

## Contact form

Uses formsubmit.co (free, no backend needed).
First submission will ask you to confirm your email.

## GitHub Stats

Fetches live from GitHub API at build time (ISR, revalidates every hour).
To avoid rate limits, add to `.env.local`:
```
GITHUB_TOKEN=your_github_personal_access_token
```

## Deploy to Vercel

```bash
npm run build   # test build locally first
# Then push to GitHub and import in vercel.com
```
