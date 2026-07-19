# RGPV Login Interface

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
