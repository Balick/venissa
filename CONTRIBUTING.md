# Contributing to Venissa

## Set up a working copy

Fork the repository on GitHub, clone your fork and create a branch from the latest `main`. Use Node.js 24, the version specified in `.nvmrc`. From the repository root, install dependencies and start Astro.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. For content changes, the [README content map](README.md#make-it-yours) lists the files for projects, journal entries and profile details. For interface changes, React components live in `src/components/` and shared styles live in `src/styles/`.

## Check your change

Run the same checks as the pull request workflow.

```sh
npm run format:check
npm run check
npm run build
```

If formatting fails, run `npm run format` and review the diff. After a successful build, use `npm run preview` to inspect the generated site. For a new Markdown entry, open it from the home page and verify its title, image and links. For an interface change, try the affected interaction on mobile and desktop, with the keyboard and with reduced motion enabled.

## Submit a pull request

Use English for filenames, source text, documentation and commit messages. Give each commit a Conventional Commit prefix and a short description of the change.

- `feat: add project category filters`
- `fix: keep badge text inside the rim`
- `docs: explain how to add a journal entry`

Push your branch to your fork and open a pull request against `main`. Describe what changed, why and how you checked it. A before-and-after screenshot helps reviewers assess a visual change. If you contribute images, icons or fonts, include their source and reuse terms alongside the [asset notices](ASSETS.md).

## Report a bug

Include the affected page, the steps to reproduce the issue, what you expected and what happened. For a layout or interaction issue, include the browser and viewport dimensions so someone else can reproduce it.
