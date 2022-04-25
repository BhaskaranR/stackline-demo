
<h5 align='center'>
<b>Lightweight version of Demo</b>
</h5>
</p>

## Features

- ⚡️ [React](https://github.com/facebook/react/), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 🎨 [React-Query](https://react-query.tanstack.com/) -Performant and powerful data synchronization for React.

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Vercel

<br>

## Pre-packed

### Plugins

- [React Router](https://reactrouter.com/)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit BhaskaranR/stack-line stack-line-app
cd stack-line-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
## TODO

- Implement sorting for the table (has some issues with esbuild)

- Write test cases with Vitest

- Lazy import mocks

- Implete e2e with cypress

## Usage

### Development


```bash
pnpm dev # SSR development
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated files in `dist`, and some of these files will be moved to `serverless` for deployment.

### Deploy on Vercel

Go to [Vercel](https://vercel.com) and install its CLI. Then:

```bash
pnpm preview # Simulate Vercel environment locally
pnpm deploy
pnpm deploy:prod
```