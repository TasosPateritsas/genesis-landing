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

The site is bilingual. English is the default and stays unprefixed. Greek lives under `/el`.

- English: `/`, `/services`, `/contact`
- Greek: `/el`, `/el/services`, `/el/contact`

The `[EN | EL]` toggle opens the same page in the other language. Old `?lang=el` links redirect to the matching `/el` URL. The brand name **Genesis** never translates.

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
