# RGPV Login Interface

<!-- project-guide:start -->
## Project guide

[Project architecture](PROJECT_ARCHITECTURE.md) · [Interview questions and answers](INTERVIEW_QA.md)

Use the architecture document for the component diagram, implementation boundaries, and verification entry points. The interview guide includes source-backed answers and project walkthroughs.

### Implementation map

| Component | Responsibility |
| --- | --- |
| [`package.json`](package.json) | Implementation or supporting configuration |
| [`postcss.config.js`](postcss.config.js) | Implementation or supporting configuration |
| [`tailwind.config.js`](tailwind.config.js) | Implementation or supporting configuration |
| [`src/App.js`](src/App.js) | Implementation or supporting configuration |
| [`src/index.js`](src/index.js) | Implementation or supporting configuration |
| [`src/reportWebVitals.js`](src/reportWebVitals.js) | Implementation or supporting configuration |
| [`src/setupTests.js`](src/setupTests.js) | Implementation or supporting configuration |
| [`src/components/RGPVLogin.jsx`](src/components/RGPVLogin.jsx) | Implementation or supporting configuration |
| [`src/App.test.js`](src/App.test.js) | Executable checks and regression examples |
| [`README.md`](README.md) | Project explanations or operating notes |

### Local setup and verification

From the repository root (the commands follow the checked-in manifests):

```bash
npm install
npm test
npm run start
```

<!-- project-guide:end -->

<!-- repository-summary -->
A React and Tailwind CSS recreation of the RGPV student portal login interface.
<!-- /repository-summary -->

A React recreation of the Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) student portal login screen — the university login page with an instructions panel, credentials form, and a captcha widget.

## Tech Stack

- **React 18** (bootstrapped with Create React App / `react-scripts`)
- **Tailwind CSS** for styling (with PostCSS + Autoprefixer)
- **lucide-react** for icons
- **@testing-library** for component tests

## Folder Structure

```
front-end/
├── public/                  # Static HTML shell and assets
├── src/
│   ├── components/
│   │   └── RGPVLogin.jsx    # Main login screen (form, instructions panel, captcha)
│   ├── styles/
│   │   └── index.css        # Tailwind entry / global styles
│   ├── App.js                # Renders RGPVLogin
│   ├── App.css
│   ├── index.js               # App entry point
│   └── reportWebVitals.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js and npm

### Install
```bash
npm install
```

### Run in development
```bash
npm start
```
Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Run tests
```bash
npm test
```

### Build for production
```bash
npm run build
```
Outputs an optimized, minified build to the `build/` folder.

## Notes

This is a front-end-only UI clone for practice/demo purposes — the "Sign In" and "Forgot Password" actions currently log to the console and show a placeholder alert rather than calling a real backend.

## Documentation checks

Project architecture, interview guides, and local source links are checked automatically on pushes and pull requests. Run the same check locally:

```bash
python3 .github/scripts/validate_project_docs.py
```
