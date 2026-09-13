# Portfolio Repository Architecture & Coding Standards

## 1. Core Stack & Libraries

| Capability | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + PostCSS |
| Animations | Framer Motion |
| Path alias | `@/*` → `./src/*` |
| Icons | `react-icons` exclusively (`fa6`, `hi2`, `fi`, `md`, `io5`) |

---

## 2. Project Layout (`src/`)

```
src/
├── app/
│   ├── layout.tsx                      # Root layout, typography, metadata & global theme provider
│   ├── page.tsx                        # Home route entry: imports and renders <Home /> from @/app/features/home
│   └── features/                       # Feature modules
│       └── home/                       # Portfolio core feature module
│           ├── index.tsx               # Feature UI composition & section transitions
│           ├── useHook.ts              # Business logic layer (navigation tab state, active color theme, modal preview, filter)
│           ├── types.ts                # Feature-specific types & interfaces
│           ├── data.ts                 # Portfolio data (experience, education, projects, skills, blogs)
│           └── sections/               # Feature section components
│               ├── HeroSection.tsx
│               ├── AboutSection.tsx
│               ├── PortfolioSection.tsx
│               ├── ContactSection.tsx
│               └── BlogSection.tsx
├── components/                         # App-level shared shells & layout
│   ├── navbar/index.tsx                # Floating right-side navigation + responsive mobile drawer
│   ├── themeSwitcher/index.tsx         # Live accent color switcher modal/toggle
│   └── modal/ProjectModal.tsx          # Project details lightbox modal
├── shared/                             # Reusable UI primitives
│   ├── heading/
│   │   └── Text.tsx                    # Mandatory for all text/typography
│   ├── buttons/
│   │   └── Button.tsx                  # Mandatory for all buttons and interactive triggers
│   ├── cards/
│   │   └── CardWrapper.tsx             # Mandatory for all card containers
│   ├── Chip.tsx                        # Mandatory for badges, tags, date chips, and filter pills
│   └── input/
│       ├── InputField.tsx              # Styled text inputs
│       └── TextareaField.tsx           # Styled textareas
└── styles/
    └── globals.css                     # Dark mode tokens, dynamic theme CSS variables, and reset
```

---

## 3. Feature Architecture (`src/app/features/[featureName]/`)

For every feature:
1. **`index.tsx`**: Pure UI composition consuming `useHook()`.
2. **`useHook.ts`**: Business logic layer (state management, event handlers, modals, filtering).
3. **`sections/`**: Modular sub-sections for clean maintainability.

---

## 4. Strict Shared Primitives Usage (Mandatory)

1. **Typography (`@/shared/heading/Text.tsx`)**:
   - Mandatory for all typography (headings, titles, body, labels, metadata).
   - Use `as` prop (`as="h1"`, `as="h2"`, `as="h3"`, `as="p"`, `as="span"`).
   - Do NOT use raw unstyled `<h1>`, `<p>`, or `<span>`.

2. **Buttons (`@/shared/buttons/Button.tsx`)**:
   - Mandatory for all buttons, CTA triggers, filter tabs, and submit buttons.
   - Supports variants: `primary`, `secondary`, `outline`, `ghost`, `icon`.

3. **Cards (`@/shared/cards/CardWrapper.tsx`)**:
   - Mandatory for all card containers (stat counters, resume timeline items, portfolio project tiles, blog cards).

4. **Chips & Badges (`@/shared/Chip.tsx`)**:
   - Mandatory for skill tags, timeline duration badges, categories, and status indicators.

5. **Icons (`react-icons`)**:
   - Exclusively use `react-icons` (e.g. `react-icons/fa6`, `react-icons/hi2`, `react-icons/fi`).

---

## 5. Coding Principles

- **Write Only What Is Required**: Keep implementations clean, direct, and sufficient.
- **Minimal Diffs**: Focus changes on the required components.
- **Responsive & Accessible**: Ensure seamless usability on mobile, tablet, and desktop viewports.
