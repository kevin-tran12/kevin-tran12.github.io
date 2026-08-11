# kevin-tran12.github.io

Personal portfolio — [kevin-tran12.github.io](https://kevin-tran12.github.io/).

Static site built with [Astro](https://astro.build). No client-side JavaScript ships to the
browser, no webfonts, no external stylesheets.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # static output in dist/
npm run preview  # serve the built output locally
```

## Editing content

All copy and every outbound link live in [`src/data/site.ts`](src/data/site.ts) — hero,
about, featured project, experience, skills, credentials, contact. Adding a project or a
role is a data edit; the components read from that file.

Layout and design tokens (colors, spacing, type scale, light/dark) are in
[`src/styles/global.css`](src/styles/global.css). Each component keeps its own scoped
styles.

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages. The repository's Pages source
must be set to **GitHub Actions** (not "Deploy from a branch").
