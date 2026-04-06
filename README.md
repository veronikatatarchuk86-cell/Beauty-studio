# # 💄 Beauty Studio — Website

A multi-page beauty salon website featuring tutorials, an online shop, booking forms, and contact information.

---

## 📁 Project Structure

```
beauty-studio/
│
├── index.html          # Home page
├── tutorial.html       # Tutorials page (video lessons)
├── shop.html           # Online shop page
├── contact.html        # Contacts page
│
├── style.css           # Global styles for all pages
├── script.js           # JavaScript (modal window & tab switcher)
│
└── image/
    ├── Beauty Logo.png             # Site logo
    ├── modnie-strizki-i-pricheski-078.jpg  # Haircuts service image
    └── favicon_io/
        ├── apple-touch-icon.png
        ├── favicon-32x32.png
        ├── favicon-16x16.png
        └── site.webmanifest
```

---

## 📄 Pages

### 🏠 `index.html` — Home Page

The main landing page of the site. Includes:

- **Header** with navigation menu and a **"Book Now"** button that opens a booking modal.
- **Hero section** with the studio name and an inspirational quote (Charlotte Tilbury).
- **Featured videos** — 3 embedded YouTube tutorials.
- **History of Makeup** — a short informational section.
- **Mini Shop** — a preview of products available for purchase.
- **Tabbed video section** — 3 tabs, each switching to a different tutorial video (controlled by `script.js`).
- **Services section** — 4 service cards: Make up, Haircuts, Nails, Brows and Lashes.
- **Contact section** — email, phone, and social media links.
- **Footer** with navigation.

---

### 🎬 `tutorial.html` — Tutorials Page

A dedicated page with a grid of **12 embedded YouTube tutorial videos**.

- **Header** with navigation and a **"Sign up for a lesson"** button that opens a lesson booking modal.
- **Modal booking form** fields:
  - First name, Last name
  - Phone number, Email
  - Lesson type (Online/Offline: Makeup, Haircuts, Nails, Brow and Lashes)
  - Date and time picker
  - Message textarea
- **Footer** with navigation.

---

### 🛍️ `shop.html` — Shop Page

An online store with **makeup products**.

- **Header** with navigation and a **"Buy"** button (opens a purchase modal).
- **Modal order form** fields:
  - First name, Last name
  - Phone number, Email
  - Delivery address
  - Payment method (card / cash on delivery)
  - Quantity of goods
  - Product selection dropdown
- **Product grid** — items include:
  - Primer ($11), Foundation ($21), Concealer ($16), Contour ($13)
  - Blush ($14), Powder ($12), Setting Spray ($12), Bronzer ($16)
  - Powder Blush ($10), Mascara ($11), Highlighter ($24)
  - Eye pencil ($2.99), Eyebrow pencil ($28), Eyebrow gel ($16)
  - Lipstick ($25), Lip gloss ($14), Lip pencil ($2)
- **Footer** with navigation.

---

### 📞 `contact.html` — Contacts Page

- **Studio email:** makeup_studio@gmail.com
- **Phone:** +1-972-363-3825
- **Social media links:** TikTok, Instagram, Telegram, YouTube
- **Embedded Google Maps** iframe showing studio location (Tangerine Salon, TX).
- **Footer** with navigation.

---

## ⚙️ JavaScript — `script.js`

The script handles two interactive features:

### 1. Modal Window
Opens/closes a booking or purchase modal dialog.

- Uses `data-modal-open` attribute on the trigger button.
- Uses `data-modal-close` attribute on the close button.
- Uses `data-modal` attribute on the backdrop element.
- Toggles `.is-hidden` class on the modal and `.no-scroll` on `<body>`.

```html
<!-- Trigger button -->
<button data-modal-open>Book Now</button>

<!-- Modal structure -->
<div class="backdrop is-hidden" data-modal>
  <div class="modal">
    <button data-modal-close>x</button>
    <!-- form content -->
  </div>
</div>
```

### 2. Tab/Pane Switcher
Used on the home page to switch between video tabs.

- The `.controls` element listens for clicks on child buttons.
- Each button must have a `data-id` attribute matching the `id` of the target `.pane` element.
- Removes `.is-active` from the currently active pane and adds it to the selected one.

```html
<!-- Controls -->
<div class="controls">
  <button data-id="pane-1">Tab 1</button>
  <button data-id="pane-2">Tab 2</button>
</div>

<!-- Panes -->
<div id="pane-1" class="pane is-active">...</div>
<div id="pane-2" class="pane">...</div>
```

---

## 🎨 Styles — `style.css`

A single shared stylesheet for all pages. Key CSS classes include:

| Class | Description |
|---|---|
| `.color-change-2x` | Animated background color transition on `<body>` |
| `.text-focus-in` | Text fade-in animation |
| `.scale-in-center` | Scale-in entrance animation for menu items |
| `.heartbeat` | Pulsing heartbeat animation for social icons |
| `.shake-bottom` | Subtle shake animation for homepage videos |
| `.text-shadow-pop-left` | Text shadow animation for section titles |
| `.is-hidden` | Hides the modal backdrop |
| `.no-scroll` | Disables page scroll when modal is open |
| `.pane` | Hidden tab content panel |
| `.pane.is-active` | Visible tab content panel |
| `.header` | Shared styles for header and footer |
| `.menu` / `.menu-link` | Navigation styles |
| `.product-item` | Individual product card in the shop |
| `.tutorial-item` | Individual video card on the tutorials page |
| `.services_item` | Service card on the home page |
| `.modal` | Modal dialog box |
| `.backdrop` | Full-screen modal overlay |
| `.btn-open` | Button that opens the modal |
| `.submit_button` | Form submit button |
| `.iframe-map` | Google Maps embed on the contacts page |

---

## 🚀 Getting Started

No build tools or dependencies are required. The site runs as plain HTML/CSS/JS.

1. **Clone or download** the project files.
2. Make sure the `image/` folder is in the same directory as the HTML files.
3. Open `index.html` in any modern browser.

```bash
# Or serve locally with any simple HTTP server, for example:
npx serve .
# or
python -m http.server
```

> ⚠️ Some features (like the embedded Google Map) require an internet connection.

---

## 📬 Contact

- **Email:** makeup_studio@gmail.com
- **Phone:** +1-972-363-3825
- **Instagram:** [instagram.com](https://www.instagram.com/)
- **TikTok:** [tiktok.com](https://www.tiktok.com/explore)
- **Telegram:** [web.telegram.org](https://web.telegram.org/a/)
- **YouTube:** [youtube.com](https://www.youtube.com/)
