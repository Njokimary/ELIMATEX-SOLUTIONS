# Elimatex Solutions — Website

The official website for **Elimatex Solutions**, built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

---

## 1. Run it on your computer

You need **Node.js 20.9 or newer** (`node -v` to check).

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server
```

Open **http://localhost:3000**. Pages update instantly when you save a file.

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the production version (run this before deploying to catch errors) |
| `npm start` | Runs the production build locally |
| `npm run lint` | Checks the code for problems |

---

## 2. Where everything lives

```
app/                         ← PAGES (folder = URL)
├── layout.tsx               ← wraps every page: font, navbar, footer, SEO defaults
├── globals.css              ← brand colours & global styles
├── page.tsx                 ← Home  (/)
├── services/page.tsx        ← /services
├── services/[slug]/page.tsx ← /services/build, /services/host-reach, /services/advise-connect
├── work/page.tsx            ← /work
├── work/[slug]/page.tsx     ← /work/booking-portal ... (one page per project)
├── about/page.tsx           ← /about
├── contact/page.tsx         ← /contact
├── api/contact/route.ts     ← receives the contact form (POST /api/contact)
├── not-found.tsx            ← custom 404 page
├── sitemap.ts, robots.ts    ← SEO files for Google
├── icon.svg                 ← browser tab icon (favicon)
├── opengraph-image.png      ← preview image when the site is shared on WhatsApp/LinkedIn
└── fonts/                   ← Plus Jakarta Sans font files

components/
├── layout/                  ← Navbar, Footer, Logo, WhatsApp button
├── home/                    ← homepage sections (Hero, ServiceTabs, Process...)
├── ui/                      ← reusable pieces (Button, Kicker, Reveal, Faq, CtaBanner...)
├── work/ProjectCard.tsx     ← case study card
└── contact/ContactForm.tsx  ← the contact form

lib/                         ← CONTENT — edit text here, not in the components
├── site.ts                  ← contact details, social links, founder, nav links
├── services.ts              ← the 3 service pillars, features, FAQs, process steps
└── projects.ts              ← case studies

public/illustrations/        ← website illustrations (SVG)
```

---

## 3. Before going live — checklist

- [ ] **`lib/site.ts`** — set your real `email`, `phone`, `whatsapp` number, social links and live `url`.
- [ ] **Founder photo** — add your photo as `public/images/founder.jpg`, then set `founder.photo` to `"/images/founder.jpg"` in `lib/site.ts`.
- [ ] **Case studies** — `lib/projects.ts` contains 3 **sample** projects. Replace them with real projects and set `sample: false`. Only publish work you actually did.
- [ ] **Testimonial** — replace the placeholder quote in `components/home/Founder.tsx` with a real client quote (with their permission).
- [ ] **Client logos** — replace the placeholders in `components/home/TrustStrip.tsx` (or remove the section until you have them).
- [ ] **Contact form email** — set up Resend (see section 5).

---

## 4. Common edits

**Change a colour** — edit the `@theme` block in `app/globals.css`. Every `--color-xxx` becomes a Tailwind class (`bg-xxx`, `text-xxx`, `border-xxx`).

**Add a case study** — copy one object in `lib/projects.ts`, give it a new `slug`, and add an image to `public/illustrations/` (or `public/images/`). The page `/work/your-slug` is created automatically.

**Edit a service** — everything about the pillars (titles, features, FAQs) is in `lib/services.ts`.

**Change the logo** — only `components/layout/Logo.tsx` (and `app/icon.svg` for the favicon) need to change.

**Add a new page** — create `app/your-page/page.tsx` and add it to `navLinks` in `lib/site.ts`.

---

## 5. Contact form setup

The form posts to `app/api/contact/route.ts`. Without keys, enquiries are printed in your terminal (good for testing).

1. Copy `.env.example` to `.env.local`.
2. **Email:** create a free account at [resend.com](https://resend.com), create an API key, and set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Until you verify your domain in Resend, emails can only go to the address you signed up with.
3. **SMS alert (optional):** with an [Africa's Talking](https://africastalking.com) account, set `AT_USERNAME`, `AT_API_KEY` and `NOTIFY_PHONE` to get an SMS for every new enquiry.
4. Restart `npm run dev`.

`.env.local` is ignored by git, so your keys never reach GitHub.

---

## 6. Deploy to Vercel

1. Create a new repository on GitHub, then from this folder:
   ```bash
   git init
   git add .
   git commit -m "Elimatex website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/elimatex-web.git
   git push -u origin main
   ```
2. In [vercel.com](https://vercel.com) → **Add New → Project** → import the repo → **Deploy**. Vercel detects Next.js automatically.
3. In the Vercel project → **Settings → Environment Variables**, add the same keys from `.env.local`, then redeploy.
4. **Settings → Domains** → add `elimatex.co.ke` and follow the DNS instructions from your domain registrar.

Every `git push` to `main` redeploys the site automatically.
# ELIMATEX-SOLUTIONS
