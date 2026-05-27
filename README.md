# Yossika Putra Erlangga - Personal CV Website

Static portfolio site ready for GitHub Pages.

## Files
- `index.html` — single entry point
- `css/style.css` — styles and responsive layout
- `js/main.js` — scroll animation, dark mode, active nav
- `assets/img/` — photo asset directory

## Setup
1. Add `assets/img/photo.jpg` with your portrait photo.
2. Add `assets/cv.pdf` for the download button.
3. Open `index.html` in the browser to preview.

## Deploy
1. Initialize Git if needed:
   ```bash
   git init
   git add .
   git commit -m "Initial CV website"
   ```
2. Create a GitHub repo and add it as remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Open the repo on GitHub.
   - Go to `Settings` → `Pages`.
   - Set the source to `main` branch and folder `/ (root)`.
   - Save and wait for the site URL.

## Access
- The site will be available at `https://<your-username>.github.io/<your-repo>/`
- The page is fully responsive and mobile-friendly.
