# Felix Ngitari — Portfolio

A focused editorial portfolio for Felix Ngitari, an independent full-stack developer and creative partner based in Nairobi, Kenya.

## Stack

- Next.js 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS for the build pipeline
- Static SVG project artwork in `public/`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production checks

```bash
npm run lint
npm run build
npm start
```

The homepage is intentionally a static, lightweight page. Project content and outbound links live at the top of `app/page.tsx`; global visual treatment lives in `app/globals.css`.

## Contact and deployment

The contact actions use `hello@felixngitari.dev`. Update that address and the `metadataBase` value in `app/layout.tsx` if the public domain changes.
