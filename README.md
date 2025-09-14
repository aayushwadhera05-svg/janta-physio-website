# Janta Acupressure & Physiotherapy Centre — Website

A simple, fast React (Vite) + Tailwind site ready to deploy.

## 🚀 Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## 🧱 Build
```bash
npm run build
npm run preview
```

## 🌐 Deploy (two easy options)

### Option A — Vercel (recommended)
1. Create a free account at https://vercel.com
2. Click **New Project** → **Import** this folder from GitHub *or* use **Deploy** → **Vite** and drag-drop the project ZIP.
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. After deploy, add your custom domain in **Settings → Domains**.

### Option B — Netlify
1. Create a free account at https://www.netlify.com
2. Click **Add new site → Deploy manually**, then drag-drop the `dist` folder (first run `npm run build` locally), **or** connect your GitHub repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add your custom domain in **Site configuration → Domain management**.

## ✍️ Editing content
- Main page: `src/App.jsx`
- Styles: `src/index.css` (Tailwind utilities)
- Replace placeholder images in `Gallery` and `Doctors` with your real images (put them in `public/` and reference as `/filename.jpg`).

## 📇 Contact/WhatsApp numbers
- All WhatsApp buttons use: `+91 99883 43440`
- The footer Call Now button dials `+91 99883 43440`
- Update numbers in `src/App.jsx` if needed.

## 🔐 SEO tips
- Edit the `<title>` in `index.html`
- Add a `public/robots.txt` and `public/sitemap.xml` later if you want.
