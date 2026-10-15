# RiceCall Static JSON

[繁體中文](../README.md)

## Overview

This repository stores RiceCall translations and other public JSON data. Its build output is served as static files. It has no persistent HTTP process, database, or application API. Show uses `locales/<lang>/show.json`.

Show supports `zh-TW`, `zh-CN`, `en-US`, `ru-RU`, `pt-BR`, `es-ES`, `fa-IR`, and `tr-TR`. Other locale data can still serve the App or Website.

## Architecture

Publishable source data is in `docs/`. `scripts/build.cjs` copies it into `dist/` and writes a manifest with file paths, SHA-256 hashes, version, and timestamp. Downstream projects fetch JSON from a public `dist/locales/` URL.

## Modules and subsystems

| Kind | Location | Responsibility |
| --- | --- | --- |
| Locales | `docs/locales/` | App, Website, Show, and message translations. |
| Other data | `docs/country.json`, `docs/staff.json` | Public country and staff data. |
| Build | `scripts/build.cjs` | Copy data and create a hash manifest. |
| Publishing | `scripts/sort-json.cjs`, `.github/workflows/`, `crowdin.yml` | Key ordering, translation platform, and deployment integration. |

## Complete build and run steps

1. Install Node.js and Yarn 1.22.22. No `.env` file or database is needed.
2. Install dependencies and build:

   ```bash
   yarn install --frozen-lockfile
   yarn build
   ```

3. Inspect `dist/manifest.json` and `dist/locales/`, then publish the entire `dist/` directory to a static host. Consumers fetch paths such as `locales/zh-TW/show.json` from its public base URL. Run `yarn sort` only when intentionally reordering source JSON keys; `yarn format` rewrites source files.

## Further documentation

Locale keys are a cross-project data contract. Program keys use `server` for a RiceCall voice group; user-facing translations keep the natural word group for each locale. Legacy `*-groups` and new `*-servers` keys coexist for compatibility.
