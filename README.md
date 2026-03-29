# JoinTech Precast — B2B Company Website

A Next.js 14 (App Router) website for a precast concrete connection hardware exporter.
Built for deployment on **Vercel** at zero cost.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + tailwindcss-animate
- **Icons:** lucide-react
- **Email:** Resend API (contact form)
- **Deployment:** Vercel (recommended, free tier)

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
CONTACT_EMAIL=your@email.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

> **Note:** If `RESEND_API_KEY` or `CONTACT_EMAIL` are not set, form submissions will be logged to the console instead of emailed. The site still runs fine.

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (Zero Cost)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. In Vercel project settings → **Environment Variables**, add:
   - `CONTACT_EMAIL`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
4. Click **Deploy**. Done.

Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

### Custom Domain

In Vercel project settings → Domains → add your registered domain and follow DNS instructions.

## Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month).
2. Add and verify your sending domain.
3. Create an API key and paste it into `RESEND_API_KEY`.

## Project Structure

```
jointech-precast/
├── app/
│   ├── layout.tsx          # Root layout (header + footer)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Tailwind base styles
│   ├── products/
│   │   ├── page.tsx        # Product list with category filter
│   │   └── [slug]/page.tsx # Product detail page
│   ├── industries/
│   │   └── page.tsx        # Industries served
│   ├── about/
│   │   └── page.tsx        # About us page
│   ├── contact/
│   │   └── page.tsx        # Contact / inquiry page
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API (Resend)
├── components/
│   ├── header.tsx          # Sticky navigation header
│   ├── footer.tsx          # Site footer
│   └── contact-form.tsx    # Client-side contact form
├── lib/
│   ├── products.ts         # Static product data (edit here)
│   └── utils.ts            # cn() utility
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customizing Content

### Products
Edit `lib/products.ts` to add, remove, or update products. Each product has:
- `name`, `slug`, `category`, `image` (Unsplash URL or your own)
- `description`, `longDescription`
- `specs[]` — table rows (label / value pairs)
- `applications[]` — bullet list
- `standards[]` — applicable standards
- `relatedIndustries[]` — links back to industry sections

### Images
Replace Unsplash URLs in `lib/products.ts` and page files with your own product/factory photos hosted anywhere (or upload to `/public`).

### Company Info
Update contact details, address, and team members in:
- `components/footer.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

## Build & Lint

```bash
npm run build   # production build check
npm run lint    # ESLint
```
