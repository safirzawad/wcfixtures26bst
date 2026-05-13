# 🏆 FIFA World Cup 2026 — BST Fixture Tracker

A fully static, self-contained website tracking all **104 FIFA World Cup 2026 matches** with times displayed in **Bangladesh Standard Time (BST / UTC+6)**.

## ✨ Features

- **All 12 groups** with live standings (P/W/D/L/GF/GA/Pts)
- **Scoreboard** with match results, live scores & upcoming fixtures
- **Knockout bracket** — Round of 32 through to the Final, showing `Winner Group A vs Winner Group B` style placeholders that update automatically
- **Country flags** displayed via emoji next to every team name
- **Live score fetching** from the football-data.org public API (auto-refreshes every 60 seconds)
- **Light & Dark mode** toggle (preference saved in localStorage)
- **Fully responsive** — works on mobile, tablet and desktop
- **No build tools required** — pure HTML + CSS + JS, open `index.html` directly

## 📁 File Structure

```
wc2026/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles (light + dark theme)
├── js/
│   └── app.js          # App logic, rendering, live score fetching
├── data/
│   └── fixtures.js     # All 48 teams, 12 groups, 72 group matches + knockout fixtures
└── README.md
```

## 🚀 Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://<username>.github.io/<repo>/`

## 🌐 Live Score API

Scores are fetched from the [football-data.org](https://www.football-data.org/) free public API:

```
GET https://api.football-data.org/v4/competitions/WC/matches?status=LIVE,FINISHED
```

- No API key required for basic access (rate-limited to 10 req/min)
- If the API is unavailable, the site gracefully falls back to static fixture data
- Auto-refreshes every **60 seconds**
- Click **⟳ Refresh** to manually fetch latest scores

## 🕐 Time Zone

All kick-off times are displayed in **Bangladesh Standard Time (BST = UTC+6)**. The conversion is handled client-side — no server needed.

## 📅 Tournament Dates

- **Group Stage:** 11 June – 27 June 2026
- **Round of 32:** 28 June – 4 July 2026
- **Round of 16:** 5 – 8 July 2026
- **Quarter-finals:** 11 – 12 July 2026
- **Semi-finals:** 15 – 16 July 2026
- **Third Place Play-off:** 18 July 2026
- **Final:** 19 July 2026 — MetLife Stadium, New Jersey

## 🏟️ Host Countries

🇺🇸 United States · 🇲🇽 Mexico · 🇨🇦 Canada

---

*Data accurate as of May 2026. Scores update automatically during matches.*
