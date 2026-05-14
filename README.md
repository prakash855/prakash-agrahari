# Prakash Agrahari Portfolio

A premium developer portfolio built with Next.js for showcasing senior frontend and MERN stack engineering work, product thinking, and recruiter-ready presentation.

Live site: [https://prakashdev.netlify.app/](https://prakashdev.netlify.app/)

## Overview

This project is a modern personal portfolio for **Prakash Agrahari**, designed to highlight:

- 5+ years of frontend and MERN stack experience
- React, Next.js, TypeScript, and scalable UI architecture
- featured projects and engineering case studies
- international job readiness, including Dubai-based opportunities
- polished visual design with responsive, accessible interactions

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- ShadCN UI primitives
- Lucide Icons
- next-themes

## Features

- premium dark/light theme
- animated hero section
- scroll progress indicator
- command menu
- animated stats
- project filtering
- recruiter-focused content structure
- SEO metadata, `robots.txt`, and `sitemap.xml`
- responsive layout with reusable section components

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  sections/
  ui/
  command-menu.tsx
  cursor-glow.tsx
  motion-provider.tsx
  site-header.tsx
  stats-strip.tsx
  theme-toggle.tsx

lib/
  content.ts
  utils.ts

public/
  resume-prakash-agrahari.pdf
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Create a production build

```bash
npm run build
```

### 4. Start the production server

```bash
npm run start
```

## Important Content Files

Most portfolio content can be updated from one place:

- [lib/content.ts](./lib/content.ts)

This file contains:

- name, email, GitHub, LinkedIn, and resume link
- skills
- experience timeline
- project data
- achievements
- learning goals

## Styling and UI Notes

- global theme tokens and reusable accent colors live in [app/globals.css](./app/globals.css)
- shared buttons, badges, and cards live in [components/ui](./components/ui)
- page sections are split into reusable components under [components/sections](./components/sections)

## Deployment

This portfolio can be deployed on Netlify as a Next.js site.

If you want to replace an existing Netlify portfolio on the same URL:

1. connect this repo to the existing Netlify site, or
2. deploy this project to the same existing Netlify site from the dashboard or CLI

## Customization Checklist

Before pushing or deploying, update:

- real resume PDF in `public/resume-prakash-agrahari.pdf`
- personal contact details in `lib/content.ts`
- project links and descriptions
- domain and metadata in `app/layout.tsx`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Author

**Prakash Agrahari**

- GitHub: [https://github.com/prakash855](https://github.com/prakash855)
- LinkedIn: [https://www.linkedin.com/in/prakash-agrahari-a5655312b](https://www.linkedin.com/in/prakash-agrahari-a5655312b)

