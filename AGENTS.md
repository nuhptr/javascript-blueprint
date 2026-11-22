# Project Rules

## Keep `readme.md` Updated

After adding, editing, renaming, or deleting files in this repository, always review and update `readme.md` so documentation stays in sync with the actual project contents.

Specifically check and update:

1. **Learning progress tables** (`### Beginner topics`, `### Intermediate topics`, and `### Advanced topics`): Add, update, or remove entries whenever topic files change. Only list topics that have actual content (do not list empty placeholder files).
2. **Directory structure** (`## Directory structure`): Keep the folder tree accurate and sorted alphabetically to match the available topics.
3. **Links, paths, and descriptions**: Ensure all relative links, example commands, and topic summaries in `readme.md` remain valid and reflect the latest changes.

## Documentation & Code Quality Standards

When creating or editing JavaScript learning materials in this repository:

1. **Document with JSDoc (`/** ... */`)**:
   - Start each file with a `/** ... */` overview explaining the concept and its common use cases.
   - Explain each section or example with concise `/** ... */` comments in Indonesian.
   - Document functions with proper `@param` and `@returns` JSDoc tags.
   - Include expected output comments next to `console.log()` calls where helpful.
2. **Write clean and proper JavaScript**:
   - Use `const` by default and `let` only when reassignment is required; never declare implicit globals or redeclare variables in the same scope.
   - Prefer realistic, descriptive names and safe, idiomatic patterns (e.g., provide initial values in `reduce()`, avoid unintended mutations, use strict equality `===`).
   - Follow the repository formatting style: 4-space indentation, double quotes, trailing commas on multiline objects/arrays, and no semicolons.
   - Ensure every file runs cleanly with Node.js and Bun without runtime errors.
3. **Consistent folder naming and entry point**:
   - Use lowercase kebab-case names for all topic folders and files (e.g., `this-keyword/`, `async-programming/`, `array-destructuring.js`).
   - Every topic folder must use `index.js` as its main entry file.
   - When a topic is split into multiple files for distinct sub-concepts, keep each sub-file independently runnable and load them from `index.js`.

## Git & Pull Request Workflow

1. **Push only when requested**: Only run `git push` when the user explicitly asks to push directly. Otherwise, leave changes or commits local so the user can review them first.
2. **Pull Requests (`dev` -> `main`)**: When asked to open a Pull Request to `main`, create it from `dev` via the GitHub website, then wait for user review and explicit confirmation before merging.
3. **Keep `dev` branch**: Never delete the `dev` branch after merging a Pull Request into `main`.
