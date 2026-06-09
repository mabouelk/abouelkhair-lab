# Abouelkhair Laboratory Site: IT Handoff

Prepared: June 3, 2026

## Site Type

This is a static website.

- No backend
- No database
- No build step required
- No server-side language required
- No forms or form handlers are included

## Entry Point

- Default page: `index.html`

## Files To Publish

Publish the full contents of this folder exactly as provided, preserving the directory structure.

Required top-level files:

- `index.html`
- `research.html`
- `team.html`
- `publications.html`
- `contact.html`
- `assets/`

## Hosting Requirements

- Serve the files as standard static web content.
- Preserve relative paths between the HTML files and the `assets/` directory.
- Ensure the server can deliver `.html`, `.css`, `.js`, and `.svg` files normally.
- Recommended default document: `index.html`.

## Path Behavior

All internal links are relative, so the site can be hosted either:

- at a domain root, or
- inside a subdirectory such as `/labs/abouelkhair/`

No path rewriting is required for normal static hosting.

## External Dependency

The stylesheet currently imports Google Fonts:

- `fonts.googleapis.com`
- `fonts.gstatic.com`

If school policy blocks Google Fonts, the site will still load with fallback sans-serif fonts, but typography will differ from the design preview.

## Included Pages

- `index.html` - home page
- `research.html` - research overview page
- `team.html` - team page with image placeholders
- `publications.html` - publications layout
- `contact.html` - contact page

## Content Notes

The site is technically ready for hosting as a static site, but some editorial placeholders remain and may need to be updated before public launch.

Known placeholder areas include:

- profile and lab image placeholders in `team.html`
- publication entries in `publications.html`
- contact and institutional details in `contact.html`

## Validation Summary

The site was checked locally before handoff:

- each page returned exactly one `<!DOCTYPE html>`
- each page returned exactly one main `h1`
- shared CSS, JS, and SVG assets were referenced as relative paths

## Recommended Deployment Method

Unzip the package and publish the folder contents to the target web directory without changing the internal structure.

If the school website requires integration into a CMS template rather than static directory hosting, use this package as the source assets and HTML reference implementation.
