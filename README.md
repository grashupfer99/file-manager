# File Manager

- Description: Single Page web app for file sharing link management.

---

The project has been bootstrapped with [Vite.](https://vitejs.dev/)

## Prerequisites

- node >=18
- pnpm >=8
  - `npm install -g pnpm`, [pnpm docs](https://pnpm.io/installation)

## Scripts

### Installation

```
   pnpm install
```

### Development

```
  pnpm dev
```

### Lint

```
   pnpm lint
```

### Unit Tests

```
   pnpm test
   pnpm test:watch
```

### E2E Tests

```
   pnpm test:e2e:debug
   pnpm test:e2e
```

### Build & Serve

```
   pnpm build
   pnpm preview
```

## Project Structure

```
├── e2e
├── http # http request playground
├── public
├── src
│   ├── __tests__
│   ├── api
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   └── config.ts
├── index.html
├── .eslintrc.cjs
├── playwright-report
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── playwright.config.ts
├── vite.config.ts
└── README.md
```

### Packages

- UI: `@chakra-ui/react, @emotion/react, @emotion/styled, framer-motion`
- Router: `react-router-dom`
- Unit testing: `vitest`
- E2E testing: `playwright`

### Recommended VS Code Extensions

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
