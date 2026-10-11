# What changed

## Bugs fixed
- Font URLs were wrong (`/fonts/otf/...` vs `/fonts/amiamie/otf/...`), so Amiamie never loaded. Fixed and switched to WOFF2.
- Project links were malformed markdown strings (`"[url](url) "`) and never used. Fixed; each project row is now a real link.
- Contact: social icon was rendered as a function (`{social.icon}`), which React can't render. Now a proper component. Links now open in a new tab with `rel="noopener noreferrer"`.
- Works: every row had `id="project"`, so only the first row's entrance animation ran. Now each row animates.
- Navbar used react-scroll's own scroll animation, fighting Lenis. Now uses `lenis.scrollTo`; menu closes after navigating and on Escape.
- Lenis and ScrollTrigger were not synced (pinned/scrubbed sections could lag). Synced via `useLenis(ScrollTrigger.update)`.
- Marquee leaked a GSAP Observer on every unmount/re-run and measured widths before the font loaded.
- Loader could hang forever if the model never reached 100%. Now has an 8 s cap and fades out.
- `index.html`: placeholder title ("Vite + React"), missing favicon (`/vite.svg` didn't exist), no meta description.
- About image used a relative path (`images/...`), which breaks on nested routes.
- Native `scroll-behavior: smooth` conflicted with Lenis; removed.
- Hero figure used `100vw` (causes horizontal overflow). Now `w-full`.

- Skills section (ServiceSummary): rows slid 20-100% of their width plus fixed offsets, so words left the screen mid-scroll. Now a small symmetric drift (±3-4vw), type scales with viewport width so each row fits, rows wrap cleanly on mobile.

## Content / typos
- "Cod with purpose" → "Code with purpose"; "Architucture" → "Architecture"; "Service" → "Services"
- Contact copy: "how or project Idea? WE'D ... discus" → "a question or a project idea? We'd ... discuss"; "just imagin" → "just imagine"
- "webs/apps" → "web apps"; "contact us" marquee → "contact me"; mismatched closing quote fixed.

## Performance (public/ 28 MB → 2.4 MB; dist 3.7 MB)
- Planet.glb 18.7 MB → 1.7 MB (meshopt + WebP textures, 2048→1024 on the two large maps)
- Images were PNGs saved as `.jpg` (up to 1.9 MB). Converted to WebP (~30-80 KB each)
- Fonts: 20 files / 1.6 MB → 3 WOFF2 files (~80 KB), only the styles actually used; preloaded
- JS split into vendor chunks (three, r3f, gsap); main chunk ~104 KB
- Hero 3D scene stops rendering when scrolled out of view; DPR capped at 2
- Removed runtime fetch of icons from api.iconify.design (inline SVG + react-icons)

## Accessibility / SEO
- One `<h1>` (was five); section titles are `<h2>`, items `<h3>/<h4>`
- Menu toggle is a real `<button>` with `aria-expanded`/`aria-label`; nav links are real anchors
- Descriptive `alt` text; decorative images/marquees hidden from screen readers
- `mailto:` and `tel:` links; `<main>` landmark; meta description, Open Graph tags, theme-color

## Robustness
- WebGL detection plus an ErrorBoundary: no 3D support no longer breaks (or spams errors on) the page

## Cleanup
- Removed ~190 lines of commented-out template data, unused `SocialLinks` component, unused deps (`react-scroll`, `maath`), moved nothing to devDependencies that runs in production
- GSAP plugins registered once in `src/lib/gsap.js`
- ESLint config: capitalised JSX component params no longer flagged as unused
- README rewritten (it was still the original tutorial author's)
- Package renamed `bhushan-nasre-portfolio`
