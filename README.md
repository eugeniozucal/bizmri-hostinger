# BIZMRI Website

AI-driven organizational health assessment platform landing page.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

Or drag-and-drop the `dist` folder after running `npm run build`

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install gh-pages --save-dev
```

Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

### Option 4: Traditional Hosting (cPanel, FTP)

1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server's public directory

## Project Structure

```
bizmri-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.jsx
│   │   │   └── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── PrecisionDiagnostics.jsx
│   │   ├── Solution.jsx
│   │   ├── DiagnosticScan.jsx
│   │   ├── Comparison.jsx
│   │   ├── Reporting.jsx
│   │   ├── SocialProof.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Recharts** - Data Visualization
- **Lucide React** - Icons

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  navy: { ... },
  cyan: { ... },
}
```

### Fonts
The site uses Inter (sans-serif) and JetBrains Mono (monospace). Modify in `src/index.css`.

### Content
Update component files in `src/components/` to change text, images, and data.

## License

MIT License - Feel free to use for your projects.
