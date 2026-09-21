import type { CSSObject } from '@mui/system'
import type { Theme } from '@mui/material/styles'

export function getBrandingGlobalStyles(theme: Theme): CSSObject {
  return {
    '*': {
      boxSizing: 'border-box',
    },
    ':root': {
      '--font-portfolio': theme.typography.fontFamily,
      '--font-heading': theme.typography.h1.fontFamily,
      '--font-mono': '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      '--theme-lime': theme.palette.accent.lime,
      '--theme-black': theme.palette.secondary.main,
      '--theme-white': theme.palette.primary.main,
      '--theme-blue': theme.palette.accent.blue,
      '--surface': theme.palette.background.default,
      '--cream': theme.palette.background.default,
      '--panel': theme.palette.background.paper,
      '--sky': theme.palette.background.default,
      '--ink': theme.palette.text.primary,
      '--muted': theme.palette.text.secondary,
      '--line': theme.palette.divider,
      '--blue': theme.palette.accent.blue,
      '--acid': theme.palette.accent.lime,
      '--page-gutter': 'clamp(20px, 3.2vw, 54px)',
      '--scroll-ruler-height': '38px',
      '--site-grid': 'url("/site-grid.svg")',
      '--site-grid-position': 'clamp(18px, 3vw, 60px) 0',
      '--site-grid-size': 'clamp(240px, 31.25vw, 640px) clamp(260px, 34.5vh, 400px)',
      color: theme.palette.text.primary,
      background: theme.palette.background.default,
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  }
}

export const portfolioGlobalStyles = String.raw`
html {
  min-width: 320px;
  min-height: 100%;
  background: var(--surface);
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background-color: var(--surface);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  font-family: var(--font-portfolio);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

button,
input,
textarea,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

img {
  display: block;
  max-width: 100%;
}

::selection {
  background: var(--acid);
  color: var(--theme-black);
}

#root {
  min-height: 100vh;
}

[data-scroll-scene] {
  scroll-margin-top: 110px;
}

@media (max-width: 820px) {
  :root {
    --site-grid-position: 18px 0;
    --site-grid-size: 50vw 32vh;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* src/Component/Navbarpage/Navbarpage.css */
.studio-header {
  position: fixed;
  top: var(--scroll-ruler-height);
  right: 0;
  left: 0;
  z-index: 200;
  display: flex;
  min-height: 76px;
  padding: 0 var(--page-gutter);
  align-items: center;
  justify-content: space-between;
  color: var(--ink);
  font-family: var(--font-mono);
  mix-blend-mode: difference;
}

/* src/Component/ScrollRuler/ScrollRuler.css */
.scroll-ruler {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 230;
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr) 144px;
  height: var(--scroll-ruler-height);
  overflow: hidden;
  border-bottom: 1px solid var(--ink);
  background: var(--surface);
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.scroll-ruler-brand,
.scroll-ruler-status {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  background: var(--surface);
}

.scroll-ruler-brand {
  gap: 4px;
  padding: 0 18px;
  border-right: 1px solid var(--ink);
  font-family: var(--font-portfolio);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.scroll-ruler-brand b {
  color: var(--blue);
  font-weight: inherit;
}

.scroll-ruler-status {
  gap: 7px;
  justify-content: center;
  border-left: 1px solid var(--ink);
  color: var(--muted);
}

.scroll-ruler-status i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--acid);
  box-shadow: 0 0 0 3px rgba(192, 254, 4, 0.15);
}

.scroll-ruler-track {
  position: relative;
  min-width: 0;
}

.scroll-ruler-track::before {
  position: absolute;
  z-index: 1;
  inset: 0;
  background-image:
    repeating-linear-gradient(90deg, transparent 0 99px, var(--ink) 99px 100px),
    repeating-linear-gradient(90deg, transparent 0 49px, color-mix(in srgb, var(--ink) 65%, transparent) 49px 50px),
    repeating-linear-gradient(90deg, transparent 0 9px, color-mix(in srgb, var(--ink) 36%, transparent) 9px 10px);
  background-position: 0 0;
  background-repeat: repeat-x;
  background-size: auto 100%;
  content: "";
  mask-image: linear-gradient(to bottom, transparent 0 17px, #000 17px 100%);
}

.scroll-ruler-track::after {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--scroll-progress);
  background: color-mix(in srgb, var(--blue) 20%, transparent);
  box-shadow: inset -3px 0 0 color-mix(in srgb, var(--acid) 88%, transparent);
  content: "";
  transition: width 80ms linear;
  will-change: width;
}

.scroll-ruler-labels {
  position: absolute;
  z-index: 2;
  inset: 0;
}

.scroll-ruler-labels span {
  position: absolute;
  top: 6px;
  color: var(--muted);
  font-size: 8px;
  transform: translateX(-50%);
}

.scroll-ruler-progress {
  position: absolute;
  top: 3px;
  left: clamp(18px, var(--scroll-progress), calc(100% - 18px));
  z-index: 3;
  display: grid;
  min-width: 35px;
  height: 20px;
  padding: 0 6px;
  border-radius: 3px;
  background: var(--acid);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  color: var(--theme-black);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0;
  place-items: center;
  transform: translateX(-50%);
  transition: left 80ms linear;
  will-change: left;
}

.scroll-ruler-progress::after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 3px;
  height: 15px;
  background: var(--acid);
  content: "";
  transform: translateX(-50%);
}

.studio-logo {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  color: var(--theme-white);
  font-family: var(--font-portfolio);
  font-size: clamp(18px, 1.35vw, 24px);
  font-weight: 850;
  letter-spacing: -0.04em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
}

.studio-logo span {
  color: currentColor;
  -webkit-text-stroke: 0;
}

.studio-nav {
  display: flex;
  gap: clamp(20px, 3vw, 52px);
  align-items: center;
}

.studio-nav-item {
  position: relative;
}

.studio-nav-item::after {
  position: absolute;
  top: 100%;
  right: -22px;
  left: -22px;
  height: 16px;
  content: "";
}

.studio-nav > a,
.studio-nav-item > a,
.studio-theme {
  position: relative;
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.64);
  font-family: var(--font-mono);
  font-size: clamp(10px, 0.72vw, 12px);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}

.studio-nav > a::after,
.studio-nav-item > a::after {
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  height: 1px;
  background: currentColor;
  content: "";
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

.studio-nav > a:hover::after,
.studio-nav > a:focus-visible::after,
.studio-nav > a.active::after,
.studio-nav-item > a:hover::after,
.studio-nav-item > a:focus-visible::after,
.studio-nav-item > a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.studio-nav > a:hover,
.studio-nav > a:focus-visible,
.studio-nav > a.active,
.studio-nav-item > a:hover,
.studio-nav-item > a:focus-visible,
.studio-nav-item > a.active,
.studio-theme:hover,
.studio-theme:focus-visible {
  color: var(--theme-white);
  outline: none;
}

.studio-theme {
  cursor: pointer;
}

.studio-header:has(.studio-nav-item:hover .studio-dropdown),
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) {
  mix-blend-mode: normal;
}

.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-logo,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-logo {
  color: var(--ink);
}

.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav > a,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav-item > a,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-theme,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav > a,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav-item > a,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-theme {
  color: var(--muted);
}

.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav > a:hover,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav > a.active,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav-item > a:hover,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-nav-item > a.active,
.studio-header:has(.studio-nav-item:hover .studio-dropdown) .studio-theme:hover,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav > a:focus-visible,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav > a.active,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav-item > a:focus-visible,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-nav-item > a.active,
.studio-header:has(.studio-nav-item:focus-within .studio-dropdown) .studio-theme:focus-visible {
  color: var(--ink);
}

.studio-dropdown {
  position: absolute;
  top: calc(100% + 16px);
  right: -22px;
  display: grid;
  width: min(420px, 80vw);
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: var(--theme-black);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.26);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: 180ms ease;
}

.studio-nav-item:hover .studio-dropdown,
.studio-nav-item:has(a:focus-visible) .studio-dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.studio-dropdown > span {
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.42);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.studio-dropdown a {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 8px;
  padding: 9px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-portfolio);
  font-size: 17px;
  text-decoration: none;
  transition: 140ms ease;
}

.studio-dropdown a:hover,
.studio-dropdown a:focus-visible,
.studio-dropdown a.active {
  color: var(--acid);
  outline: none;
  transform: translateX(4px);
}

.studio-dropdown a b {
  color: rgba(255, 255, 255, 0.32);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
}

.studio-dropdown .studio-dropdown-all {
  grid-template-columns: 1fr auto;
  margin-top: 8px;
  border: 0;
  color: var(--theme-white);
  font-size: 13px;
}

.studio-dropdown-all i {
  font-style: normal;
}

.studio-menu-toggle {
  display: none;
}

.studio-chrome {
  position: fixed;
  right: var(--page-gutter);
  bottom: 18px;
  left: var(--page-gutter);
  z-index: 190;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  color: rgba(255, 255, 255, 0.68);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.04em;
  line-height: 1.6;
  text-transform: uppercase;
  mix-blend-mode: difference;
}

.studio-chrome a {
  color: inherit;
  text-decoration: none;
}

.studio-chrome a:hover,
.studio-chrome a:focus-visible {
  color: var(--theme-white);
  outline: none;
}

.studio-chrome-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.studio-clock {
  justify-self: center;
}

.studio-chrome-right {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-self: end;
}

.studio-contact-link {
  position: relative;
  z-index: 2;
  display: inline-flex;
  justify-content: center;
  width: 52px;
  min-height: 52px;
  align-items: center;
  padding: 0;
}

.studio-contact-link svg {
  pointer-events: none;
}

.studio-contact-link::after {
  position: absolute;
  right: 6px;
  bottom: 5px;
  left: 6px;
  height: 1px;
  background: currentColor;
  content: "";
  transform: scaleX(0);
  transition: transform 160ms ease;
}

.studio-contact-link:hover::after,
.studio-contact-link:focus-visible::after {
  transform: scaleX(1);
}

@media (max-width: 820px) {
  :root {
    --scroll-ruler-height: 34px;
  }

  [data-scroll-scene] {
    scroll-margin-top: 106px;
  }

  .scroll-ruler {
    grid-template-columns: 104px minmax(0, 1fr);
  }

  .scroll-ruler-brand {
    padding: 0 11px;
    font-size: 10px;
  }

  .scroll-ruler-status {
    display: none;
  }

  .scroll-ruler-progress {
    top: 2px;
  }

  .studio-header {
    min-height: 72px;
    padding: 0 18px;
    background: rgba(255, 255, 255, 0.88);
    mix-blend-mode: normal;
    backdrop-filter: blur(16px);
  }

  [data-theme="dark"] .studio-header {
    background: rgba(0, 0, 0, 0.9);
  }

  .studio-logo {
    color: var(--ink);
  }

  .studio-menu-toggle {
    position: relative;
    z-index: 2;
    display: grid;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
    place-content: center;
  }

  .studio-menu-toggle.is-open {
    transform: translateX(calc(min(86vw, 390px) - 100vw));
  }

  .studio-menu-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 3px 0;
    background: var(--ink);
    transition: 180ms ease;
  }

  .studio-menu-toggle.is-open span:first-child {
    transform: translateY(4px) rotate(45deg);
  }

  .studio-menu-toggle.is-open span:last-child {
    transform: translateY(-4px) rotate(-45deg);
  }

  .studio-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: min(86vw, 390px);
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 90px 24px 40px;
    border-right: 1px solid var(--line);
    background: var(--surface);
    box-shadow: 18px 0 48px rgba(0, 0, 0, 0.16);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    transition:
      opacity 160ms ease,
      transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
      visibility 0s linear 240ms;
    visibility: hidden;
  }

  .studio-nav.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
    transition-delay: 0s;
    visibility: visible;
  }

  .studio-nav > a,
  .studio-nav-item > a,
  .studio-theme {
    color: var(--ink);
    font-family: var(--font-portfolio);
    font-size: clamp(19px, 5vw, 22px);
    font-weight: 600;
    letter-spacing: -0.02em;
    text-transform: none;
  }

  .studio-nav-item:hover .studio-dropdown,
  .studio-nav-item:has(a:focus-visible) .studio-dropdown,
  .studio-dropdown {
    display: none;
  }

  .studio-chrome {
    right: 18px;
    bottom: 12px;
    left: 18px;
    grid-template-columns: 1fr auto;
  }

  .studio-chrome-left span,
  .studio-clock,
  .studio-chrome-right a {
    display: none;
  }

  .studio-chrome-right {
    gap: 0;
  }
}

/* src/Component/StudioCursor/StudioCursor.css */
.studio-cursor-trail {
  position: fixed;
  z-index: 1000;
  inset: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
}

.studio-cursor-trail.is-visible {
  opacity: 1;
}

.studio-cursor-trail.is-pressed {
  filter: saturate(1.16) brightness(1.04);
}

@media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
  .studio-cursor-trail {
    display: none;
  }
}

/* src/Component/HomePage/HomePage.css */
.home-page {
  position: relative;
  isolation: isolate;
  background: var(--surface);
  color: var(--ink);
  font-family: var(--font-portfolio);
}

.home-page > section {
  position: relative;
  z-index: 1;
}

.home-hero {
  position: relative;
  isolation: isolate;
  display: grid;
  min-height: 100svh;
  padding: 100px var(--page-gutter) 80px;
  overflow: hidden;
  background-color: var(--surface);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  place-items: center;
}

.home-page .about-page {
  background-color: var(--theme-white);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

.home-page .info-page {
  background-color: color-mix(in srgb, var(--surface) 36%, transparent);
}

.home-page .contact-page {
  background-color: color-mix(in srgb, var(--sky) 36%, transparent);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

.home-side-note {
  position: absolute;
  top: 16%;
  z-index: 4;
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: clamp(9px, 0.7vw, 11px);
  line-height: 1.45;
}

.home-side-note-left {
  left: var(--page-gutter);
}

.home-side-note-right {
  right: var(--page-gutter);
  text-align: right;
}

.home-hero-copy {
  position: relative;
  z-index: 5;
  display: grid;
  gap: clamp(24px, 3.5vh, 42px);
  justify-items: center;
}

.home-hero h1 {
  width: min(94vw, 1250px);
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(44px, 6.6vw, 110px);
  font-weight: 900;
  letter-spacing: -0.065em;
  line-height: 0.84;
  text-align: center;
  text-transform: uppercase;
}

.home-hero-copy > p {
  width: min(680px, 76vw);
  margin: 0;
  color: color-mix(in srgb, var(--ink) 74%, transparent);
  font-family: system-ui, sans-serif;
  font-size: clamp(14px, 1.15vw, 18px);
  line-height: 1.5;
  text-align: center;
  text-wrap: balance;
}

.home-hero h1 span {
  display: block;
}

.home-hero h1 span:nth-child(1) {
  transform: translateX(-21%);
}

.home-hero h1 span:nth-child(2) {
  transform: translateX(12%);
}

.home-hero h1 span:nth-child(3) {
  transform: translateX(-2%);
}

.home-sticker {
  position: absolute;
  z-index: 6;
  display: grid;
  color: var(--theme-black);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  place-items: center;
  pointer-events: none;
  will-change: transform;
}

.home-sticker-code {
  top: 24%;
  right: 9%;
  width: clamp(70px, 8vw, 120px);
  aspect-ratio: 1;
  border: 4px solid var(--theme-black);
  border-radius: 46% 54% 57% 43%;
  background: var(--theme-lime);
  font-size: clamp(22px, 3vw, 42px);
  animation: home-sticker-code-drift 24s ease-in-out infinite;
}

.home-sticker-star {
  top: 17%;
  left: 29%;
  color: var(--theme-black);
  font-size: clamp(78px, 9vw, 130px);
  text-shadow:
    0 0 0 var(--theme-blue),
    0 0 2px var(--theme-black);
  animation: home-sticker-star-drift 31s ease-in-out infinite;
  -webkit-text-stroke: 12px var(--theme-blue);
}

.home-sticker-smile {
  right: 16%;
  bottom: 19%;
  width: clamp(62px, 6vw, 94px);
  aspect-ratio: 1;
  border: 3px solid var(--theme-black);
  border-radius: 50%;
  background: var(--theme-white);
  font-size: 34px;
  animation: home-sticker-smile-drift 27s ease-in-out infinite;
}

.home-sticker-badge {
  bottom: 16%;
  left: 8%;
  width: clamp(78px, 7vw, 110px);
  aspect-ratio: 1;
  border: 2px solid var(--theme-black);
  border-radius: 50%;
  background: var(--acid);
  font-family: var(--font-mono);
  font-size: clamp(9px, 0.8vw, 12px);
  line-height: 1.2;
  text-align: center;
  animation: home-sticker-badge-drift 29s ease-in-out infinite;
}

.home-scroll-cue {
  position: absolute;
  bottom: 11%;
  left: 50%;
  z-index: 8;
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.home-scroll-cue span {
  font-size: 19px;
  animation: home-cue 1.3s ease-in-out infinite alternate;
}

.home-manifesto {
  display: grid;
  grid-template-columns: minmax(0, 0.5fr) minmax(300px, 1.5fr);
  gap: 40px;
  min-height: 90svh;
  padding: clamp(110px, 15vh, 180px) var(--page-gutter);
  background-color: var(--surface);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

.home-manifesto h2 {
  max-width: 1100px;
  margin: 0;
  font-size: clamp(56px, 7.5vw, 126px);
  font-weight: 500;
  letter-spacing: -0.068em;
  line-height: 0.84;
}

.home-manifesto h2 span {
  color: var(--blue);
}

.home-manifesto-copy {
  grid-column: 2;
  display: flex;
  gap: 32px;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: clamp(50px, 9vh, 100px);
}

.home-manifesto-copy > p {
  max-width: 660px;
  margin: 0;
  color: var(--muted);
  font-size: clamp(20px, 1.7vw, 28px);
  line-height: 1.45;
}

.home-work {
  padding: clamp(100px, 14vh, 160px) var(--page-gutter) 130px;
  background-color: var(--cream);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

.home-section-heading {
  display: flex;
  gap: 30px;
  align-items: end;
  justify-content: space-between;
  margin-bottom: clamp(55px, 8vh, 90px);
}

.home-section-heading h2 {
  max-width: 900px;
  margin: 0;
  font-size: clamp(54px, 7vw, 110px);
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 0.88;
  text-align: right;
}

.home-work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.home-work-card {
  padding: clamp(18px, 2vw, 30px);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  text-decoration: none;
}

.home-work-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--panel);
}

.home-work-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(21, 185, 244, 0.18), rgba(192, 254, 4, 0.14));
  content: "";
  mix-blend-mode: color;
}

.home-work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.65) contrast(0.92);
  transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.home-work-card:hover img,
.home-work-card:focus-visible img {
  transform: scale(1.045);
}

.home-work-card:focus-visible {
  outline: 3px solid var(--blue);
  outline-offset: -3px;
}

.home-work-image > span {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 6px 9px;
  background: var(--acid);
  color: var(--theme-black);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
}

.home-work-card > div:last-child {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-top: 15px;
}

.home-work-card h3 {
  margin: 0;
  font-size: clamp(18px, 1.4vw, 23px);
  font-weight: 500;
}

.home-work-card > div:last-child span {
  font-family: var(--font-mono);
  font-size: 10px;
}

.home-view-all {
  display: flex;
  width: fit-content;
  gap: 20px;
  margin: 48px auto 0;
  padding-bottom: 6px;
  border-bottom: 1px solid currentColor;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 11px;
  text-decoration: none;
  text-transform: uppercase;
}

@keyframes home-cue {
  to {
    transform: translateY(7px);
  }
}

@keyframes home-sticker-code-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(12deg); }
  25% { transform: translate3d(-28vw, 8vh, 0) rotate(-10deg); }
  50% { transform: translate3d(-58vw, 48vh, 0) rotate(18deg); }
  75% { transform: translate3d(-18vw, 55vh, 0) rotate(-16deg); }
}

@keyframes home-sticker-star-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg); }
  20% { transform: translate3d(48vw, 10vh, 0) rotate(15deg); }
  45% { transform: translate3d(38vw, 58vh, 0) rotate(-18deg); }
  70% { transform: translate3d(-18vw, 48vh, 0) rotate(12deg); }
  88% { transform: translate3d(-12vw, 15vh, 0) rotate(-14deg); }
}

@keyframes home-sticker-smile-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(8deg); }
  25% { transform: translate3d(-55vw, -10vh, 0) rotate(-20deg); }
  50% { transform: translate3d(-45vw, -55vh, 0) rotate(16deg); }
  75% { transform: translate3d(5vw, -45vh, 0) rotate(-12deg); }
}

@keyframes home-sticker-badge-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-13deg); }
  25% { transform: translate3d(65vw, -8vh, 0) rotate(16deg); }
  50% { transform: translate3d(52vw, -55vh, 0) rotate(-18deg); }
  75% { transform: translate3d(12vw, -45vh, 0) rotate(11deg); }
}

@media (max-width: 820px) {
  .home-hero {
    min-height: calc(100svh - 72px);
    padding: 80px 18px 100px;
  }

  .home-side-note {
    top: 9%;
  }

  .home-side-note-left {
    left: 18px;
  }

  .home-side-note-right {
    right: 18px;
  }

  .home-hero h1 {
    font-size: clamp(42px, 12.8vw, 72px);
  }

  .home-hero-copy {
    gap: 24px;
  }

  .home-hero-copy > p {
    width: min(92vw, 560px);
    font-size: 13px;
  }

  .home-hero h1 span:nth-child(n) {
    transform: none;
  }

  .home-sticker-code {
    top: 21%;
    right: 4%;
  }

  .home-sticker-star {
    top: 20%;
    left: 17%;
  }

  .home-sticker-badge {
    bottom: 13%;
    left: 4%;
  }

  .home-sticker-smile {
    right: 5%;
    bottom: 16%;
  }

  .home-manifesto {
    display: block;
    min-height: 0;
    padding: 100px 20px;
  }

  .home-manifesto h2 {
    margin-top: 32px;
    font-size: clamp(50px, 15vw, 82px);
  }

  .home-manifesto-copy {
    display: grid;
    margin-top: 48px;
  }

  .home-manifesto-copy > p {
    font-size: 19px;
  }

  .home-section-heading {
    display: block;
  }

  .home-section-heading h2 {
    margin-top: 28px;
    text-align: left;
  }

  .home-work {
    padding: 90px 20px 120px;
  }

  .home-work-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-sticker {
    transition: none;
  }

  .home-sticker,
  .home-scroll-cue span {
    animation: none;
  }

}

/* src/Component/AboutPage/AboutPage.css */
.about-page {
  --timeline-wheel-size: clamp(620px, 61vw, 900px);
  --ink: var(--theme-black);
  --muted: color-mix(in srgb, var(--theme-black) 66%, transparent);
  --line: color-mix(in srgb, var(--theme-black) 20%, transparent);
  --blue: var(--theme-black);
  position: relative;
  display: grid;
  grid-template-columns: clamp(380px, 38vw, 550px) minmax(0, 1fr);
  min-height: 400svh;
  overflow-x: clip;
  background-color: var(--theme-white);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  color: var(--ink);
  font-family: var(--font-portfolio);
}

.about-timeline-sticky {
  position: sticky;
  top: 0;
  grid-column: 1;
  grid-row: 1;
  height: 100svh;
  min-height: 620px;
  overflow: hidden;
  align-self: start;
  background: var(--theme-white);
}

.about-timeline-sticky::before {
  position: absolute;
  inset: 0;
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  opacity: 0.8;
  pointer-events: none;
  content: "";
}

.about-timeline-wheel {
  position: absolute;
  top: 50%;
  left: calc(var(--timeline-wheel-size) * -0.63);
  z-index: 2;
  width: var(--timeline-wheel-size);
  aspect-ratio: 1;
  border: 1px solid var(--blue);
  border-radius: 50%;
  transform: translateY(-50%) rotate(0deg);
  transition: transform 110ms linear;
  will-change: transform;
}

.about-timeline-wheel::before,
.about-timeline-wheel::after {
  position: absolute;
  inset: 11%;
  border: 1px solid var(--blue);
  border-radius: 50%;
  content: "";
}

.about-timeline-wheel::after {
  inset: 27%;
}

.about-timeline-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  width: calc(var(--timeline-wheel-size) * 0.54);
  align-items: center;
  transform: rotate(var(--marker-angle)) translateX(calc(var(--timeline-wheel-size) * 0.5));
  transform-origin: 0 0;
}

.about-timeline-marker button {
  display: inline-flex;
  padding: 10px 14px 10px 22px;
  border: 0;
  background: transparent;
  color: color-mix(in srgb, var(--ink) 42%, transparent);
  cursor: pointer;
  align-items: center;
  font-family: var(--font-heading);
  font-size: clamp(17px, 1.45vw, 25px);
  letter-spacing: -0.035em;
  line-height: 1;
  transition: color 260ms ease, transform 260ms ease;
  white-space: nowrap;
}

.about-timeline-marker button span {
  display: none;
}

.about-timeline-marker.is-active button {
  color: var(--ink);
  transform: translateX(5px);
}

.about-timeline-pointer {
  position: absolute;
  top: 50%;
  left: calc(var(--timeline-wheel-size) * 0.37);
  z-index: 4;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--theme-black);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--theme-black) 16%, transparent);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.about-timeline-marker button:hover,
.about-timeline-marker button:focus-visible {
  color: var(--ink);
  outline: none;
}

.about-timeline-status {
  position: absolute;
  top: 112px;
  right: 24px;
  z-index: 3;
  display: flex;
  gap: 18px;
  align-items: center;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-timeline-status h2 {
  display: inline-flex;
  gap: 9px;
  margin: 0;
  color: var(--ink);
  font: inherit;
  align-items: center;
}

.about-timeline-status h2::before {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--acid);
  content: "";
}

.about-project-list {
  position: relative;
  z-index: 3;
  grid-column: 2;
  grid-row: 1;
}

.about-project {
  display: flex;
  min-height: 100svh;
  padding: clamp(110px, 13vh, 160px) var(--page-gutter) clamp(80px, 10vh, 120px) clamp(24px, 4vw, 72px);
  align-items: center;
  margin: 0;
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

.about-project {
  background-color: var(--theme-white);
}

.about-project > div {
  width: min(100%, 780px);
}

.about-project-featured {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 9px 13px;
  border: 1px solid var(--blue);
  border-radius: 999px;
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
}

.about-project-date {
  margin: 0 0 20px;
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: clamp(11px, 0.8vw, 13px);
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-project h3 {
  max-width: 730px;
  margin: 0;
  font-size: clamp(50px, 5.4vw, 92px);
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 0.88;
  text-wrap: balance;
}

.about-project-description {
  max-width: 650px;
  margin: clamp(24px, 4vh, 38px) 0 0;
  color: var(--muted);
  font-family: system-ui, sans-serif;
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.55;
}

.about-project-services {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.about-project-services a {
  display: inline-flex;
  padding: 7px 10px;
  border: 1px solid var(--blue);
  border-radius: 999px;
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  transition: border-color 180ms ease, color 180ms ease;
}

.about-project-services a:hover,
.about-project-services a:focus-visible {
  border-color: var(--ink);
  color: var(--ink);
  outline: none;
}

.about-project-link {
  display: inline-flex;
  gap: 12px;
  margin-top: 28px;
  padding-bottom: 7px;
  border-bottom: 1px solid currentColor;
  color: var(--ink);
  align-items: center;
  font-size: 14px;
  font-weight: 850;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: color 180ms ease, gap 180ms ease;
}

.about-project-link:hover,
.about-project-link:focus-visible {
  gap: 18px;
  color: var(--blue);
  outline: none;
}

.about-timeline-controls {
  display: flex;
  gap: 16px;
  margin-top: 18px;
  align-items: center;
}

.about-timeline-controls button {
  display: grid;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  color: var(--ink);
  cursor: pointer;
  place-items: center;
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  backdrop-filter: blur(10px);
}

.about-timeline-controls button:hover:not(:disabled),
.about-timeline-controls button:focus-visible:not(:disabled) {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--surface);
  outline: none;
  transform: scale(1.06);
}

.about-timeline-controls button:disabled {
  cursor: default;
  opacity: 0.3;
}

.about-timeline-controls div {
  display: flex;
  gap: 6px;
  align-items: center;
}

.about-timeline-controls div span {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--line);
  transition: width 260ms ease, background 260ms ease;
}

.about-timeline-controls div span.is-active {
  width: 24px;
  background: var(--acid);
}

.about-scroll-note {
  position: absolute;
  right: 24px;
  bottom: 30px;
  margin: 0;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-scroll-note span {
  display: inline-block;
  margin-left: 8px;
  color: var(--blue);
  animation: about-scroll-arrow 1.5s ease-in-out infinite;
}

@keyframes about-scroll-arrow {
  50% {
    transform: translateY(5px);
  }
}

@media (max-width: 820px) {
  .about-page {
    --timeline-wheel-size: 540px;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 400svh;
  }

  .about-timeline-sticky {
    grid-column: 1;
    grid-row: 1;
    min-height: 600px;
  }

  .about-timeline-wheel {
    top: 31%;
  }

  .about-timeline-marker {
    width: 300px;
  }

  .about-timeline-marker button {
    font-size: 17px;
  }

  .about-timeline-status {
    top: 94px;
    right: 20px;
  }

  .about-project-list {
    grid-column: 1;
    grid-row: 1;
  }

  .about-project {
    min-height: 100svh;
    padding: 46svh 20px 70px;
    align-items: flex-start;
  }

  .about-project h3 {
    font-size: clamp(38px, 11vw, 58px);
    line-height: 0.9;
  }

  .about-project-description {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.45;
  }

  .about-project-services {
    gap: 6px;
    margin-top: 16px;
  }

  .about-project-services a {
    padding: 6px 8px;
    font-size: 8px;
  }

  .about-project-link {
    margin-top: 18px;
    font-size: 12px;
  }

  .about-timeline-controls {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  .about-timeline-controls button {
    width: 38px;
    height: 38px;
  }

  .about-scroll-note {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-timeline-wheel,
  .about-timeline-controls div span,
  .about-timeline-marker button,
  .about-timeline-marker button span {
    transition: none;
  }

  .about-scroll-note span {
    animation: none;
  }
}

/* Shared business pitch and contact page styles */
.info-page {
  min-height: 100svh;
  padding: clamp(120px, 15vh, 170px) var(--page-gutter) 100px;
  background-color: var(--surface);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  color: var(--ink);
  font-family: var(--font-portfolio);
}

.studio-label {
  margin: 0;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pitch-hero {
  max-width: 1180px;
}

.pitch-hero-layout {
  max-width: 1450px;
}

.pitch-hero h1 {
  margin: 26px 0 32px;
  font-size: clamp(88px, 13vw, 220px);
  font-weight: 500;
  letter-spacing: -0.07em;
  line-height: 0.78;
}

.pitch-hero h1 > span {
  display: block;
  color: var(--blue);
}

.pitch-hero h1 > .pitch-title-line:first-child {
  --pitch-title-resolved-color: var(--ink);
  color: var(--ink);
}

.pitch-title-line {
  --pitch-title-resolved-color: var(--blue);
  white-space: pre;
}

.pitch-title-line.is-scrambling {
  color: var(--pitch-title-resolved-color);
}

.process-animation {
  position: relative;
  display: block;
  width: 100%;
  max-width: 650px;
  aspect-ratio: 1.12;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--ink);
  cursor: pointer;
  isolation: isolate;
}

.process-animation:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--blue) 36%, transparent);
  outline-offset: 5px;
}

.process-animation-grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
  background-size: 20% 20%;
  mask-image: radial-gradient(circle, black, transparent 88%);
}

.process-animation-scene,
.process-animation-scene > span,
.process-animation-scene i,
.process-animation-scene b,
.process-animation-scene em {
  position: absolute;
  display: block;
}

.process-animation-scene {
  inset: 0;
  opacity: 0;
  pointer-events: none;
}

.process-animation .process-animation-scene,
.process-animation .process-animation-scene * {
  animation-play-state: paused;
}

.process-animation.is-playing .process-animation-scene,
.process-animation.is-playing .process-animation-scene * {
  animation-play-state: running;
}

.process-search-scene {
  animation: process-scene-search 18s infinite both;
}

.process-phone-scene {
  animation: process-scene-phone 18s infinite both;
}

.process-browser-scene {
  animation: process-scene-browser 18s infinite both;
}

.process-brand-scene {
  animation: process-scene-brand 18s infinite both;
}

.process-chart {
  position: absolute;
  right: 3%;
  bottom: 3%;
  width: 77%;
  height: 68%;
  overflow: visible;
  fill: none;
  opacity: 0.2;
  stroke: var(--ink);
  stroke-dasharray: 1400;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12;
  animation: process-chart-draw 18s infinite both;
}

.process-search-copy {
  top: 34%;
  left: 12%;
  width: 29%;
  height: 76px;
}

.process-search-copy i {
  left: 0;
  height: 10px;
  border-radius: 999px;
  background: var(--ink);
  animation: process-copy-lines 18s infinite both;
}

.process-search-copy i:nth-child(1) {
  top: 0;
  width: 100%;
}

.process-search-copy i:nth-child(2) {
  top: 26px;
  left: 20%;
  width: 80%;
  opacity: 0.7;
}

.process-search-copy i:nth-child(3) {
  top: 52px;
  left: 45%;
  width: 55%;
  height: 7px;
  opacity: 0.22;
}

.process-search-orbit {
  top: 50%;
  left: 56%;
  border: 1px solid color-mix(in srgb, var(--ink) 18%, transparent);
  border-radius: 50%;
  translate: -50% -50%;
  animation: process-orbit-pulse 4.2s ease-in-out infinite;
}

.process-search-orbit-one {
  width: 28%;
  aspect-ratio: 1;
}

.process-search-orbit-two {
  width: 54%;
  aspect-ratio: 1;
  animation-delay: -0.8s;
}

.process-search-orbit-three {
  width: 84%;
  aspect-ratio: 1;
  animation-delay: -1.6s;
}

.process-search-glass {
  top: 39%;
  left: 45%;
  width: 20%;
  aspect-ratio: 1;
  border: clamp(10px, 1.2vw, 17px) solid var(--acid);
  border-radius: 50%;
  filter: drop-shadow(0 10px 20px color-mix(in srgb, var(--acid) 22%, transparent));
  animation: process-search-pop 18s infinite both;
}

.process-search-glass::after {
  position: absolute;
  top: 82%;
  left: -47%;
  width: 70%;
  height: clamp(10px, 1.2vw, 17px);
  border-radius: 999px;
  background: var(--acid);
  content: "";
  rotate: -44deg;
  transform-origin: right center;
}

.process-phone-blob {
  top: -18%;
  left: 16%;
  width: 69%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--acid) 58%, var(--blue));
  animation: process-blob-breathe 3.2s ease-in-out infinite alternate;
}

.process-phone-blob::after {
  position: absolute;
  bottom: -32%;
  left: -32%;
  width: 88%;
  height: 26%;
  border-radius: 999px;
  background: inherit;
  content: "";
  rotate: -42deg;
}

.process-toggle-card {
  top: 18%;
  right: 2%;
  z-index: 4;
  width: 42%;
  height: 25%;
  border-radius: 24px;
  background: color-mix(in srgb, var(--blue) 68%, var(--acid));
  box-shadow: 0 20px 42px color-mix(in srgb, var(--blue) 18%, transparent);
  animation: process-card-float 3.5s ease-in-out infinite alternate;
}

.process-toggle-card::before {
  position: absolute;
  top: 31%;
  left: 43%;
  width: 43%;
  height: 38%;
  border-radius: 999px;
  background: var(--surface);
  content: "";
}

.process-toggle-card i {
  top: 35%;
  left: 47%;
  z-index: 1;
  width: 16%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--acid);
}

.process-phone {
  top: 14%;
  left: 35%;
  z-index: 3;
  width: 37%;
  height: 69%;
  border: clamp(5px, 0.55vw, 8px) solid var(--ink);
  border-radius: 12% 12% 14% 14%;
  background: color-mix(in srgb, var(--surface) 76%, transparent);
  box-shadow: 0 28px 70px color-mix(in srgb, var(--ink) 19%, transparent);
  rotate: 9deg;
  animation: process-phone-tilt 3.8s ease-in-out infinite alternate;
}

.process-phone-camera {
  top: 5%;
  left: 48%;
  width: 8%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--ink);
}

.process-phone-menu {
  top: 12%;
  right: 10%;
  width: 17%;
  height: 10%;
}

.process-phone-menu b {
  right: 0;
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: var(--ink);
}

.process-phone-menu b:nth-child(1) { top: 0; }
.process-phone-menu b:nth-child(2) { top: 8px; }
.process-phone-menu b:nth-child(3) { top: 16px; }

.process-people-icon {
  position: absolute;
  top: 25%;
  left: 27%;
  width: 47%;
  fill: none;
  stroke: var(--ink);
  stroke-linecap: round;
  stroke-width: 5;
}

.process-phone-line {
  left: 15%;
  height: 4%;
  border-radius: 999px;
  background: var(--ink);
}

.process-phone-line-one { top: 59%; width: 70%; }
.process-phone-line-two { top: 67%; width: 50%; opacity: 0.7; }
.process-phone-line-three { top: 75%; width: 28%; height: 2%; opacity: 0.22; }

.process-phone-cta {
  right: 10%;
  bottom: 6%;
  left: 10%;
  height: 14%;
  border-radius: 12px;
  background: var(--ink);
}

.process-phone-dots {
  right: 12%;
  bottom: 15%;
  width: 18px;
  height: 78px;
}

.process-phone-dots i {
  left: 0;
  width: 14px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--ink) 15%, transparent);
}

.process-phone-dots i:nth-child(1) { top: 0; background: var(--blue); }
.process-phone-dots i:nth-child(2) { top: 26px; }
.process-phone-dots i:nth-child(3) { top: 52px; }

.process-browser-blob {
  top: -42%;
  left: -8%;
  width: 84%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--acid) 54%, var(--blue));
  animation: process-blob-breathe 3.8s ease-in-out infinite alternate;
}

.process-browser-window {
  top: 19%;
  right: 7%;
  width: 82%;
  height: 59%;
  overflow: hidden;
  border: clamp(5px, 0.55vw, 8px) solid var(--ink);
  border-radius: 8%;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  box-shadow: 0 30px 75px color-mix(in srgb, var(--ink) 16%, transparent);
  animation: process-browser-float 4s ease-in-out infinite alternate;
}

.process-browser-nav {
  top: 9%;
  right: 6%;
  left: 6%;
  height: 13%;
}

.process-brand-mark {
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  background: currentColor;
}

.process-brand-mark::after {
  position: absolute;
  right: 23%;
  bottom: -5%;
  left: 23%;
  height: 53%;
  background: var(--surface);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  content: "";
}

.process-browser-nav .process-brand-mark {
  top: 0;
  left: 0;
  width: 11%;
  aspect-ratio: 1;
  color: var(--ink);
}

.process-browser-nav > i {
  top: 25%;
  height: 22%;
  border-radius: 999px;
  background: var(--ink);
}

.process-browser-nav > i:nth-of-type(1) { left: 18%; width: 21%; }
.process-browser-nav > i:nth-of-type(2) { left: 44%; width: 24%; }
.process-browser-nav > i:nth-of-type(3) { left: 73%; width: 13%; }

.process-browser-nav > b {
  top: 28%;
  right: 6%;
  width: 7%;
  height: 18%;
  border-radius: 999px;
  background: var(--acid);
}

.process-browser-nav > em {
  top: 18%;
  right: 0;
  width: 5%;
  aspect-ratio: 1;
  border: 2px solid var(--ink);
  border-radius: 50%;
}

.process-browser-copy {
  top: 39%;
  left: 8%;
  width: 28%;
  height: 29%;
}

.process-browser-copy i {
  left: 0;
  height: 7px;
  border-radius: 999px;
  background: var(--ink);
}

.process-browser-copy i:nth-child(1) { top: 0; width: 85%; }
.process-browser-copy i:nth-child(2) { top: 18px; width: 95%; }
.process-browser-copy i:nth-child(3) { top: 36px; width: 72%; opacity: 0.68; }
.process-browser-copy i:nth-child(4) { top: 57px; width: 38%; height: 5px; opacity: 0.2; }

.process-browser-cta {
  bottom: 10%;
  left: 8%;
  width: 27%;
  height: 14%;
  border-radius: 12px;
  background: var(--ink);
}

.process-video-card {
  right: 8%;
  bottom: 10%;
  width: 46%;
  height: 50%;
  border-radius: 16px;
  background: color-mix(in srgb, var(--blue) 68%, var(--acid));
  box-shadow: 0 20px 40px color-mix(in srgb, var(--blue) 14%, transparent);
}

.process-video-card i {
  top: 29%;
  left: 39%;
  width: 28%;
  aspect-ratio: 0.82;
  background: color-mix(in srgb, var(--ink) 28%, transparent);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.process-brand-circle {
  top: -29%;
  left: 8%;
  width: 72%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--acid) 62%, var(--blue));
  animation: process-blob-breathe 3.5s ease-in-out infinite alternate;
}

.process-brand-triangle {
  right: 15%;
  bottom: -10%;
  width: 56%;
  height: 78%;
  background: var(--ink);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  opacity: 0.88;
}

.process-brand-triangle::after {
  position: absolute;
  right: -34%;
  bottom: 4%;
  width: 58%;
  height: 40%;
  background: color-mix(in srgb, var(--ink) 11%, transparent);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  content: "";
}

.process-brand-swatch {
  top: 22%;
  z-index: 3;
  width: 18%;
  aspect-ratio: 1;
  border-radius: 10px;
  box-shadow: 0 20px 40px color-mix(in srgb, var(--ink) 12%, transparent);
  animation: process-swatch-float 3.4s ease-in-out infinite alternate;
}

.process-brand-swatch .process-brand-mark {
  top: 28%;
  left: 28%;
  width: 44%;
  aspect-ratio: 1;
}

.process-brand-swatch-one { left: 8%; background: var(--surface); color: var(--ink); }
.process-brand-swatch-two { left: 29%; background: var(--acid); color: var(--ink); animation-delay: -0.5s; }
.process-brand-swatch-three { left: 50%; background: var(--ink); color: var(--surface); animation-delay: -1s; }
.process-brand-swatch-four { left: 71%; border-radius: 50%; background: var(--blue); color: var(--ink); animation-delay: -1.5s; }

.process-brand-swatch-three .process-brand-mark::after,
.process-brand-swatch-four .process-brand-mark::after {
  background: var(--ink);
}

.process-type-card {
  right: -2%;
  bottom: 19%;
  z-index: 4;
  width: 30%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid var(--ink);
  border-radius: 0 22px 22px 0;
  background: var(--surface);
  color: var(--ink);
  font-family: Georgia, serif;
  font-size: clamp(56px, 6vw, 98px);
  line-height: 1;
  animation: process-card-float 3s ease-in-out infinite alternate-reverse;
}

.process-replay-label {
  position: absolute;
  right: 20px;
  bottom: 16px;
  z-index: 9;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 180ms ease;
}

.process-animation:hover .process-replay-label {
  color: var(--blue);
}

@keyframes process-scene-search {
  0%, 11% { opacity: 1; transform: scale(1); }
  16% { opacity: 0; transform: scale(1.12); }
  84% { opacity: 0; transform: scale(0.88); }
  90%, 100% { opacity: 1; transform: scale(1); }
}

@keyframes process-scene-phone {
  0%, 11% { opacity: 0; transform: translateY(7%) scale(0.9); }
  17%, 31% { opacity: 1; transform: translateY(0) scale(1); }
  37%, 100% { opacity: 0; transform: translateY(-6%) scale(1.06); }
}

@keyframes process-scene-browser {
  0%, 32% { opacity: 0; transform: translateX(7%) scale(0.92); }
  38%, 52% { opacity: 1; transform: translateX(0) scale(1); }
  59%, 100% { opacity: 0; transform: translateX(-7%) scale(1.05); }
}

@keyframes process-scene-brand {
  0%, 53% { opacity: 0; transform: rotate(-3deg) scale(0.9); }
  60%, 78% { opacity: 1; transform: rotate(0) scale(1); }
  85%, 100% { opacity: 0; transform: rotate(3deg) scale(1.08); }
}

@keyframes process-chart-draw {
  0% { stroke-dashoffset: 1400; }
  8%, 90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -1400; }
}

@keyframes process-copy-lines {
  0%, 100% { transform: scaleX(0.15); transform-origin: left; }
  7%, 92% { transform: scaleX(1); transform-origin: left; }
}

@keyframes process-search-pop {
  0%, 100% { transform: rotate(-8deg) scale(0.72); }
  7%, 10%, 91%, 96% { transform: rotate(0) scale(1); }
  13%, 88% { transform: rotate(8deg) scale(1.15); }
}

@keyframes process-orbit-pulse {
  0%, 100% { opacity: 0.28; transform: scale(0.94); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

@keyframes process-blob-breathe {
  to { transform: translate3d(2%, 3%, 0) scale(1.06); }
}

@keyframes process-card-float {
  to { transform: translate3d(0, -9px, 0) rotate(1deg); }
}

@keyframes process-phone-tilt {
  to { transform: translate3d(0, -8px, 0) rotate(-3deg); }
}

@keyframes process-browser-float {
  to { transform: translate3d(-5px, -8px, 0); }
}

@keyframes process-swatch-float {
  to { transform: translate3d(0, -10px, 0) rotate(-2deg); }
}

@media (max-width: 1040px) {
  .process-animation {
    max-width: 680px;
  }
}

.pitch-hero > p:not(.studio-label) {
  max-width: 700px;
  margin: 0 0 32px;
  color: var(--muted);
  font-size: clamp(18px, 1.5vw, 24px);
  line-height: 1.5;
}

.studio-pill {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  min-height: 58px;
  padding: 0 22px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel);
  color: var(--ink);
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition: 180ms ease;
}

.studio-pill:hover,
.studio-pill:focus-visible {
  background: var(--acid);
  color: var(--theme-black);
  outline: none;
  transform: translateY(-3px);
}

.project-showcase {
  position: relative;
  width: calc(100% + (var(--page-gutter) * 2));
  height: 220svh;
  margin-top: clamp(90px, 14vh, 160px);
  margin-inline: calc(var(--page-gutter) * -1);
}

.project-showcase-sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: var(--blue);
  color: var(--theme-white);
}

.project-showcase-heading {
  position: absolute;
  top: clamp(86px, 11vh, 118px);
  right: var(--page-gutter);
  left: var(--page-gutter);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-showcase-deck {
  position: absolute;
  inset: clamp(120px, 16vh, 160px) 0 clamp(50px, 8vh, 90px);
}

.project-showcase-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(36vw, 1160px);
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--theme-black);
  background: var(--theme-white);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
  color: var(--theme-black);
  translate: -50% -50%;
  will-change: transform, opacity;
}

.project-showcase-card-1 { z-index: 1; }
.project-showcase-card-2 { z-index: 3; }
.project-showcase-card-3 { z-index: 2; }

.project-showcase-image {
  position: relative;
  display: grid;
  width: 100%;
  aspect-ratio: 3420 / 1906;
  place-items: center;
  background: var(--panel);
}

.project-showcase-card-1 .project-showcase-image { background: #174777; color: #fff; }
.project-showcase-card-2 .project-showcase-image { background: #87d4ae; color: #063a24; }
.project-showcase-card-3 .project-showcase-image { background: #f5f7fc; color: #145cb6; }

.project-showcase-image > span {
  max-width: 80%;
  font-size: clamp(22px, 4vw, 64px);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.95;
  text-align: center;
}

.project-showcase-card img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-showcase-card figcaption {
  display: flex;
  gap: 18px;
  align-items: center;
  padding: 11px 16px;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
}

.project-showcase-card figcaption span {
  color: color-mix(in srgb, var(--theme-black) 55%, transparent);
}

.project-showcase-card figcaption strong {
  font-weight: 800;
}

.project-showcase.is-reduced-motion {
  height: auto;
}

.project-showcase.is-reduced-motion .project-showcase-sticky {
  position: relative;
  height: auto;
  min-height: 0;
  padding: 160px var(--page-gutter) 80px;
}

.project-showcase.is-reduced-motion .project-showcase-deck {
  position: relative;
  inset: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-showcase.is-reduced-motion .project-showcase-card {
  position: relative;
  top: auto;
  left: auto;
  width: 100%;
  translate: none;
}

.pitch-process {
  position: relative;
  width: calc(100% + (var(--page-gutter) * 2));
  height: 190svh;
  margin-top: clamp(90px, 14vh, 160px);
  margin-inline: calc(var(--page-gutter) * -1);
}

.pitch-process-sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 690px;
  overflow: hidden;
  background: var(--blue);
  color: var(--theme-white);
}

.pitch-process-heading {
  position: absolute;
  top: clamp(86px, 11vh, 118px);
  right: var(--page-gutter);
  left: var(--page-gutter);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  color: color-mix(in srgb, var(--theme-white) 72%, transparent);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  pointer-events: none;
  text-transform: uppercase;
}

.pitch-process-deck {
  position: absolute;
  inset: clamp(118px, 15vh, 155px) var(--page-gutter) clamp(34px, 5vh, 54px);
}

.pitch-process-intro {
  position: absolute;
  top: 50%;
  left: var(--page-gutter);
  z-index: 0;
  width: 44%;
  margin: 0;
  color: var(--theme-white);
  font-size: clamp(78px, 8.7vw, 150px);
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 0.74;
  pointer-events: none;
  text-transform: uppercase;
  translate: 0 -48%;
  transition: opacity 160ms ease, transform 220ms ease, visibility 0s linear 0s;
  visibility: visible;
}

.pitch-process-intro span {
  display: block;
  white-space: nowrap;
}

.pitch-process-intro span:last-child {
  color: var(--acid);
}

.pitch-process-intro.is-hidden {
  opacity: 0;
  transform: translateX(-70px);
  transition: opacity 120ms ease, transform 180ms ease, visibility 0s linear 120ms;
  visibility: hidden;
}

.pitch-process-card {
  position: absolute;
  left: 0;
  width: 100%;
  height: min(19.5%, 182px);
  min-height: 126px;
  overflow: hidden;
  border: 1px solid currentColor;
  box-shadow: 0 20px 45px rgba(6, 12, 14, 0.18);
  color: var(--theme-black);
  transform-origin: center;
  translate: 0 -50%;
  will-change: top, transform;
}

.pitch-process-card-1 {
  background: var(--acid);
}

.pitch-process-card-2 {
  background: var(--theme-white);
  color: var(--blue);
}

.pitch-process-card-3 {
  background: var(--ink);
  color: var(--acid);
}

.pitch-process-card-4 {
  background: color-mix(in srgb, var(--blue) 76%, var(--theme-black));
  color: var(--theme-white);
}

.pitch-process-card-rail {
  display: flex;
  height: 22px;
  gap: clamp(16px, 4vw, 64px);
  align-items: center;
  padding: 0 clamp(14px, 2vw, 30px);
  border-bottom: 1px solid currentColor;
  font-family: var(--font-mono);
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.14em;
  opacity: 0.72;
  text-transform: uppercase;
  white-space: nowrap;
}

.pitch-process-card-rail i {
  font-style: normal;
}

.pitch-process-card-body {
  display: grid;
  height: calc(100% - 22px);
  grid-template-columns: clamp(64px, 8vw, 126px) minmax(0, 1fr) minmax(210px, 0.42fr) clamp(52px, 6vw, 90px);
  gap: clamp(14px, 2vw, 32px);
  align-items: center;
  padding: 6px clamp(16px, 2.4vw, 38px);
}

.pitch-process-card-number {
  font-size: clamp(46px, 6.8vw, 104px);
  font-weight: 700;
  letter-spacing: -0.08em;
  line-height: 0.8;
}

.pitch-process-card h2 {
  margin: 0;
  font-size: clamp(46px, 7.3vw, 112px);
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 0.78;
  text-transform: uppercase;
}

.pitch-process-card p {
  max-width: 420px;
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: clamp(12px, 1.05vw, 16px);
  line-height: 1.42;
}

.pitch-process-card-arrow {
  justify-self: end;
  font-size: clamp(50px, 7vw, 104px);
  font-weight: 300;
  line-height: 0.7;
}

.pitch-note {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  padding: clamp(70px, 12vh, 130px) 0 20px;
}

.pitch-note p {
  margin: 0;
  padding: 10px 15px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
}

.pitch-note p:nth-child(2) {
  background: var(--acid);
  color: var(--theme-black);
  transform: rotate(-3deg);
}

.contact-page,
.home-page .contact-page {
  position: relative;
  display: block;
  min-height: 100svh;
  overflow: hidden;
  background-color: var(--surface);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
}

@media (max-width: 820px) {
  .info-page {
    padding: 92px 20px 110px;
  }

  .pitch-hero h1 {
    font-size: clamp(58px, 18vw, 90px);
  }

  .project-showcase {
    width: calc(100% + 40px);
    height: 190svh;
    margin-inline: -20px;
  }

  .project-showcase-sticky {
    min-height: 0;
  }

  .project-showcase-heading {
    top: 74px;
    right: 20px;
    left: 20px;
  }

  .project-showcase-deck {
    inset: 120px 0 55px;
  }

  .project-showcase-card {
    width: 82vw;
  }

  .project-showcase-card figcaption {
    gap: 8px;
    padding: 9px 10px;
    font-size: 8px;
  }

  .project-showcase.is-reduced-motion .project-showcase-sticky {
    padding: 130px 20px 60px;
  }

  .project-showcase.is-reduced-motion .project-showcase-deck {
    grid-template-columns: 1fr;
  }

  .process-animation {
    max-width: 620px;
    aspect-ratio: 1.18;
  }

  .pitch-process {
    width: calc(100% + 40px);
    height: 210svh;
    margin-inline: -20px;
  }

  .pitch-process-sticky {
    position: sticky;
    height: 100svh;
    min-height: 0;
  }

  .pitch-process-heading {
    top: 38px;
    right: 20px;
    left: 20px;
  }

  .pitch-process-deck {
    inset: 100px 20px 26px;
  }

  .pitch-process-card {
    height: 24%;
    min-height: 0;
  }

  .pitch-process-intro {
    top: 24%;
    width: calc(100% - 40px);
    font-size: clamp(40px, 10.5vw, 80px);
    translate: none;
  }

  .pitch-process-card-body {
    height: calc(100% - 22px);
    grid-template-columns: 52px 1fr 42px;
    grid-template-rows: auto auto;
    gap: 8px 14px;
    padding: 10px 16px;
  }

  .pitch-process-card-number {
    grid-row: 1;
    font-size: 38px;
  }

  .pitch-process-card h2 {
    grid-row: 1;
    font-size: clamp(40px, 13vw, 64px);
  }

  .pitch-process-card p {
    grid-column: 2 / 4;
    grid-row: 2;
    font-size: 12px;
  }

  .pitch-process-card-arrow {
    grid-column: 3;
    grid-row: 1;
    font-size: 42px;
  }

  .pitch-process.is-reduced-motion {
    height: auto;
  }

  .pitch-process.is-reduced-motion .pitch-process-sticky {
    position: relative;
    height: auto;
    padding: 104px 20px 34px;
  }

  .pitch-process.is-reduced-motion .pitch-process-deck {
    position: relative;
    inset: auto;
    display: grid;
    gap: 10px;
  }

  .pitch-process.is-reduced-motion .pitch-process-card {
    position: relative;
    top: auto !important;
    height: auto;
    min-height: 184px;
    translate: none;
  }

  .pitch-process.is-reduced-motion .pitch-process-card-body {
    min-height: 160px;
  }

  .pitch-process.is-reduced-motion .pitch-process-intro {
    display: none;
  }

}

@media (prefers-reduced-motion: reduce) {
  .process-animation *,
  .process-animation-scene,
  .process-animation-scene::before,
  .process-animation-scene::after {
    animation: none !important;
  }

  .process-animation-scene {
    opacity: 0;
  }

  .process-search-scene {
    opacity: 1;
  }
}

/* Contact switchboard concept */
.contact-switchboard-stage {
  position: relative;
  display: grid;
  min-height: min(700px, 76svh);
  grid-template-columns: minmax(0, 1.85fr) minmax(390px, 0.9fr);
  gap: clamp(26px, 4vw, 72px);
  padding: clamp(28px, 4vw, 64px) 0 0;
  background: var(--blue);
  box-shadow: 0 0 0 100vmax var(--blue);
  clip-path: inset(0 -100vmax);
}

.contact-switchboard-intro {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: clamp(32px, 4vw, 58px);
}

.contact-switchboard-intro .studio-label {
  color: var(--theme-black);
}

.contact-switchboard-intro h1 {
  margin: clamp(32px, 4.5vh, 58px) 0;
  color: var(--theme-black);
  font-size: clamp(92px, 11.1vw, 184px);
  font-weight: 600;
  letter-spacing: -0.08em;
  line-height: 0.72;
  text-transform: uppercase;
}

.contact-switchboard-intro h1 span {
  display: block;
  opacity: 0;
  white-space: nowrap;
}

.contact-switchboard-intro h1 span:first-child {
  transform: translate3d(-16%, 0, 0) skewX(-7deg);
}

.contact-switchboard-intro h1 span:last-child {
  transform: translate3d(16%, 0, 0) skewX(7deg);
}

.contact-page.is-switchboard-visible .contact-switchboard-intro h1 span:first-child {
  animation: contact-title-enter-left 720ms 80ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.contact-page.is-switchboard-visible .contact-switchboard-intro h1 span:last-child {
  animation: contact-title-enter-right 760ms 190ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.contact-switchboard-intro h1 em {
  position: relative;
  display: inline-block;
  color: var(--acid);
  font-style: normal;
}

.contact-page.is-switchboard-visible .contact-switchboard-intro h1 em {
  animation: contact-title-move-pop 680ms 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.contact-switchboard-intro h1 em::after {
  position: absolute;
  right: 0;
  bottom: -0.03em;
  left: 0;
  height: 0.045em;
  background: currentColor;
  content: "";
  transform: scaleX(0);
  transform-origin: left center;
}

.contact-page.is-switchboard-visible .contact-switchboard-intro h1 em::after {
  animation: contact-title-underline 620ms 650ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.contact-switchboard-email {
  display: flex;
  min-width: 0;
  gap: clamp(14px, 2vw, 34px);
  align-items: center;
  width: fit-content;
  max-width: 100%;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--theme-black);
  color: var(--theme-black);
  font-family: var(--font-heading);
  font-size: clamp(30px, 4vw, 68px);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.9;
  text-decoration: none;
  text-transform: uppercase;
}

.contact-switchboard-email:hover,
.contact-switchboard-email:focus-visible {
  color: var(--acid);
  outline: none;
}

.contact-switchboard-email span {
  font-family: var(--font-portfolio);
  font-size: 0.74em;
  font-weight: 400;
}

.contact-switchboard-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  color: var(--theme-black);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.contact-switchboard-panel {
  align-self: stretch;
  padding: 12px;
  background: var(--theme-black);
  color: var(--theme-white);
  opacity: 0;
  transform: translate3d(clamp(80px, 12vw, 230px), clamp(-180px, -10vw, -70px), 0) scale(0.72);
  transform-origin: top right;
  will-change: clip-path, opacity, transform;
  clip-path: inset(0 0 100% 100%);
}

.contact-page.is-switchboard-visible .contact-switchboard-panel {
  animation: contact-switchboard-enter 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.contact-switchboard-panel > header {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px 22px;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-switchboard-panel nav {
  display: grid;
  gap: 6px;
}

.contact-switchboard-panel nav > a {
  display: grid;
  min-height: 132px;
  grid-template-columns: 72px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 18px 22px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--theme-white);
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
}

.contact-switchboard-panel nav > a.is-primary {
  background: var(--blue);
  color: var(--theme-black);
}

.contact-switchboard-panel nav > a:hover,
.contact-switchboard-panel nav > a:focus-visible {
  background: var(--acid);
  color: var(--theme-black);
  outline: none;
  transform: translateX(-5px);
}

.contact-switchboard-panel nav > a > span:first-child {
  align-self: start;
  padding-top: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
}

.contact-switchboard-route {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2px 10px;
  align-items: center;
}

.contact-switchboard-route svg {
  grid-row: 1 / 3;
}

.contact-switchboard-route strong {
  font-family: var(--font-heading);
  font-size: clamp(38px, 3.4vw, 58px);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.8;
  text-transform: uppercase;
}

.contact-switchboard-route small {
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.contact-switchboard-panel nav > a > b {
  font-size: 52px;
  font-weight: 300;
  line-height: 1;
}

.contact-switchboard-status {
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  padding: 24px;
  background: var(--acid);
  color: var(--theme-black);
}

.contact-switchboard-status > span,
.contact-switchboard-status small {
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-switchboard-status > span {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-switchboard-status i {
  width: 10px;
  height: 10px;
  border: 1px solid currentColor;
  border-radius: 50%;
  background: var(--blue);
}

.contact-switchboard-status strong {
  margin: 18px 0 12px;
  font-family: var(--font-heading);
  font-size: clamp(34px, 3vw, 52px);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.82;
  text-transform: uppercase;
}

@keyframes contact-switchboard-enter {
  0% {
    opacity: 0;
    transform: translate3d(clamp(80px, 12vw, 230px), clamp(-180px, -10vw, -70px), 0) scale(0.72);
    clip-path: inset(0 0 100% 100%);
  }

  22% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    clip-path: inset(0);
  }
}

@keyframes contact-title-enter-left {
  from {
    opacity: 0;
    transform: translate3d(-16%, 0, 0) skewX(-7deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) skewX(0);
  }
}

@keyframes contact-title-enter-right {
  from {
    opacity: 0;
    transform: translate3d(16%, 0, 0) skewX(7deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) skewX(0);
  }
}

@keyframes contact-title-move-pop {
  0% {
    filter: brightness(1);
    transform: translateY(0) scale(1);
  }

  45% {
    filter: brightness(1.18) drop-shadow(0 0 18px color-mix(in srgb, var(--acid) 55%, transparent));
    transform: translateY(-0.05em) scale(1.045);
  }

  100% {
    filter: brightness(1);
    transform: translateY(0) scale(1);
  }
}

@keyframes contact-title-underline {
  to {
    transform: scaleX(1);
  }
}

.contact-brief-guide {
  padding: clamp(42px, 6vw, 86px) 0 10px;
}

.contact-brief-guide > header {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 30px;
}

.contact-brief-guide > header h2 {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-brief-items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) 1.32fr;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-brief-items article,
.contact-brief-items > a {
  display: flex;
  min-height: 180px;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  color: var(--ink);
  text-decoration: none;
}

.contact-brief-items article + article,
.contact-brief-items > a {
  border-left: 1px solid var(--line);
}

.contact-brief-items article > span,
.contact-brief-items article > p,
.contact-brief-items > a small {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.45;
  text-transform: uppercase;
}

.contact-brief-items article > strong,
.contact-brief-items > a strong {
  font-family: var(--font-heading);
  font-size: clamp(34px, 3vw, 50px);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.88;
  text-transform: uppercase;
}

.contact-brief-items article > p {
  max-width: 19ch;
}

.contact-brief-items > a {
  background: color-mix(in srgb, var(--surface) 94%, var(--blue));
  transition: background 160ms ease;
}

.contact-brief-items > a:hover,
.contact-brief-items > a:focus-visible {
  background: var(--acid);
  outline: none;
}

@media (max-width: 1180px) {
  .contact-switchboard-stage {
    grid-template-columns: minmax(0, 1fr) minmax(350px, 0.8fr);
  }

  .contact-switchboard-intro h1 {
    font-size: clamp(82px, 10.5vw, 140px);
  }

  .contact-switchboard-panel nav > a {
    min-height: 118px;
    grid-template-columns: 58px minmax(0, 1fr) auto;
    padding: 16px;
  }

  .contact-brief-items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-brief-items > a {
    grid-column: 1 / -1;
    min-height: 150px;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .contact-brief-items article:nth-child(3) {
    border-left: 0;
    border-top: 1px solid var(--line);
  }

  .contact-brief-items article:nth-child(4) {
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 820px) {
  .contact-switchboard-stage {
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 30px;
    padding-top: 24px;
  }

  .contact-switchboard-intro h1 {
    margin: 34px 0 48px;
    font-size: clamp(68px, 22vw, 126px);
  }

  .contact-switchboard-email {
    overflow-wrap: anywhere;
    font-size: clamp(25px, 7vw, 48px);
  }

  .contact-switchboard-panel {
    margin: 0 -20px;
  }

  .contact-switchboard-route strong {
    font-size: clamp(40px, 12vw, 60px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-switchboard-panel,
  .contact-page.is-switchboard-visible .contact-switchboard-panel,
  .contact-switchboard-intro h1 span,
  .contact-page.is-switchboard-visible .contact-switchboard-intro h1 span,
  .contact-page.is-switchboard-visible .contact-switchboard-intro h1 em {
    opacity: 1;
    transform: none;
    animation: none;
    clip-path: none;
  }

  .contact-switchboard-intro h1 em::after,
  .contact-page.is-switchboard-visible .contact-switchboard-intro h1 em::after {
    transform: scaleX(1);
    animation: none;
  }
}

@media (max-width: 560px) {
  .contact-switchboard-intro h1 span {
    white-space: normal;
  }

  .contact-switchboard-panel nav > a {
    min-height: 112px;
    grid-template-columns: 44px minmax(0, 1fr) 36px;
    gap: 8px;
    padding: 14px;
  }

  .contact-switchboard-route strong {
    font-size: clamp(34px, 11vw, 52px);
  }

  .contact-switchboard-panel nav > a > b {
    font-size: 38px;
  }

  .contact-brief-items {
    grid-template-columns: 1fr;
  }

  .contact-brief-items article,
  .contact-brief-items > a {
    min-height: 150px;
    border-top: 1px solid var(--line);
    border-left: 0 !important;
  }

  .contact-brief-items article:first-child {
    border-top: 0;
  }
}

/* src/Component/BusinessServices/BusinessServices.css */
.services-page {
  min-height: 100svh;
  padding: clamp(120px, 15vh, 170px) var(--page-gutter) 130px;
  background-color: var(--cream);
  background-image: var(--site-grid);
  background-position: var(--site-grid-position);
  background-repeat: repeat;
  background-size: var(--site-grid-size);
  color: var(--ink);
  font-family: var(--font-portfolio);
}

.services-intro {
  display: grid;
  grid-template-columns: 0.6fr 1.5fr;
  gap: 30px;
  max-width: 1450px;
  margin: 0 auto clamp(70px, 12vh, 130px);
}

.services-intro > span {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.services-intro h1 {
  margin: 0;
  font-size: clamp(72px, 10vw, 160px);
  font-weight: 500;
  letter-spacing: -0.075em;
  line-height: 0.78;
}

.services-intro h1 em {
  color: var(--blue);
  font-style: normal;
}

.services-intro p {
  grid-column: 2;
  max-width: 700px;
  margin: 8px 0 0;
  color: var(--muted);
  font-size: clamp(18px, 1.45vw, 24px);
  line-height: 1.5;
}

.services-deck-section {
  position: relative;
  height: 632svh;
  max-width: 1120px;
  margin: 0 auto;
  scroll-margin-block: 100px;
}

.services-deck-sticky {
  position: sticky;
  top: 76px;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: calc(100svh - 94px);
  min-height: 610px;
  padding: 10px 0 20px;
}

.services-deck-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 22px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.services-deck-heading p {
  display: flex;
  gap: 8px;
  margin: 0;
}

.services-deck-heading p span {
  opacity: 0.48;
}

.services-card-stack {
  position: relative;
  min-height: 0;
  isolation: isolate;
}

.service-card {
  position: absolute;
  top: 0;
  left: 50%;
  display: grid;
  grid-template-columns: minmax(230px, 0.84fr) minmax(320px, 1.16fr);
  width: min(900px, calc(100% - 90px));
  min-height: clamp(370px, 42vw, 500px);
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--ink) 20%, transparent);
  border-radius: clamp(16px, 2vw, 26px);
  background: var(--panel);
  box-shadow: 0 24px 65px rgba(10, 18, 28, 0.2);
  color: var(--ink);
  cursor: default;
  transform-origin: 50% 85%;
  translate: -50% 0;
  user-select: none;
  will-change: transform;
}

.service-card.is-active {
  cursor: grab;
}

.service-card:not(.is-active) {
  pointer-events: none;
}

.service-card[data-tone="1"] {
  background: var(--blue);
  color: var(--theme-black);
}

.service-card[data-tone="2"] {
  background: var(--theme-black);
  color: var(--theme-white);
}

.service-card[data-tone="3"] {
  background: var(--acid);
  color: var(--theme-black);
}

.service-card-media {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  background: color-mix(in srgb, currentColor 10%, transparent);
}

.service-card-media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(21, 185, 244, 0.18), rgba(192, 254, 4, 0.14));
  content: "";
  mix-blend-mode: color;
  pointer-events: none;
}

.service-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.74) contrast(0.96);
  transition:
    filter 400ms ease,
    transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.service-card:hover img,
.service-card:focus-within img {
  filter: saturate(1) contrast(1);
  transform: scale(1.04);
}

.service-card-media > span {
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 2;
  width: fit-content;
  padding: 7px 10px;
  background: var(--acid);
  color: var(--theme-black);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
}

.service-card-copy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(26px, 3.4vw, 48px);
}

.service-card-meta {
  display: flex;
  justify-content: space-between;
  color: currentColor;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.service-card-meta span:last-child {
  color: var(--acid);
}

.service-card[data-tone="1"] .service-card-meta span:last-child,
.service-card[data-tone="3"] .service-card-meta span:last-child {
  color: var(--theme-black);
}

.service-card h2 {
  max-width: 560px;
  margin: 0 0 18px;
  font-size: clamp(38px, 4.6vw, 68px);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.92;
}

.service-card p {
  max-width: 510px;
  margin: 0;
  color: color-mix(in srgb, currentColor 68%, transparent);
  font-family: system-ui, sans-serif;
  font-size: clamp(13px, 1.05vw, 16px);
  line-height: 1.55;
}

.service-card-link {
  display: flex;
  width: fit-content;
  gap: 20px;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid currentColor;
  color: currentColor;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  transition: 180ms ease;
}

.service-card-link:hover,
.service-card-link:focus-visible,
.service-card-link.active {
  color: var(--acid);
  outline: none;
  transform: translateX(5px);
}

.service-card[data-tone="1"] .service-card-link:hover,
.service-card[data-tone="1"] .service-card-link:focus-visible,
.service-card[data-tone="3"] .service-card-link:hover,
.service-card[data-tone="3"] .service-card-link:focus-visible {
  color: var(--theme-black);
}

.services-deck-controls {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
  width: min(900px, calc(100% - 90px));
  margin: 4px auto 0;
}

.services-deck-controls p {
  overflow: hidden;
  margin: 0;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.services-deck-controls button {
  display: grid;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--panel);
  color: var(--ink);
  cursor: pointer;
  font-size: 18px;
  transition: 180ms ease;
  place-items: center;
}

.services-deck-controls button:hover,
.services-deck-controls button:focus-visible {
  border-color: var(--acid);
  background: var(--acid);
  color: var(--theme-black);
  outline: none;
  transform: scale(1.06);
}

.services-deck-controls button:disabled {
  border-color: var(--line);
  background: transparent;
  color: var(--muted);
  cursor: default;
  opacity: 0.35;
  transform: none;
}

@media (max-width: 820px) {
  .services-page {
    padding: 110px 20px 120px;
  }

  .services-intro {
    display: block;
  }

  .services-intro h1 {
    margin-top: 28px;
    font-size: clamp(68px, 20vw, 112px);
  }

  .services-intro p {
    margin-top: 30px;
  }

  .services-deck-heading p span {
    display: none;
  }

  .services-deck-section {
    height: 730svh;
  }

  .services-deck-sticky {
    top: 72px;
    height: calc(100svh - 82px);
    min-height: 640px;
    padding-bottom: 12px;
  }

  .services-card-stack {
    min-height: 550px;
  }

  .service-card {
    grid-template-columns: 1fr;
    grid-template-rows: 210px 1fr;
    width: calc(100% - 24px);
    min-height: 540px;
    border-radius: 18px;
  }

  .service-card-media {
    min-height: 210px;
  }

  .service-card-copy {
    min-height: 330px;
    padding: 24px;
  }

  .service-card h2 {
    margin-bottom: 12px;
    font-size: clamp(36px, 11vw, 55px);
  }

  .services-deck-controls {
    width: calc(100% - 24px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card img,
  .service-card-link,
  .services-deck-controls button {
    transition: none;
  }

  .service-card.is-active {
    cursor: default;
  }
}

/* src/Component/ScrollTransition/ScrollTransition.css */
.scroll-transition {
  position: fixed;
  z-index: 175;
  inset: 0;
  overflow: hidden;
  background: var(--theme-black);
  color: var(--theme-white);
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  animation: scroll-transition-stage 1.55s linear both;
}

.scroll-transition-rays {
  position: absolute;
  inset: 0;
}

.scroll-transition-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--length);
  height: clamp(2px, 0.22vw, 4px);
  border-radius: 999px;
  background: var(--color);
  box-shadow: 0 0 7px color-mix(in srgb, var(--color) 50%, transparent);
  opacity: 0;
  transform: rotate(var(--angle)) translateX(var(--start)) scaleX(0.04);
  transform-origin: left center;
  animation: scroll-transition-ray 1.35s var(--delay) cubic-bezier(0.16, 0.62, 0.24, 1) both;
}

.scroll-transition.is-up .scroll-transition-ray {
  animation-direction: reverse;
}

.scroll-transition p {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(88vw, 1000px);
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(52px, 7vw, 112px);
  font-weight: 900;
  letter-spacing: -0.065em;
  line-height: 0.84;
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  animation: scroll-transition-copy 1.55s ease both;
}

.scroll-transition p span {
  display: block;
  margin-bottom: 12px;
  color: var(--acid);
  font-family: var(--font-mono);
  font-size: clamp(9px, 0.8vw, 12px);
  font-weight: 700;
  letter-spacing: 0.16em;
}

@keyframes scroll-transition-stage {
  0% {
    visibility: visible;
    opacity: 0;
  }

  12%,
  76% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
}

@keyframes scroll-transition-ray {
  0% {
    opacity: 0;
    transform: rotate(var(--angle)) translateX(0) scaleX(0.03);
  }

  18% {
    opacity: 1;
  }

  68% {
    opacity: 1;
    transform: rotate(var(--angle)) translateX(var(--start)) scaleX(0.85);
  }

  100% {
    opacity: 0;
    transform: rotate(var(--angle)) translateX(96vw) scaleX(2.2);
  }
}

@keyframes scroll-transition-copy {
  0%,
  13% {
    opacity: 0;
    transform: translate(-50%, -43%) scale(0.92);
  }

  29%,
  62% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  83%,
  100% {
    opacity: 0;
    transform: translate(-50%, -54%) scale(1.12);
  }
}

@media (max-width: 820px) {
  .scroll-transition p {
    font-size: clamp(42px, 13vw, 72px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-ruler-progress,
  .scroll-ruler-track::after {
    transition: none;
  }

  .scroll-transition {
    display: none;
  }
}

/* Responsive hardening for tablets, compact phones, and short landscape screens */
main,
section,
article,
nav,
header,
footer,
div {
  min-width: 0;
}

.pitch-title-line,
.about-project h3,
.service-card h2,
.contact-switchboard-route strong {
  overflow-wrap: anywhere;
}

@media (max-width: 1100px) and (min-width: 821px) {
  :root {
    --page-gutter: clamp(26px, 3vw, 36px);
  }

  .studio-header {
    min-height: 68px;
  }

  .studio-nav {
    gap: clamp(14px, 2vw, 24px);
  }

  .studio-nav > a,
  .studio-nav-item > a,
  .studio-theme {
    font-size: 9px;
  }

  .about-page {
    --timeline-wheel-size: 600px;
    grid-template-columns: clamp(300px, 34vw, 380px) minmax(0, 1fr);
  }

  .about-timeline-status {
    right: 16px;
  }

  .about-project {
    padding-left: clamp(20px, 3vw, 42px);
  }

  .pitch-process-card-body {
    grid-template-columns: 72px minmax(0, 1fr) minmax(170px, 0.42fr) 54px;
  }

  .pitch-process-card h2 {
    font-size: clamp(42px, 6.5vw, 76px);
  }

  .contact-switchboard-stage {
    grid-template-columns: minmax(0, 1.25fr) minmax(340px, 0.85fr);
    gap: 28px;
  }

  .contact-switchboard-intro h1 {
    font-size: clamp(76px, 10.2vw, 112px);
  }

  .contact-switchboard-panel nav > a {
    grid-template-columns: 48px minmax(0, 1fr) 34px;
  }

  .contact-switchboard-route strong {
    font-size: clamp(34px, 3.8vw, 46px);
  }
}

@media (max-width: 820px) {
  :root {
    --page-gutter: 20px;
  }

  body.studio-menu-open {
    overflow: hidden;
    overscroll-behavior: none;
  }

  .studio-nav {
    height: 100dvh;
    min-height: 100svh;
    padding:
      calc(var(--scroll-ruler-height) + 78px + env(safe-area-inset-top))
      max(24px, env(safe-area-inset-right))
      max(40px, env(safe-area-inset-bottom))
      max(24px, env(safe-area-inset-left));
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .studio-nav > a,
  .studio-nav-item > a,
  .studio-theme {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
  }

  .studio-nav > a.active,
  .studio-nav-item > a.active {
    color: var(--ink);
  }

  .studio-chrome {
    display: none;
  }

  .home-hero {
    min-height: 100svh;
    padding-top: calc(var(--scroll-ruler-height) + 104px);
    padding-bottom: 112px;
  }

  .home-side-note {
    top: calc(var(--scroll-ruler-height) + 78px);
  }

  .home-hero h1 {
    width: 100%;
    max-width: 680px;
    line-height: 0.9;
  }

  .home-scroll-cue {
    bottom: 56px;
    width: max-content;
    max-width: calc(100% - 40px);
  }

  .about-page {
    min-height: 400dvh;
  }

  .about-project {
    min-height: 100dvh;
  }

  .about-timeline-sticky {
    height: 100dvh;
  }

  .pitch-title-line {
    white-space: normal;
  }

  .pitch-hero h1 {
    line-height: 0.84;
  }

  .process-animation {
    width: min(100%, 620px);
    margin-inline: auto;
  }

  .pitch-process-card-rail {
    overflow: hidden;
  }

  .contact-switchboard-meta {
    gap: 18px;
  }

  .services-deck-sticky {
    height: calc(100svh - 82px);
    min-height: 520px;
  }

  .services-card-stack {
    min-height: 430px;
  }

  .service-card {
    grid-template-rows: 150px minmax(0, 1fr);
    min-height: 420px;
  }

  .service-card-media {
    min-height: 150px;
  }

  .service-card-copy {
    min-height: 270px;
  }
}

@media (max-width: 560px) {
  :root {
    --page-gutter: 16px;
    --site-grid-position: 16px 0;
    --site-grid-size: max(150px, 50vw) min(260px, 32vh);
  }

  .studio-header {
    padding-inline: 16px;
  }

  .studio-logo {
    font-size: 17px;
  }

  .studio-nav {
    padding-right: max(20px, env(safe-area-inset-right));
    padding-left: max(20px, env(safe-area-inset-left));
  }

  .studio-nav > a,
  .studio-nav-item > a,
  .studio-theme {
    font-size: clamp(19px, 5vw, 22px);
  }

  .home-hero {
    padding-right: 16px;
    padding-left: 16px;
  }

  .home-side-note-left {
    left: 16px;
  }

  .home-side-note-right {
    display: none;
  }

  .home-hero h1 {
    font-size: clamp(38px, 12vw, 60px);
    letter-spacing: -0.055em;
  }

  .home-hero-copy > p {
    width: 100%;
    max-width: 38rem;
  }

  .home-sticker {
    opacity: 0.72;
  }

  .home-sticker-code {
    width: 58px;
    border-width: 3px;
  }

  .home-sticker-star {
    left: 8%;
    font-size: 62px;
    -webkit-text-stroke-width: 8px;
  }

  .home-sticker-smile {
    width: 54px;
    font-size: 26px;
  }

  .home-sticker-badge {
    width: 64px;
    font-size: 8px;
  }

  .home-manifesto,
  .home-work,
  .info-page,
  .services-page {
    padding-right: 16px;
    padding-left: 16px;
  }

  .home-manifesto h2,
  .home-section-heading h2 {
    font-size: clamp(42px, 14vw, 68px);
  }

  .about-page {
    --timeline-wheel-size: 470px;
  }

  .about-timeline-status {
    top: 90px;
    right: 16px;
    left: 16px;
    justify-content: space-between;
  }

  .about-project {
    padding-right: 16px;
    padding-bottom: 56px;
    padding-left: 16px;
  }

  .about-project h3 {
    font-size: clamp(34px, 10.5vw, 52px);
  }

  .pitch-process {
    width: calc(100% + 32px);
    margin-inline: -16px;
  }

  .pitch-process-sticky {
    padding: 0;
  }

  .pitch-process-heading {
    top: 34px;
    right: 16px;
    left: 16px;
  }

  .pitch-process-card {
    height: 24%;
  }

  .pitch-process-card-body {
    grid-template-columns: 34px minmax(0, 1fr) 30px;
    gap: 10px;
    padding: 8px 12px;
  }

  .pitch-process-card-number {
    font-size: 28px;
  }

  .pitch-process-card h2 {
    font-size: clamp(28px, 10.5vw, 46px);
  }

  .pitch-process-card p {
    grid-column: 1 / -1;
    font-size: 11px;
  }

  .pitch-process-card-arrow {
    font-size: 30px;
  }

  .pitch-process-deck {
    inset: 96px 16px 28px;
  }

  .pitch-process-intro {
    left: 16px;
    width: calc(100% - 32px);
  }

  .pitch-process.is-reduced-motion .pitch-process-sticky {
    padding: 96px 16px 28px;
  }

  .pitch-process.is-reduced-motion .pitch-process-card {
    min-height: 174px;
  }

  .pitch-process.is-reduced-motion .pitch-process-card-body {
    min-height: 150px;
  }

  .pitch-note {
    gap: 8px;
  }

  .pitch-note p {
    padding: 8px 10px;
    font-size: 9px;
  }

  .contact-switchboard-panel {
    margin-right: -16px;
    margin-left: -16px;
    padding: 8px;
  }

  .contact-switchboard-meta {
    flex-direction: column;
    gap: 4px;
  }

  .contact-switchboard-panel > header {
    padding: 10px 8px 16px;
  }

  .contact-switchboard-panel nav > a {
    grid-template-columns: 38px minmax(0, 1fr) 28px;
    padding: 12px 10px;
  }

  .contact-switchboard-route {
    gap: 2px 7px;
  }

  .contact-switchboard-route svg {
    width: 24px;
    height: 24px;
  }

  .contact-switchboard-route strong {
    font-size: clamp(30px, 10vw, 44px);
  }

  .contact-switchboard-status {
    min-height: 132px;
    padding: 20px;
  }

  .contact-switchboard-status strong {
    font-size: clamp(30px, 9.5vw, 42px);
  }

  .contact-brief-guide {
    padding-top: 54px;
  }

  .services-page {
    padding-top: 106px;
  }

  .services-intro h1 {
    font-size: clamp(56px, 19vw, 92px);
  }

  .service-card {
    width: 100%;
    grid-template-rows: 136px minmax(0, 1fr);
    min-height: 410px;
  }

  .service-card-media {
    min-height: 136px;
  }

  .service-card-media > span {
    top: 12px;
    left: 12px;
  }

  .service-card-copy {
    min-height: 274px;
    padding: 20px;
  }

  .service-card h2 {
    font-size: clamp(32px, 10vw, 46px);
  }

  .services-deck-controls {
    width: 100%;
    gap: 12px;
  }

  .services-deck-controls button {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 380px) {
  .scroll-ruler {
    grid-template-columns: 88px minmax(0, 1fr);
  }

  .scroll-ruler-brand {
    padding-inline: 8px;
    font-size: 9px;
  }

  .scroll-ruler-labels span:nth-child(even) {
    display: none;
  }

  .home-hero h1 {
    font-size: clamp(35px, 11.5vw, 46px);
  }

  .home-hero-copy > p {
    font-size: 12px;
  }

  .contact-switchboard-intro h1 {
    font-size: clamp(58px, 20vw, 76px);
  }

  .contact-switchboard-panel nav > a {
    grid-template-columns: 32px minmax(0, 1fr) 24px;
    min-height: 102px;
    gap: 5px;
  }

  .contact-switchboard-route small {
    display: none;
  }

  .contact-switchboard-panel nav > a > b {
    font-size: 30px;
  }
}

@media (max-width: 820px) and (max-height: 620px) {
  .home-hero {
    min-height: 620px;
    padding-top: 108px;
    padding-bottom: 54px;
  }

  .home-side-note,
  .home-sticker,
  .home-scroll-cue {
    display: none;
  }

  .about-timeline-sticky {
    min-height: 0;
  }

  .about-timeline-wheel {
    top: 25%;
  }

  .about-project {
    padding-top: 38svh;
  }

  .services-deck-sticky {
    top: 44px;
    height: calc(100svh - 50px);
    min-height: 0;
    padding-block: 4px;
  }

  .services-deck-heading {
    margin-bottom: 5px;
  }

  .services-card-stack {
    min-height: 0;
  }

  .service-card {
    height: 100%;
    min-height: 0;
    grid-template-columns: minmax(120px, 0.72fr) minmax(0, 1.28fr);
    grid-template-rows: 1fr;
  }

  .service-card-media {
    min-height: 0;
  }

  .service-card-copy {
    min-height: 0;
    padding: 14px 18px;
  }

  .service-card h2 {
    margin-bottom: 6px;
    font-size: clamp(25px, 6vw, 38px);
  }

  .service-card p {
    font-size: 11px;
    line-height: 1.35;
  }

  .services-deck-controls {
    margin-top: 3px;
  }

  .services-deck-controls button {
    width: 36px;
    height: 36px;
  }
}

@media (hover: none), (pointer: coarse) {
  .studio-pill,
  .about-project-link,
  .service-card-link,
  .contact-switchboard-email {
    min-height: 44px;
  }

  .about-project-services a {
    min-height: 34px;
    align-items: center;
  }

  .service-card:hover img,
  .contact-switchboard-panel nav > a:hover {
    transform: none;
  }
}
`
