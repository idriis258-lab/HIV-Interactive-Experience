# Phase 0 — Foundation

- **Project:** HIV — The Ultimate Interactive Experience
- **Version:** 0.1.0
- **Status:** Foundation complete; chapter production has not started.
- **Date:** 20 November 2026

---

## 1. What Phase 0 delivers

Phase 0 establishes the production foundation for a cinematic, evidence-led academic experience:

- A React + TypeScript + Vite application with a hash-based presentation shell.
- A central scene registry for 13 chapters plus a credits coda.
- A finished, real title sequence for Chapter 01 (Introduction).
- Honest “in production” pages for every unbuilt chapter — no placeholder interactions or invented medical content.
- English, French and Arabic translations with full RTL layout support.
- Presentation mode, keyboard shortcuts, reduced-motion support, WebGL fallback, error boundaries and loading states.
- A reusable visual system: deep black, crimson light, bone-white typography and restrained cyan/electric accents.
- A lazy-loaded Three.js layer with an abstract molecular field. The visual is explicitly labelled as abstract, not a medical model.

Phase 0 does **not** publish clinical guidance. Every chapter review is marked `pending` and the reference list is intentionally empty.

---

## 2. Quick start

```bash
npm install
npm run dev        # http://127.0.0.1:5173
npm run typecheck  # TypeScript project build check
npm run build      # typecheck + production bundle
npm run preview    # http://127.0.0.1:4173
```

Node.js `>=22.12.0` is required.

### Verified environment

| Tool | Version |
| --- | --- |
| Node.js | 26.13.0 (project requires `>=22.12.0`) |
| npm | 11.20.0 |
| React | 19.3.1 |
| TypeScript | 5.9.3 |
| Vite | 7.3.8 |
| Three.js | 0.187.0 |
| React Three Fiber | 9.8.2 |
| Drei | 10.7.9 |
| GSAP | 3.15.1 |
| Framer Motion | 14.14.0 |
| Tailwind CSS | 4.3.5 |
| Lucide React | 1.76.0 |

---

## 3. Routes and controls

| Route | Purpose |
| --- | --- |
| `#/` | Cinematic title sequence (Chapter 01) |
| `#/program` | Chapter programme and production status |
| `#/chapter/:sceneId` | Chapter route; currently renders an in-production page |
| `#/credits` | Credits coda placeholder |
| any other hash | Designed not-found page |

| Query parameter | Purpose |
| --- | --- |
| `?presentation=1` | Presentation mode (larger type, reduced chrome) |
| `?lang=en\|fr\|ar` | Initial locale; also persisted in local storage |

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| `H` | Return to the title |
| `G` | Open the programme |
| `P` | Toggle presentation mode |
| `?` | Open build notes |
| `Esc` | Close an overlay |

Shortcuts are ignored while typing in an editable field.

---

## 4. Architecture

```text
src/
  app/                  App composition, providers, routing
    providers/          I18n, motion preferences, presentation state
  components/
    navigation/         Header, footer, language switcher
    presentation/       Programme, chapter pages, about dialog, route announcer
    transitions/        Route transition wrapper
    ui/                 Buttons, badges, brand mark, loading, error and WebGL fallbacks
  config/               Scene registry, site metadata, locales, presentation constants
  content/
    translations/       Typed EN / FR / AR dictionaries
    medical/            Review gate and per-chapter review status
    references/         Verified-reference store (empty in Phase 0)
  hooks/                Hash routing, shortcuts, media queries, WebGL support, scroll reveal
  scenes/               14 scene modules (13 chapters + credits coda)
  styles/               Design tokens and global CSS
  three/                Lazy canvas, abstract molecular field, materials, camera animation
  utils/                Class names, DOM, formatting, GSAP, storage, URL helpers
```

### Key implementation notes

- **Scene registry:** `src/config/scenes.ts` is the single source of truth for chapter order, status, phase, accent and translation keys. The 14 `src/scenes/*/scene.ts` modules are registered there.
- **Routing:** `useHashRoute` provides dependency-free hash routing. `RouteView` maps routes to views.
- **Presentation state:** `PresentationProvider` writes `data-presentation` to `<html>` and keeps the `presentation` query parameter in sync. It requests fullscreen when the browser permits it; if fullscreen is denied, presentation styling still applies.
- **Internationalisation:** translation dictionaries are typed against the English source. Arabic sets `lang="ar"` and `dir="rtl"`, with Arabic typography overrides in `globals.css`.
- **Three.js isolation:** the canvas is lazy-loaded. Three, R3F and Drei are split into dedicated vendor chunks so the initial route does not pay the full 3D cost.
- **Resilience:** nested error boundaries cover the application, the scene canvas and a static fatal-error state. `SceneCanvas` handles unsupported WebGL and context loss with a designed fallback.

---

## 5. Scene map

