# front-end — interview questions and answers

[README](README.md) · [Project architecture](PROJECT_ARCHITECTURE.md)

Answers below use this repository’s files and implementation. They distinguish existing behavior from suggested extensions; source links let you verify each walkthrough.

## 1. What problem does front-end address, and what can you demonstrate?

A React and Tailwind CSS recreation of the RGPV student portal login interface.

I would demonstrate the linked implementation or examples and distinguish that evidence from any planned production features. Start with [`README.md`](README.md).

## 2. How is this repository organized?

- [`package.json`](package.json): Implementation or supporting configuration.
- [`postcss.config.js`](postcss.config.js): Implementation or supporting configuration.
- [`tailwind.config.js`](tailwind.config.js): Implementation or supporting configuration.
- [`src/App.js`](src/App.js): Implementation or supporting configuration.
- [`src/index.js`](src/index.js): Implementation or supporting configuration.
- [`src/reportWebVitals.js`](src/reportWebVitals.js): Implementation or supporting configuration.
- [`src/setupTests.js`](src/setupTests.js): Implementation or supporting configuration.
- [`src/components/RGPVLogin.jsx`](src/components/RGPVLogin.jsx): Implementation or supporting configuration.

[PROJECT_ARCHITECTURE.md](PROJECT_ARCHITECTURE.md) contains the component diagram and the implementation walkthrough.

## 3. How does the JavaScript application start or build?

The commands are defined in [`package.json`](package.json):

- `start`: `react-scripts start`.
- `build`: `react-scripts build`.
- `test`: `react-scripts test`.
- `eject`: `react-scripts eject`.

I would run them from that manifest directory and inspect environment configuration before assuming a service is ready.

## 4. What would you verify before extending this repository?

I would identify an executable example or define a concrete acceptance case for the material in [`README.md`](README.md). For code, verify inputs, outputs, and failure handling; for notes or templates, verify that a reader can follow the procedure and distinguish examples from measured results.

## 5. Which files provide verification evidence?

The repository includes [`src/App.test.js`](src/App.test.js). I would explain the scenarios and assertions in these files, then run the matching test command from the appropriate project directory. File presence alone is not a passing test result.

## 6. Which runtime dependencies shape the application?

The dependency manifest [`package.json`](package.json) declares `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`, `lucide-react`, `react`, `react-dom`, `react-scripts`, `web-vitals`. I would trace where each relevant package is imported before assigning it a role in the architecture.

## 7. How would you investigate data ownership and persistence?

Trace the data/configuration files and the code that reads or writes them in the component table. Identify which files are examples, which records are mutable, and which external store is actually configured. I would document those facts before discussing retention, backup, or tenant isolation.

## 8. How would another engineer reproduce your walkthrough?

Start from the repository root:

```bash
npm install
npm test
npm run start
```

These commands follow repository manifests; environment setup and command results still need to be checked on the target machine.

## 9. How would you add CI without confusing it with deployment?

First automate the repository-specific checks above, including documentation link validation. Add deployment only after defining the target environment, required credentials, approval boundary, smoke test, and rollback procedure. No GitHub Actions workflow is asserted by the inspected inventory.

## 10. How would you present this project in a Forward Deployed Engineer interview?

Start with the user and operational problem described in [`README.md`](README.md). Explain one constraint that changes the implementation, show the linked code or example, and walk through a success case and a failure case. Agree on a measurable acceptance criterion before expanding the solution, and leave a handoff with data boundaries and rollback ownership. Any proposed production or business metric should be identified as a target until measured.

## 11. What does `src/App.js` own?

[`src/App.js`](src/App.js) defines `App`. Its imports include `react`, `./components/RGPVLogin`.

Trace these definitions and imports to explain the module boundary. Relative imports identify project code; package imports should be checked against the nearest manifest.

## 12. What does `src/index.js` own?

[`src/index.js`](src/index.js) defines the module setup. Its imports include `react`, `react-dom/client`, `./App`.

Trace these definitions and imports to explain the module boundary. Relative imports identify project code; package imports should be checked against the nearest manifest.
