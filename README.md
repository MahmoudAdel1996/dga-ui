# **DGA UI – Government-Style Bootstrap Theme**

**DGA UI** is a customizable UI theme inspired by modern government and authority design systems.
Built on top of **Bootstrap**, it provides consistent colors, typography, spacing, and reusable UI patterns suitable for official portals, administrative dashboards, and public-sector applications.

This package helps you apply a clean, structured, and authoritative look across your web interfaces with minimal setup.

---

## **✨ Features**

* Government-inspired design system
* Full compatibility with Bootstrap
* Custom color palette and typography
* Standardized spacing & component overrides
* Utility classes for layout and theming
* Light / dark mode friendly (optional)
* Easy to integrate into any frontend project

---

## **📦 Installation**

Install via npm:

```bash
npm install dga-ui
```

Or with yarn:

```bash
yarn add dga-ui
```

---

## **🔧 Usage**

### **Using the Compiled CSS**

Include the compiled CSS file in your HTML:

```html
<link rel="stylesheet" href="node_modules/dga-ui/css/dga-ui.css">
```

Or import it in your JavaScript/CSS:

```css
@import "dga-ui/css/dga-ui.css";
```

### **Using SCSS Source Files**

Import the theme in your SCSS file:

```scss
@import "dga-ui/theme/dga-ui";
```

All Bootstrap components automatically adopt the DGA UI theme.

---

## **📁 File Structure**

```
dga-ui/
│
├─ css/                 # Compiled CSS output
│  └─ dga-ui.css
├─ fonts/               # Font files (IBM Plex Sans Arabic)
├─ theme/               # Source SCSS theme files
│  ├─ dga-ui.scss       # Main theme entry point
│  ├─ _fonts.scss
│  ├─ _functions.scss
│  ├─ _variables.scss
│  ├─ config/           # Base configuration
│  ├─ components/       # Component styles
│  └─ customizations/   # Theme customizations
├─ package.json
├─ LICENSE
└─ README.md
```

---

## **🛠 Development**

### **Building the CSS**

Compile the SCSS to CSS:

```bash
npm run build-css
```

### **Watch Mode**

Watch for changes and auto-compile:

```bash
npm run watch-css
```

### **Customization**

You can override SCSS variables before importing the theme:

```scss
// Your custom variables
$primary: #0d47a1;
$secondary: #ffc107;

// Import the DGA UI theme
@import "dga-ui/theme/dga-ui";
```

---

## **🎨 Theme Structure**

The theme is organized into three main sections:

- **config/** - Base configuration (colors, typography, spacing, etc.)
- **components/** - Bootstrap component overrides
- **customizations/** - Additional styling and utilities

---

## **📚 Roadmap**

* React / Angular UI components
* Icon set
* Forms enhancement
* Grid templates
* Additional themes (municipal, ministry, authority variants)

---

## **🤝 Contributing**

Contributions are welcome!
Feel free to open issues, submit pull requests, or suggest improvements.

---

## **📄 License**

MIT License — free for personal and commercial use.

---

## **👤 Author**

Created and maintained by **Mahmoud**.

---

If you want, I can also generate:

✅ A logo
✅ A color palette for the authority theme
✅ Example screenshots/mockups
✅ NPM keywords
Just tell me!
