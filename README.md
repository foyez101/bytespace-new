# ByteSpace — Online Course Platform (Frontend Assessment)

A pixel-focused implementation of the **ByteSpace New** Figma design, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

**Live demo:** https://bytespace-new-ochre.vercel.app

## Pages

| Route       | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| `/`         | Full landing page (required)                                                  |
| `/login`    | Sign-in page with validation, show/hide password and social buttons (bonus)   |
| `/register` | Sign-up page with validation (bonus)                                          |
| any other   | Custom 404 page from the design (extra)                                       |

## Features

- **Faithful to the design:** colors, typography (Poppins + Figtree), spacing and the layered hero/collage artwork follow the Figma file.
- **Fully responsive:** mobile, tablet and desktop. Layered artwork (people, 3D shapes, floating cards) sits on a scalable `Stage` component, so the composition stays intact at any width.
- **Interactive landing page:**
  - Category chips filter the course grid
  - The hero search filters courses (`/?q=figma`) with a friendly empty state
  - Newsletter form with email validation
  - Mobile navigation menu
- **Auth forms:** client-side validation, inline errors, loading state and a success message. There is no backend, so nothing is sent anywhere.
- **Accessible:** semantic landmarks, labelled inputs, `aria-*` states, visible focus styles and keyboard-friendly controls.
- **Performance:** `next/image` everywhere and self-hosted fonts via `next/font/local` (no layout shift, no external font requests).

## Project structure

```
app/
  page.tsx              # Landing page (composes the home sections)
  login/  register/     # Auth pages
  not-found.tsx         # 404 page
  layout.tsx            # Fonts + metadata
  globals.css           # Design tokens (@theme), grid background, Stage utility
components/
  layout/               # Navbar, Footer, NewsletterForm
  home/                 # Hero, Partners, CoursesSection, LearningPaths, GrowthSection, CreatorCta, Testimonials
  auth/                 # AuthLayout, AuthForm, TextField
  course/               # CourseCard
  cards/                # Floating widgets (Learning Progress, Happy Students, Revenue ...)
  ui/                   # Button, Chip, Container, Logo, SectionHeading, AvatarGroup, Shape, Stage, icons
data/                   # Course, category, testimonial and navigation content
lib/                    # Small helpers
public/images/          # Optimised assets exported from the design
```

Content lives in `data/`, so sections render from data rather than hard-coded markup, and components stay small and reusable (for example, `CourseCard` is used by the course grid and the auth-page collage).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Git workflow

- `main` holds the initial project setup
- All feature work was done on the `feature/landing-page` branch and merged through a Pull Request

## Notes for the reviewer

- Images and 3D shapes were exported from the provided Figma frames.
- Login and Register are front-end only (no API), as the task scope is frontend.
