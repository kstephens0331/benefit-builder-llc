# Benefit Builder LLC Website

Marketing website for Benefit Builder LLC, a Section 125 pre-tax benefits administrator based in Texas.

**Live URL**: https://benefitbuilderllc.com

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite with vite-react-ssg (prerendered static pages)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **SEO**: react-helmet-async with per-route JSON-LD
- **Forms**: React Hook Form + Zod
- **Email**: Gmail via nodemailer (info@stephenscode.dev)

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/services/employers` | For Employers |
| `/services/brokers` | For Brokers |
| `/platform` | Platform |
| `/savings-calculator` | Savings Calculator |
| `/compliance` | Compliance |
| `/about` | About |
| `/partners` | Partners |
| `/contact` | Contact |
| `/legal/privacy` | Privacy Policy |
| `/legal/terms` | Terms of Service |

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # prerender plus sitemap into dist/
npm run test      # run vitest
npm run lint      # eslint src/
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```
VITE_SITE_URL=https://benefitbuilderllc.com
GMAIL_USER=info@stephenscode.dev
GMAIL_APP_PASSWORD=
MAIL_TO=info@stephenscode.dev
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
VITE_TURNSTILE_SITE_KEY=
```

## Deployment

Prerendered static site. Run `npm run build` to produce `dist/`, then sync `dist/` to the Caddy site root on the VA server (`135.148.121.237`), which serves it behind Cloudflare. There is no CI pipeline; deploys are a manual sync of `dist/`.

---

**Built by StephensCode LLC**
