# **DGA UI – Government-Style Bootstrap Theme**

[![npm version](https://img.shields.io/npm/v/sdga-ui.svg)](https://www.npmjs.com/package/sdga-ui)
[![npm total downloads](https://img.shields.io/npm/dt/sdga-ui.svg)](https://www.npmjs.com/package/sdga-ui)
[![GitHub stars](https://img.shields.io/github/stars/MahmoudAdel1996/dga-ui.svg)](https://github.com/MahmoudAdel1996/dga-ui/stargazers)
[![License](https://img.shields.io/npm/l/sdga-ui.svg)](https://github.com/MahmoudAdel1996/dga-ui/blob/main/LICENSE)

**DGA UI** is a customizable UI theme inspired by modern government and authority design systems.
Built on top of **Bootstrap**, it provides consistent colors, typography, spacing, and reusable UI patterns suitable for official portals, administrative dashboards, and public-sector applications.

This package helps you apply a clean, structured, and authoritative look across your web interfaces with minimal setup.

---

## **🌐 Live Demo**

Check out the live demo and explore all components:

**[https://mahmoudadel1996.github.io/dga-ui/](https://mahmoudadel1996.github.io/dga-ui/)**

---

## **✨ Features**

* Government-inspired design system
* Full compatibility with Bootstrap
* **Built-in RTL support** (no need to import Bootstrap RTL separately)
* Custom color palette and typography
* Standardized spacing & component overrides
* Utility classes for layout and theming
* Light / dark mode friendly (optional)
* IBM Plex Sans Arabic font included
* Easy to integrate into any frontend project

---

## **📦 Installation**

Install via npm:

```bash
npm install sdga-ui
```

Or with yarn:

```bash
yarn add sdga-ui
```

### **Or via CDN**

No installation needed — link directly to the compiled CSS:

```html
<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css">

<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/sdga-ui@latest/css/dga-ui.css">
```

Pin to a specific version (recommended for production) instead of `@latest`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@1.0.31/css/dga-ui.css">
```

---

## **🔧 Usage**

### **Using the Compiled CSS**

Include the compiled CSS file in your HTML:

```html
<link rel="stylesheet" href="node_modules/sdga-ui/css/dga-ui.css">
```

Or import it in your JavaScript/CSS:

```css
@import "sdga-ui/css/dga-ui.css";
```

### **Using SCSS Source Files**

Import the theme in your SCSS file:

```scss
@import "sdga-ui/theme/dga-ui";
```

All Bootstrap components automatically adopt the DGA UI theme.

### **RTL Support**

DGA UI has built-in RTL (Right-to-Left) support for Arabic and other RTL languages. Simply add the `dir="rtl"` attribute to your HTML tag:

```html
<html dir="rtl" lang="ar">
```

No need to import Bootstrap's RTL CSS separately – it's already integrated!

---

## **📁 File Structure**

```tree
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

* **config/** - Base configuration (colors, typography, spacing, etc.)
* **components/** - Bootstrap component overrides
* **customizations/** - Additional styling and utilities

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
