# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the main landing page for boostsir.com, built with Next.js and deployed to GitHub Pages. The site showcases two main products:
1. **Framefill**: A webapp for image resizing and optimization
2. **Hidebookmarks**: A Chrome extension for managing bookmarks

The architecture uses a reverse proxy setup where:
- `boostsir.com/` → Main landing page (this repository)
- `boostsir.com/framefill` → Routes to Framefill GitHub Pages
- `boostsir.com/hidebookmarks` → Routes to Hidebookmarks GitHub Pages

## Key Development Commands

**Project Setup** (run once):
```bash
npm install next-sitemap
```

**Development**:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Export static files to /out
npm run postexport   # Generate sitemap after export
```

**Full Build & Deploy Pipeline**:
```bash
npm run build && npm run export && npx next-sitemap
```

## Architecture & SEO Strategy

### Site Structure
```
boostsir.com/
├── /                 (Main landing page)
├── /privacy          (Privacy policy)
├── /hidebookmarks    (Reverse proxy to product site)
└── /framefill        (Reverse proxy to product site)
```

### Sitemap Configuration
The site uses `next-sitemap` to generate a unified sitemap containing both local pages and reverse-proxied product pages. Configuration in `next-sitemap.config.js` includes:
- Local pages (auto-generated)
- Product pages manually added via `additionalPaths`

### Key Files & Configuration

**next.config.js**:
```javascript
module.exports = {
  output: "export",  // Required for GitHub Pages static deployment
};
```

**next-sitemap.config.js**:
```javascript
module.exports = {
  siteUrl: "https://boostsir.com",
  generateRobotsTxt: true,
  additionalPaths: async () => [
    { loc: "/hidebookmarks", changefreq: "monthly", priority: 0.8 },
    { loc: "/framefill", changefreq: "monthly", priority: 0.8 },
  ],
};
```

## Deployment

The site uses GitHub Actions for automated deployment to GitHub Pages. The workflow:
1. Builds the Next.js app
2. Exports to static files
3. Generates sitemap
4. Deploys to GitHub Pages

**GitHub Actions workflow location**: `.github/workflows/deploy-gh-pages.yml`

## Development Notes

- This is a static export Next.js app optimized for GitHub Pages
- All routing to product subpaths (`/framefill`, `/hidebookmarks`) is handled by reverse proxy, not Next.js routing
- SEO is critical: ensure all product pages are included in the main sitemap for unified crawling
- Product pages should include canonical links pointing back to the main domain

## Testing Deployment

To verify the build locally:
```bash
npm run build && npm run export && npx next-sitemap
```

Check that:
- `out/sitemap.xml` contains all local and product URLs
- `out/robots.txt` references the sitemap correctly