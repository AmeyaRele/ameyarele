# Agents Guide — Portfolio Website (React + TypeScript)

This repository is for a personal portfolio website. It is a frontend-only application built with React and TypeScript. If the app has not been scaffolded yet, follow the Setup section below first.

## Tech Stack
- Framework: React
- Language: TypeScript
- Build tool: Vite (recommended)
- Node: 18 LTS or 20 LTS
- Package manager: npm

## Local Setup (first-time)
If this repo does not yet have a `package.json`, initialize a Vite + React + TypeScript app in the repo root:

```bash
# in repo root
npm create vite@latest . -- --template react-ts
npm install
```

## Build & Run
Once the project is scaffolded and dependencies are installed, use these commands:

```bash
# start dev server (default: http://localhost:5173)
npm run dev

# production build to dist/
npm run build

# serve the production build locally
npm run preview
```

Expected scripts in `package.json` (created by Vite):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

## Vite Base Path
- User site (repo named `<username>.github.io`): no special base needed (defaults to `/`).
- Project site (any other repo, e.g., `ameyarele`): set `base: '/<repo-name>/'`.

`vite.config.ts` example:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For user site: base: '/'
  // For project site (this repo name): base: '/ameyarele/'
  base: '/',
})
```

## Content To Include (from README.md)
- Summary: Former SDE at Microsoft; worked on Azure Functions SQL Extension (SQL trigger).
- Education: M.S. at Stony Brook University; projects involving visualization with LLMs.
- Interests: Open-source collaboration; Azure Functions, SQL change tracking, Kubernetes, Go, C#.
- Contact: arele@cs.stonybrook.edu

Agents: reflect this content in About, Projects, and Contact sections. Keep copy concise and professional; link to the Azure Functions SQL Extension repo.

## Deploying to GitHub Pages
There are two common hosting options. Recommended is a user site.

### Option A — User site (recommended)
1. Create a repository named `<username>.github.io` (e.g., `ameyarele.github.io`).
2. Put this Vite app in that repo’s root and push.
3. In the repo: Settings → Pages → Build and deployment → Source: GitHub Actions.
4. Add a Pages deployment workflow (see example below). It builds to `dist` and publishes via Pages.

### Option B — Project site from this repo
1. Keep code here (e.g., `ameyarele/ameyarele`).
2. Set Vite base to `'/ameyarele/'` in `vite.config.ts`.
3. Use GitHub Pages with GitHub Actions to publish the `dist` output (same workflow; Pages will serve at `https://<username>.github.io/ameyarele/`).

### GitHub Actions workflow (Pages)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Notes:
- For Option A (user site), `base: '/'` and the site is served at `https://<username>.github.io/`.
- For Option B (project site), set `base: '/ameyarele/'` and the site is served at `https://<username>.github.io/ameyarele/`.

## Custom Domain (optional)
- With GitHub Education, you may have domain credits (e.g., via the Student Developer Pack). Claim a domain, then:
  - Add a `CNAME` file containing your domain name (e.g., `www.example.com`) in `public/` before build or directly at repo root for Pages.
  - In your DNS, create a CNAME record: `www` → `<username>.github.io`.
  - In repo Settings → Pages → Custom domain, enter your domain and enable HTTPS.

## Agent Operating Guidelines
- Keep changes minimal and focused. Use React + TS throughout.
- Follow Vite’s conventions: `src/main.tsx`, `src/App.tsx`, `index.html`, `public/` for static assets.
- Provide clear, copy-edited content for landing, projects, experience, and contact pages.
- When deploying, verify Pages status checks are green and the site loads under the correct path.
- Prefer accessibility (semantic HTML, landmarks, alt text) and basic SEO (title, meta, OpenGraph).

## Quick Checklist
- [ ] Node 18/20 installed; `npm install` works
- [ ] `npm run dev` serves the site locally
- [ ] Update site copy with README details
- [ ] Vite `base` configured for your hosting choice
- [ ] Pages workflow added and succeeds on `main`
- [ ] (Optional) Custom domain configured and HTTPS enabled
