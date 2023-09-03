# File Manager

The project has been bootstrapped with [Vite.](https://vitejs.dev/)

## Scripts

### Development

```json
  "dev": "vite",
```

### Lint

```json
   "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
```

### Unit Tests

```json
   "test": "vitest run",
   "test:watch": "vitest watch",
```

### E2E Tests

```json
   "test:e2e:debug": "playwright test --debug",
   "test:e2e": "playwright test",
```

### Build & Serve

```json
   "build": "tsc && vite build",
   "preview": "vite preview"
```

## Project Structure

```
├── e2e/
├── http/ // http requests using VS Code extension: REST Client
├── public/
├── src
│   ├── App.tsx
│   ├── __tests__
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── types/
│   ├── utils/
│   ├── main.tsx
│   └── config.ts
├── index.html
├── playwright-report/
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
