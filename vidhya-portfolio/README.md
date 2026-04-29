# Vidhya S — Portfolio Website

A modern, dark-themed personal portfolio for a Full Stack Developer.  
Built with **HTML · CSS · Vanilla JavaScript** — zero dependencies, zero build tools.

---

## 📁 Project Structure

```
vidhya-portfolio/
├── index.html          ← Main HTML (all pages/sections)
├── css/
│   └── style.css       ← All styles (variables, layout, components)
├── js/
│   ├── data.js         ← ✏️  Edit YOUR data here (projects, skills, info)
│   ├── projects.js     ← Renders project cards dynamically from data.js
│   └── main.js         ← Navigation, animations, form handling
├── assets/
│   └── Vidhya_S_Resume.pdf   ← ✏️  Drop your resume PDF here
└── README.md
```

---

## 🚀 Getting Started in VS Code

### 1. Open the folder
```bash
# Clone / copy the folder, then:
code vidhya-portfolio
```

### 2. Install Live Server (one-time)
- Open VS Code Extensions (`Ctrl+Shift+X`)
- Search **"Live Server"** by Ritwick Dey → Install

### 3. Run locally
- Right-click `index.html` → **"Open with Live Server"**
- Browser opens at `http://127.0.0.1:5500`

---

## ✏️ How to Customize

### Personal Info & Social Links
Edit **`js/data.js`** → `DATA.personal`:
```js
personal: {
  name:     "Your Name",
  email:    "you@email.com",
  github:   "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume:   "assets/Your_Resume.pdf",
}
```

### Add / Edit Projects
Edit **`js/data.js`** → `DATA.projects` array.  
Each project object:
```js
{
  name:        "Project Title",
  description: "Short description...",
  icon:        "fas fa-code",           // Font Awesome icon class
  iconBg:      "linear-gradient(...)",  // CSS gradient string
  tech:        ["React", "Node.js"],    // Tech stack tags
  github:      "https://github.com/...",
  demo:        "https://yoursite.com",  // Leave "" to hide the button
}
```

### Update Skills
Edit **`js/data.js`** → `DATA.skillCategories` and `DATA.proficiency`.

### Replace Resume
Drop your PDF into `assets/` and update `DATA.personal.resume`.

---

## 🌐 Deployment

### Netlify (recommended — free)
1. Go to [netlify.com](https://netlify.com) → **Add new site → Deploy manually**
2. Drag the entire `vidhya-portfolio/` folder onto the Netlify deploy area
3. Done — live URL in seconds ✅

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
- In repo Settings → Pages → Source: `main` branch / `/ (root)` → Save

---

## 🎨 Design Tokens (easy theming)

All colors and sizes live in `css/style.css` → `:root {}`:

| Variable         | Default          | Description          |
|------------------|------------------|----------------------|
| `--teal`         | `#00d4ff`        | Primary accent color |
| `--purple`       | `#7c3aed`        | Secondary accent     |
| `--bg-deep`      | `#04080f`        | Page background      |
| `--bg-card`      | `#0b1220`        | Card background      |
| `--sidebar-w`    | `260px`          | Sidebar width        |

Change `--teal` and `--purple` to instantly retheme the entire site.

---

## 📦 Tech Stack
- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — routing, IntersectionObserver, form validation
- **Font Awesome 6** — icons (CDN)
- **Google Fonts** — Syne, Outfit, Space Mono (CDN)

No frameworks · No build step · No npm install required.

---

## 📄 License
Free to use and customize for personal portfolios.