| # | Scene | Route | Status | Phase | Accent |
| --- | --- | --- | --- | --- | --- |
| 01 | Introduction | `#/` | **Ready** | 0 | Crimson |
| 02 | The Virus | `#/chapter/virus` | Planned | 2 | Crimson |
| 03 | CD4 T Cells | `#/chapter/cd4` | Planned | 2 | Cyan |
| 04 | Infection | `#/chapter/infection` | Planned | 2 | Crimson |
| 05 | The Viral Lifecycle | `#/chapter/lifecycle` | Planned | 2 | Electric |
| 06 | Immunity | `#/chapter/immunity` | Planned | 2 | Cyan |
| 07 | HIV & AIDS | `#/chapter/hiv-aids` | Planned | 3 | Crimson |
| 08 | Transmission | `#/chapter/transmission` | Planned | 3 | Electric |
| 09 | Prevention | `#/chapter/prevention` | Planned | 3 | Cyan |
| 10 | Diagnosis | `#/chapter/diagnosis` | Planned | 3 | Electric |
| 11 | Treatment | `#/chapter/treatment` | Planned | 3 | Cyan |
| 12 | Stigma | `#/chapter/stigma` | Planned | 3 | Crimson |
| 13 | Knowledge Check | `#/chapter/quiz` | Planned | 4 | Bone |
| — | Credits | `#/credits` | Planned | 4 | Bone |

Only Chapter 01 is a complete scene. Every other route deliberately states that it is in production and shows its editorial scope, phase and review status.

---

## 6. Design system

Defined in `src/styles/tokens.css` and exposed through Tailwind theme tokens in `src/styles/globals.css`.

| Role | Token |
| --- | --- |
| Deep background | `#030304` / `#050506` |
| Raised surface | `#0a0a0d` / `#101014` |
| Primary type | `#f4f1ec` bone |
| Secondary type | `#a09d99` mist |
| Tertiary type | `#807d79` mist-dim (AA contrast on ink) |
| Primary accent | `#d21f3c` crimson |
| Bright accent | `#ff4d5e` crimson-bright |
| Cool accents | `#5fe3e0` cyan / `#4f7dff` electric |

Typography:

- **Brand / display:** Space Grotesk Variable
- **Body:** Inter Variable
- **Arabic:** Noto Sans Arabic Variable

The title sequence uses an abstract particle field and orbital rings. It is decorative and is explicitly described as “not a medical model.”

---

## 7. Editorial and scientific policy

The project is built for an academic presentation, so the editorial gate is deliberately conservative:

1. Draft the chapter.
2. Complete medical review.
3. Verify every citation.
4. Publish only after review.

Current state:

- `MEDICAL_POLICY.reviewStatus` — `pending`
- Published claims — `0`
- Published references — `0`
- Reviewer — not assigned
- Every chapter review record — `pending`
- `REFERENCES` — intentionally empty

No diagnosis, treatment, prevention or transmission guidance is published in this build. Chapter pages are production notices, not medical content. Citations must never be fabricated; add them only after verifying the source against the final chapter text.

---

## 8. Verification

### Automated checks

| Check | Result |
| --- | --- |
| `npm run typecheck` | Pass, no errors |
| `npm run build` | Pass, 3,202 modules transformed |
| Peer dependencies | No invalid peers; only optional platform packages unmet |

### Production bundle

| Asset | Size | Gzip |
| --- | --- | --- |
| `index.html` | 4.10 kB | 1.37 kB |
| `index-*.css` | 43.84 kB | 9.78 kB |
| `index-*.js` | 81.91 kB | 23.67 kB |
| `SceneCanvas-*.js` (lazy) | 5.77 kB | 2.46 kB |
| `react-vendor-*.js` | 221.88 kB | 69.05 kB |
| `motion-vendor-*.js` | 260.83 kB | 95.21 kB |
| `r3f-vendor-*.js` (lazy) | 181.57 kB | 57.84 kB |
| `three-core-*.js` (lazy) | 752.26 kB | 192.64 kB |

No chunk-size warning remains. The Three.js payload is isolated behind the lazy `SceneCanvas` import.

### Browser verification

Checked in the in-app Chromium browser:

- Title page loads and the canvas initialises.
- Programme page lists all 13 chapters and the credits coda.
- A planned chapter route renders its honest production notice.
- Unknown chapter routes render the not-found page.
- EN → FR → AR switching updates content, `lang` and `dir`; Arabic renders RTL.
- Presentation mode toggles `data-presentation` and the `?presentation=1` parameter.
- `H`, `G`, `P` and `?` shortcuts work; `Esc` closes the build notes.
- Native build-notes dialog opens, traps modality and restores focus.
- WebGL context-loss event swaps the canvas for the designed fallback.
- No console errors were observed on the verified routes.

### Lighthouse

After accessibility fixes, both the title page and a chapter page score:

| Category | Score |
| --- | --- |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Fixes included AA contrast for tertiary text, accessible names that include visible labels, and a real `public/robots.txt`.

---

## 9. Known limits

- Chapter 02–13 and the credits coda are intentionally unbuilt.
- The Three.js scene is an abstract title visual, not a scientific or anatomical model.
- There is no backend, CMS, authentication or analytics.
- Locale and reduced-motion preferences persist in local storage; nothing else is stored.
- There is no automated test suite yet. Verification is typecheck, production build, browser checks and Lighthouse.
- Deployment is not configured; `dist/` is a static build ready for a static host.
- The existing root `README.md` was left untouched. Project documentation lives in `docs/`.

---

## 10. Next phase

Phase 1 is the core experience layer: the shared scene framework, chapter transition language, deeper presentation controls and the reusable 3D/environment primitives that later chapters will use. Chapter content should not begin until that framework and the scientific review workflow are approved.

**Stop point:** Phase 0 is complete and ready for review. No Phase 1 work has started.
