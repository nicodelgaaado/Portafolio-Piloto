# Portfolio

This repository contains a personal portfolio website built as a multi-page Next.js application. The project presents Nicolas Delgado's professional profile through curated sections for introduction, selected work, technical skills, certifications, experience, and direct contact.

## Project Scope

The portfolio is organized into four primary routes:

- `Home`: personal introduction, role, location, profile actions, education, interests, summary metrics, testimonials, and professional contacts.
- `Projects`: a filtered showcase of selected work with stack summaries, short descriptions, GitHub links, and live demos.
- `Skills`: grouped technologies, certifications, and timeline-style experience entries.
- `Contact`: a validated contact form for inbound collaboration or hiring inquiries.

The content is intentionally portfolio-oriented rather than blog-oriented or CMS-driven. Most of the information is authored directly in the React components as curated arrays and page sections, which keeps the site simple to maintain and easy to tailor for presentation-focused use.

## Tech Stack

### Core Framework

- `Next.js 16` with the App Router for route-based page composition.
- `React 19` for the component model and client-side interactivity.
- `TypeScript` for typed component props, form state, and UI data structures.

### Styling and UI

- `Tailwind CSS v4` for utility-first styling.
- `shadcn/ui` patterns and generated primitives for reusable interface elements such as buttons, cards, badges, avatars, separators, inputs, and textareas.
- `class-variance-authority`, `clsx`, and `tailwind-merge` for variant-driven styling and class composition.
- A custom theme layer in `src/styles/theme.css` defining color tokens, radius tokens, typography defaults, and the site's soft editorial background treatment.

### Icons, Images, and External Services

- `lucide-react` for UI icons across navigation, actions, and supporting visual cues.
- `next/image` for optimized rendering of remote portfolio assets.
- Supabase-hosted media assets for portraits, resume hosting, and other imagery.
- Iconify-hosted SVG logos for the skills section.
- Web3Forms for contact form submission handling.

## Content and Experience Design

The site is designed less like a resume dump and more like a guided portfolio review.

- The homepage introduces identity, availability, academic background, focus areas, social links, testimonials, and trusted contacts in one continuous scroll.
- The projects page emphasizes selection over volume by presenting a smaller set of representative applications, then adds client-side filtering to help visitors quickly focus on categories such as data, tools, design, and business.
- The skills page balances breadth and credibility by combining technology groups with certifications and practical experience entries.
- The contact page moves beyond a static email link by providing field-level validation, inline error messaging, submission feedback, and a direct external form integration.

This combination gives the portfolio both presentation value and enough interaction to feel like a real frontend product rather than a static assignment.

## Architectural Notes

- The application uses a shared top-level layout component for navigation, footer content, and consistent route framing.
- Mobile navigation behavior is handled on the client with explicit state management and transition-aware route changes.
- The projects view uses local state to filter visible cards without introducing unnecessary backend complexity.
- The contact form applies client-side validation rules for name, email, subject, and message before sending data to Web3Forms.
- Remote image domains are explicitly configured in Next.js to support Supabase assets and Iconify logos.
- The Next.js React Compiler option is enabled in the project configuration.