# Turborig — Premium Computer Parts

A modern, **no-payment** product catalog for selling computer parts. Visitors browse products, filter by category, open detailed modals, and **enquire by email**. Enquiries are sent to your inbox (via Formspree or mailto). You handle availability and pricing by replying to the email.

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS** (dark theme, neon accents, glassmorphism)
- **Framer Motion** (animations, modals, scroll effects)
- **React Router** (Home, Catalog with category query)
- Static demo data (no backend)

## Run locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Hosting (deploy for free)

The site is static: run `npm run build` and deploy the **`dist`** folder. These configs are already in the repo.

### Option 1: Vercel (recommended)

1. Push your project to **GitHub** (create a repo and push).
2. Go to [vercel.com](https://vercel.com) → **Sign up** (e.g. with GitHub).
3. **Add New Project** → **Import** your GitHub repo.
4. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`. Click **Deploy**.
5. You get a URL like `turborig.vercel.app`. Optional: add your own domain in Project Settings.

### Option 2: Netlify

1. Push your project to **GitHub**.
2. Go to [netlify.com](https://netlify.com) → **Sign up** → **Add new site** → **Import an existing project** (GitHub).
3. Select the repo. Netlify will use the built-in **`netlify.toml`** (build: `npm run build`, publish: `dist`). Click **Deploy**.
4. You get a URL like `random-name.netlify.app`. You can change the name or add a custom domain.

### Option 3: Other hosts

- **Cloudflare Pages**: Connect your Git repo, build command `npm run build`, output `dist`. Add a **Redirect rule**: URL `*` → `/index.html` with status 200 (so `/catalog` etc. work).
- **GitHub Pages**: Build with `npm run build`, push the contents of `dist` to a `gh-pages` branch (or use the `gh-pages` npm package). Set **base** in `vite.config.js` to your repo name if needed, e.g. `base: '/Turborig/'`.

Before deploying, set your **email** (and optionally Formspree) in `src/config.js`.

## Email enquiry (automated)

- **Recipient:** Set `RECIPIENT_EMAIL` in `src/config.js` (e.g. `venkygannu1234@gmail.com`). This is where enquiries go (and is used for the mailto fallback).
- **Automated delivery (optional):** To receive enquiries directly in your inbox without opening a mail client:
  1. Go to [formspree.io](https://formspree.io) and sign up.
  2. Create a new form and set the notification email to your address (e.g. `venkygannu1234@gmail.com`).
  3. Copy the form ID from the form URL (e.g. from `https://formspree.io/f/abc123xy` copy `abc123xy`).
  4. In `src/config.js`, set `FORMSPREE_FORM_ID = 'abc123xy'`.
  If `FORMSPREE_FORM_ID` is left empty, the site still works: “Send enquiry” will open the user’s email client with a pre-filled message to you (mailto).

## Project structure

```
src/
  config.js           # Email + Formspree form ID
  data/products.js    # CATEGORIES + PRODUCTS (edit to add/change products)
  components/
    Navbar.jsx        # Sticky glass navbar, categories dropdown
    Footer.jsx        # Links + email contact
    Hero.jsx          # Hero + CTA
    FeaturedProducts.jsx
    ProductCard.jsx   # Card + opens modal on click
    ProductGrid.jsx
    ProductModal.jsx  # Detail view, specs, gallery, Enquire
    CategoryTabs.jsx  # Filter tabs
  pages/
    Home.jsx
    Catalog.jsx       # Category filter + grid
  App.jsx
  main.jsx
  index.css
```

## Features

- **Homepage**: Hero with gradient background, “Browse Products” CTA, featured product grid
- **Catalog**: Category tabs (GPUs, CPUs, Motherboards, Storage, Accessories), URL `?category=gpu` support
- **Product cards**: Image, name, short description, price (display only), Details + Enquire buttons
- **Product modal**: Click card or “Details” → modal with image gallery, full specs, “Enquire via email” button
- **Enquire**: Enquiry modal (name, email, message) → Formspree to your inbox, or mailto if not set
- **Navbar**: Sticky, glass style, logo, Home/Catalog, Categories dropdown, Contact (email)
- **Footer**: Brand, quick links, email contact
- **Design**: Dark theme, neon cyan/green accents, glassmorphism, Framer Motion animations, mobile-first

## Adding or editing products

Edit **`src/data/products.js`**:

- **PRODUCTS**: Add/change objects with `id`, `name`, `category`, `price`, `featured`, `image`, `gallery[]`, `specs[]`, `description`.
- **CATEGORIES**: Matches `category` id (e.g. `gpu`, `cpu`, `motherboard`, `storage`, `accessories`).

Use any image URLs (e.g. Unsplash) or place images in `public/` and reference as `/image.jpg`.
# TurboRig
