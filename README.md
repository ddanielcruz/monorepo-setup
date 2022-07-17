# Monorepo Setup

Setup of a Node.js monorepo project using npm, with TypeScript, Jest and ESLint/Prettier configured.

## Resources

- [Setting up a TypeScript multi-package mono-repo for @scoped/packages.](https://blog.frankdejonge.nl/setting-up-a-typescript-mono-repo-for-scoped-packages/)
- [Getting Started with npm Workspaces](https://ruanmartinelli.com/posts/npm-7-workspaces-1)

## Commands

| Command                                                | Description                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| `npm init --scope=@<scope> -y -w ./packages/<package>` | Initialize a package in the monorepo scope                         |
| `npm run <script> -ws --if-present`                    | Run a script on all packages, ignoring packages without the script |
| `npm run <script> -w @<scope>/<package>`               | Run a script on a specific package                                 |
| `npm install <dependency> -w @<scope>/<package>`       | Installs a dependency on a local package                           |
