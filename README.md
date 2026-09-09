# Genesis

Single-page landing site for **Genesis**, a 3-person tech agency in Athens, Greece.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- IBM Plex Sans / IBM Plex Mono

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Language (EN / EL)

The site is bilingual. Use the `[EN | EL]` toggle in the nav, or open with a URL param:

- English (default): `/?lang=en`
- Greek: `/?lang=el`

Selection persists in `localStorage` and the `lang` query param. The brand name **Genesis** never translates.

## Build

```bash
npm run build
npm start
```

## Sections

- Hero
- Services (What we build)
- Work / portfolio
- Team
- Contact

## Deploy

Connected to Vercel from the `main` branch.
