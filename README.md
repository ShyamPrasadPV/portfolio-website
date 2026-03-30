# Front-End Developer Portfolio

A modern, dark-themed, single-page portfolio website for a Front-End Developer.

## 🗂 Project Structure

```
index.html          — Main single-page portfolio
css/
  style.css         — All styles (variables, layout, animations, responsive)
js/
  main.js           — All interactivity (scroll effects, animations, nav)
```

## ✅ Completed Features

- **Hero Section** — Headline, sub-headline, CTA buttons, animated stats counter, availability badge, scroll indicator
- **Experience Section** — Pixbit Solutions role card with timeline indicator and achievements
- **Featured Projects** — 4 detailed project cards with challenge, contributions, tech stack tags, and 3D hover tilt
- **Skills / Tech Stack** — 6 grouped skill categories with highlighted core technologies
- **About Me** — Bio text, animated stacked info cards, hobbies (Movies + Football)
- **Contact / CTA Section** — Open invitation with social link placeholders (email, LinkedIn, GitHub)
- **Footer** — Logo, nav links, copyright
- **Responsive Design** — Mobile-first, hamburger menu, fluid typography
- **Scroll Animations** — IntersectionObserver-based reveal on scroll
- **Animated Stat Counters** — Numbers count up when scrolled into view
- **Cursor Glow** — Soft radial glow that follows the cursor (desktop only)
- **Navbar** — Transparent → frosted glass on scroll, active link highlighting
- **Back-to-Top Button** — Appears after scrolling 500px

## 🔗 Entry Points

| Page     | Path         |
|----------|--------------|
| Portfolio | `index.html` |

## ⚠️ Pending / Personalisation Required

- Replace `href="mailto:"` with actual email address
- Replace LinkedIn URL placeholder with real profile link
- Replace GitHub URL placeholder with real profile link
- Optionally add a profile photo to the About or Hero section
- Add real project screenshots or mockups if desired

## 🎨 Design System

| Token         | Value              |
|---------------|--------------------|
| Background    | `#080c14`          |
| Surface       | `#0f1623`          |
| Accent Cyan   | `#00d4ff`          |
| Accent Purple | `#7c3aed`          |
| Font Sans     | Inter (Google Fonts) |
| Font Code     | Fira Code (Google Fonts) |

## 🛠 Tech Used

- Plain HTML5 / CSS3 / Vanilla JavaScript (no build step)
- Google Fonts (Inter, Fira Code)
- Font Awesome 6 (icons, via CDN)
- IntersectionObserver API (scroll reveal + counter animations)
- CSS Custom Properties & CSS Grid / Flexbox

## 🚀 Next Steps

- Add a contact form powered by a free service (Formspree, EmailJS)
- Add a downloadable CV/resume button
- Integrate a real project screenshot carousel
- Add a dark/light mode toggle
- Publish via the **Publish tab** to get a live URL
