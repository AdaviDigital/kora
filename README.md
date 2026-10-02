# Kora — Boutique Streetwear Website

A production-ready, fully responsive storefront for **Kora**, built with plain HTML, CSS and JavaScript — no build step, no framework, no dependencies required to run it.

---

## 1. What's inside

```
kora/
├── index.html              Homepage (hero, categories, featured drop, brand story, reviews, newsletter)
├── shop.html                Full catalogue with category filters, search and sorting
├── product.html              Product detail (gallery, colour/size selection, add to cart)
├── cart.html                  Cart with quantity controls, promo code, order summary
├── about.html                 Brand story, timeline, values
├── contact.html                Contact form with client-side validation
├── faq.html                     Sizing, shipping and returns FAQ (with schema.org markup)
├── shipping-returns.html         Shipping rates and return policy
├── privacy-policy.html            Privacy policy
├── terms-of-service.html           Terms of service
├── 404.html                         Custom not-found page
├── css/styles.css                   Full design system (tokens, layout, components)
├── js/
│   ├── products.js                  Product catalogue (data) + helpers
│   ├── cart.js                       Cart logic (localStorage-backed)
│   └── main.js                        Navigation, search, forms, countdown, reveal animations
├── assets/img/                        Logo, favicons, app icons
├── robots.txt, sitemap.xml, site.webmanifest    SEO + PWA metadata
├── vercel.json, render.yaml, .htaccess           Host-specific security headers & caching
└── package.json                                   Optional local dev server only
```

No files were skipped — every page shares the same header, mobile navigation drawer, search panel, and footer, and all internal links resolve to a real page in this folder.

---

## 2. Run it locally

You don't need Node or any build tool — you can open `index.html` directly in a browser. For a proper local server (recommended, avoids relative-path quirks):

```bash
npx serve . -l 3000
```

Then visit `http://localhost:3000`.

---

## 3. Deploy

### Vercel
1. Push this folder to a GitHub repo (or drag-and-drop the folder into the Vercel dashboard).
2. Import the repo in Vercel — **no build command, no output directory** needed (leave both blank or set output directory to `.`).
3. `vercel.json` is already configured with security headers and long-lived caching for `css/`, `js/`, and `assets/`.

### Render
1. Create a new **Static Site** on Render, pointed at this repo.
2. Render will read `render.yaml` automatically — build command is empty, publish path is `.`.
3. Security headers and caching rules are pre-configured.

### Hostinger Business Hosting
1. Zip the contents of this folder (not the folder itself) and upload via **hPanel → File Manager**, or connect via FTP and upload everything into `public_html/`.
2. `.htaccess` is already included and will: force HTTPS, set security headers, enable gzip compression, set browser caching, and route unknown URLs to `404.html`.
3. No PHP, Node, or database is required — this is a static site.

All three hosts can serve this project **without any modification** — the same files work everywhere.

---

## 4. Before you go live — replace these placeholders

| What | Where | Replace with |
|---|---|---|
| Domain | `index.html`, `shop.html`, `about.html`, `contact.html`, `faq.html`, `shipping-returns.html`, `privacy-policy.html`, `terms-of-service.html`, `sitemap.xml`, `robots.txt` | Your real domain (currently `kora-streetwear.example`) |
| Email / phone | `contact.html`, footers | Your real support email and phone number |
| Social links | Every footer, `index.html` structured data | Your real Instagram/TikTok/X URLs |
| Studio address | `contact.html` | Your real address (or remove if you don't want one listed) |
| Product photography | `js/products.js` (`images` arrays) | Your own product photos — currently licensed Unsplash placeholders |
| Prices & stock | `js/products.js` | Your real catalogue |

Use find-and-replace across the project for `kora-streetwear.example` and `korastreetwear.com` to update every reference in one pass.

---

## 5. Connecting a real backend

This build ships as a fully working **front-end** with a realistic data layer so it's easy to wire up:

- **Catalogue** — `KORA_PRODUCTS` in `js/products.js` is a plain array. Replace the array with a `fetch()` call to your commerce API (Shopify Storefront API, Medusa, WooCommerce REST API, or a custom Node/Express + Postgres backend all work well here).
- **Cart** — `KoraCart` in `js/cart.js` currently persists to `localStorage`. For persistent, cross-device carts, swap the `read()`/`write()` methods for calls to your backend's cart/session endpoints.
- **Checkout** — The "Proceed to Checkout" button in `cart.html` is a placeholder. Connect it to a payment provider such as Paystack, Flutterwave, or Stripe — all offer hosted checkout pages that can be redirected to directly from that button's click handler.
- **Contact form** — `contact.html` validates client-side only. Point the form at a backend endpoint (or a form service like Formspree) to actually deliver messages.
- **Newsletter** — Wire the newsletter forms to your ESP (Mailchimp, Klaviyo, Brevo) via their signup API.

---

## 6. Security notes

- Strict security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are pre-configured for all three hosting targets.
- No inline event handlers pull from user input; all rendered content is either static or built from the trusted local product dataset.
- `robots.txt` disallows indexing of the cart page; `cart.html` and `product.html` are marked `noindex`/dynamic as appropriate.
- When you add a real backend, always validate and sanitize input server-side — client-side validation here is a UX convenience only, not a security boundary.

---

## 7. Accessibility & performance

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, and visible focus states throughout.
- All interactive controls are keyboard operable; the mobile menu and search panel trap nothing but restore body scroll correctly.
- `prefers-reduced-motion` is respected — animations and smooth scrolling are disabled for users who request it.
- Images use `loading="lazy"` outside the hero and explicit `width`/`height` to prevent layout shift.
- Fonts are loaded via `preconnect` + `display=swap` to avoid blocking render.

---

Built for **Kora Streetwear** — men's, women's and kids' streetwear, boutique-crafted.
