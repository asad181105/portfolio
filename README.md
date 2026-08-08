# Mohammed Asad — Premium Portfolio

A production-ready, multi-page portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready architecture, React Three Fiber, Lenis smooth scrolling, and shadcn-style UI components.

## Pages

- **Home** — Hero, particles, dynamic text, featured projects
- **About** — Biography, scroll-animated timeline, fun facts
- **Projects** — Filter, search, featured section, detail pages
- **Skills** — Skill bars, radar chart, circular progress, floating tech
- **Experience** — Animated timeline, achievement counters
- **AI Journey** — Learning path, roadmap, experiments
- **Gallery** — Masonry grid with lightbox
- **Contact** — Form, links, world map

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. Update `src/lib/site.ts` — email, social links, URL
2. Replace `public/resume.pdf` with your real resume
3. Edit project data in `src/data/`
4. Replace Unsplash placeholder images with your photos

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Three Fiber
- Lenis
- Recharts
- Radix UI / shadcn patterns
- Lucide Icons

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add environment variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://your-name.vercel.app`)
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
   - `ADMIN_SESSION_SECRET`
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

Run the SQL in `supabase/schema.sql` in your Supabase project before using the contact form and `/admin` dashboard.

## SEO

- Metadata & Open Graph per page
- `sitemap.xml` and `robots.txt`
- JSON-LD structured data (Person schema)

## License

MIT — Personal portfolio template for Mohammed Asad.
