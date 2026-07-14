# Quaziko Games — quazikogames.com

Static site for Quaziko Games and Switch Ball Deluxe. No build step — plain HTML/CSS/JS.

## Structure

- `index.html` — home page (SBD hero, streaming, about)
- `switchballdeluxe/index.html` — full game page (features, gallery, Kickstarter/Next Fest dates)
- `css/style.css` — single shared stylesheet
- `js/main.js` — screenshot lightbox
- `assets/img/` — logos, capsules, screenshots (sourced from `C:\QuazikoGamesWebsite`)

## Local preview

```
python -m http.server 8420
```

Then open http://localhost:8420

## Deploy (planned)

Cloudflare Pages (or GitHub Pages) with `quazikogames.com` pointed at it via
Squarespace DNS. No server-side code required.
