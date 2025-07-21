# Next.js GitHub Pages Test

A sample [Next.js](https://nextjs.org) project configured for deployment to GitHub Pages, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Base Path for Images](#base-path-for-images)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Project Structure

```
/ (root)
├── docker-compose.yml
├── Dockerfile
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
├── public/
│   ├── scigateway-white-text-blue-mark-logo.svg
│   └── UKRI_STFC_SCIENTIFIC_COMPUTING_RGB.png
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx
        └── theme.tsx
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (for containerized development)
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/) (if not using Docker)

## Getting Started

### Using Docker

```bash
docker compose up
```

### Using Yarn

```bash
yarn install
yarn dev
```

Open [http://localhost:3000/operationsgateway-project](http://localhost:3000/operationsgateway-project) in your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Base Path for Images

To ensure images appear correctly on GitHub Pages, update the `src` prop of your `Image` components in `src/app/page.tsx` to include the base path `/operationsgateway-project/` (the slug of this repository):

```tsx
<Image
  src="/operationsgateway-project/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/>
```

Learn more in the [Next.js basePath and images documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images).

## Deployment

To deploy to GitHub Pages, follow the [Next.js GitHub Pages guide](https://github.com/gregrickaby/nextjs-github-pages) and ensure your `next.config.ts` is configured with the correct `basePath` and `assetPrefix`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js)
