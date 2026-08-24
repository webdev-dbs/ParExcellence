# ParExcellence Webflow Assets

Source-controlled CSS and JavaScript components for the ParExcellence Webflow
site. The build produces two minified files suitable for Webflow embeds:

- `dist/parexcellence.css`
- `dist/parexcellence.js`

## Development

Install dependencies and start the watch build:

```sh
npm install
npm run dev
```

Keep component styles in `src/styles/components/` and component scripts in
`src/scripts/components/`. Import new files from the `index.css` or `index.js`
file in the matching components directory to add them to the bundles.

Create a production bundle with:

```sh
npm run build
```

## Cloudflare Pages

Use `npm run build` as the build command and `dist` as the build output
directory. `wrangler.toml` records the output directory for Wrangler and
Cloudflare Pages tooling.
