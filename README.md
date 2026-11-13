# Portfolio

Personal portfolio of Rahul Jadhav, built to show projects and case studies.

Live demo: https://portfolio-tan-eight-32.vercel.app/

## Architecture

Static single-page app. Content lives in typed data files under `src/data/`.
Vite builds it to static files, and Vercel serves them.

## Tech stack

- React 19, TypeScript, Vite 8
- Plain CSS
- Vercel (hosting), GitHub Actions (CI, added later)

## Features

- Content driven by data files (in progress)

## Run locally

1. Prerequisites: Node 22.22 or newer
2. Clone the repo and run `npm install`
3. Start with `npm run dev`
4. Lint with `npm run lint`

## Screenshots

To be added.

## Key decisions

- Vite over Create React App: CRA is deprecated, Vite is the current standard.
- Data files over hard-coded JSX: adding a project means adding one object.

## What I would do next

- Routing and page layout
- Projects page and case studies