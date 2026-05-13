// ==========================================================
// FIFA WORLD CUP 2026 — MAIN APP
// Handles: rendering, live scores, BST conversion, theming
// ==========================================================

// ---- CONSTANTS ----
const BST_OFFSET = 6 * 60; // UTC+6 in minutes
const REFRESH_INTERVAL = 60 * 1000; // 60 seconds

// ---- STATE ----
let currentFilter = "all";
let currentGroupFilter = "all";
let liveScores = {}; // { matchId: { homeScore, awayScore, status } }

// ---- UTILITIES ----
function utcToBST(utcString) {
  const d = new Date(utcString);
  const bst = new Date(d.getTime() + BST_OFFSET * 60 * 1000);
  return bst;
}

function formatBSTDate(utcString) {
  const d = utcToBST(utcString);
  return d.toLocaleDateString("en-BD", {
    weekday: "short", day: "numeric", month: "long", year: "numeric",
    timeZone: "UTC"
  });
}

function formatBSTTime(utcString) {
  const d = utcToBST(utcString);
  return d.toLocaleTimeString("en-BD", {
    hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "UTC"
  }) + " BST";
}

function formatBSTFull(utcString) {
  const d = utcToBST(utcString);
  return d.toLocaleString("en-BD", {
    weekday: "short", day: "numeric", month: "short",
    hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "UTC"
  }) + " BST";
}

function getTeamInfo(name) {
  return WC2026.teams[name] || { flag: "🏳️", short: name ? name.slice(0, 3).toUpperCase() : "TBD" };
}

function getMatchStatus(match) {
  if (liveScores[match.id]) return liveScores[match.id].status;
  const now = Date.now();
  const start = new Date(match.utcTime).getTime();
  const end = start + 105 * 60 * 1000; // ~105 min
  if (now > end) return "finished";
  if (now >= start && now <= end) return "live";
  return "upcoming";
}

function getScore(match) {
  if (liveScores[match.id]) {
    return { home: liveScores[match.id].homeScore, away: liveScores[match.id].awayScore };
  }
  return { home: match.homeScore, away: match.awayScore };
}

// ---- THEME TOGGLE ----
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("wc2026-theme") || "light";
html.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "☀️ Light" : "🌙 Dark";

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("wc2026-theme", next);
  themeToggle.textContent = next === "dark" ? "☀️ Light" : "🌙 Dark";
});

// ---- TAB NAVIGATION ----
document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-section").forEach(s => s.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
  });
});

// ---- RENDER GROUPS ----
function computeGroupStandings(groupKey) {
  const teams = WC2026.groups[groupKey];
  const standings = {};
  teams.forEach(t => {
    standings[t] = { team: t, mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
  });

  const matches = WC2026.groupMatches.filter(m => m.group === groupKey);
  matches.forEach(m => {
    const score = getScore(m);
    if (score.home === null || score.away === null) return;
    const h = score.home, a = score.away;
    standings[m.home].mp++; standings[m.away].mp++;
    standings[m.home].gf += h; standings[m.home].ga += a;
    standings[m.away].gf += a; standings[m.away].ga += h;
    standings[m.home].gd = standings[m.home].gf - standings[m.home].ga;
    standings[m.away].gd = standings[m.away].gf - standings[m.away].ga;
    if (h > a) {
      standings[m.home].w++; standings[m.home].pts += 3;
      standings[m.away].l++;
    } else if (h < a) {
      standings[m.away].w++; standings[m.away].pts += 3;
      standings[m.home].l++;
    } else {
      standings[m.home].d++; standings[m.home].pts++;
      standings[m.away].d++; standings[m.away].pts++;
    }
  });

  return Object.values(standings).sort((a, b) =>
    b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team)
  );
}

function renderGroups() {
  const grid = document.getElementById("groupsGrid");
  grid.innerHTML = "";

  Object.keys(WC2026.groups).forEach(groupKey => {
    const standings = computeGroupStandings(groupKey);
    const card = document.createElement("div");
    card.className = "group-card";

    const rows = standings.map((s, i) => {
      const info = getTeamInfo(s.team);
      const rankClass = `rank-${i + 1}`;
      const qualifiedClass = i < 2 ? "qualified" : "";
      return `
        <tr class="${qualifiedClass}">
          <td>
            <div class="team-cell">
              <span class="rank-indicator ${rankClass}">${i + 1}</span>
              <span class="team-flag">${info.flag}</span>
              <span>${s.team}</span>
            </div>
          </td>
          <td>${s.mp}</td>
          <td>${s.w}</td>
          <td>${s.d}</td>
          <td>${s.l}</td>
          <td>${s.gf}:${s.ga}</td>
          <td class="pts-cell">${s.pts}</td>
        </tr>`;
    }).join("");

    card.innerHTML = `
      <div class="group-card-header">
        <span class="group-label">Group ${groupKey}</span>
        <span class="group-badge">3 MATCHES EACH</span>
      </div>
      <table class="group-standings">
        <thead>
          <tr>
            <th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>G</th><th>Pts</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;

    grid.appendChild(card);
  });
}

// ---- RENDER SCOREBOARD ----
function renderScoreboard() {
  const container = document.getElementById("matchesContainer");
  const allMatches = [...WC2026.groupMatches];

  let filtered = allMatches.filter(m => {
    const status = getMatchStatus(m);
    const group = m.group;
    const statusOk = currentFilter === "all" || status === currentFilter;
    const groupOk = currentGroupFilter === "all" || group === currentGroupFilter;
    return statusOk && groupOk;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="loading-placeholder">No matches found for this filter.</div>`;
    return;
  }

  // Group by date
  const byDate = {};
  filtered.forEach(m => {
    const dateKey = formatBSTDate(m.utcTime);
    if (!byDate[dateKey]) byDate[dateKey] = [];
    byDate[dateKey].push(m);
  });

  container.innerHTML = Object.entries(byDate).map(([date, matches]) => {
    const cards = matches.map(m => buildMatchCard(m)).join("");
    return `<div class="match-date-group">
      <div class="match-date-label">${date}</div>
      ${cards}
    </div>`;
  }).join("");
}

function buildMatchCard(m) {
  const hInfo = getTeamInfo(m.home);
  const aInfo = getTeamInfo(m.away);
  const status = getMatchStatus(m);
  const score = getScore(m);

  const scoreDisplay = (status === "finished" || status === "live")
    ? `${score.home ?? 0} – ${score.away ?? 0}`
    : `– vs –`;

  const statusHtml = status === "live"
    ? `<span class="match-status live"><span class="live-dot"></span>LIVE</span>`
    : status === "finished"
    ? `<span class="match-status finished">FT</span>`
    : `<span class="match-status upcoming">${formatBSTTime(m.utcTime)}</span>`;

  return `
    <div class="match-card">
      <div class="match-team home">
        <span class="match-team-flag">${hInfo.flag}</span>
        <span class="match-team-name">${m.home}</span>
      </div>
      <div class="match-score-block">
        <span class="match-group-badge">Group ${m.group}</span>
        <span class="match-score">${scoreDisplay}</span>
        ${statusHtml}
        <span class="match-meta">${m.venue.split(",")[0]}</span>
      </div>
      <div class="match-team away">
        <span class="match-team-flag">${aInfo.flag}</span>
        <span class="match-team-name">${m.away}</span>
      </div>
    </div>`;
}

// ---- RENDER KNOCKOUT ----
function renderKnockout() {
  const wrapper = document.getElementById("bracketWrapper");
  const rounds = ["Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Third Place", "Final"];

  wrapper.innerHTML = rounds.map(round => {
    const matches = WC2026.knockoutMatches.filter(m => m.round === round);
    if (!matches.length) return "";

    const cards = matches.map(m => buildKOCard(m)).join("");
    return `
      <div class="bracket-stage">
        <div class="bracket-stage-title">${round}</div>
        <div class="bracket-matches">${cards}</div>
      </div>`;
  }).join("");
}

function buildKOCard(m) {
  const score = getScore(m);
  const status = getMatchStatus(m);

  const homeTeam = m.home;
  const awayTeam = m.away;
  const homePlaceholder = m.homePlaceholder || "TBD";
  const awayPlaceholder = m.awayPlaceholder || "TBD";

  function teamRow(team, placeholder, scoreVal, side) {
    const info = team ? getTeamInfo(team) : null;
    const isWinner = status === "finished" && scoreVal !== null && scoreVal > (side === "home" ? score.away : score.home);
    return `
      <div class="ko-team">
        <div class="ko-team-info">
          ${info
            ? `<span class="ko-team-flag">${info.flag}</span><span>${team}</span>`
            : `<span class="ko-team-placeholder">${placeholder}</span>`}
        </div>
        ${scoreVal !== null ? `<span class="ko-team-score ${isWinner ? "winner" : ""}">${scoreVal}</span>` : ""}
      </div>`;
  }

  const statusHtml = status === "live"
    ? `<span style="color:#e63946;font-size:.65rem;font-weight:700">🔴 LIVE</span>`
    : status === "finished"
    ? `<span style="color:#2d6a4f;font-size:.65rem;font-weight:700">FT</span>`
    : `<span style="color:#7a9ab8;font-size:.68rem;font-family:'JetBrains Mono',monospace">${formatBSTFull(m.utcTime)}</span>`;

  return `
    <div class="ko-card">
      <div class="ko-card-header">
        <span class="ko-match-label">${m.matchLabel}</span>
        ${statusHtml}
      </div>
      ${teamRow(homeTeam, homePlaceholder, score.home, "home")}
      ${teamRow(awayTeam, awayPlaceholder, score.away, "away")}
      <div class="ko-venue">📍 ${m.venue}</div>
    </div>`;
}

// ---- FILTER BUTTONS ----
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderScoreboard();
  });
});

document.getElementById("groupFilter").addEventListener("change", e => {
  currentGroupFilter = e.target.value;
  renderScoreboard();
});

// ---- LIVE SCORE FETCHING ----
async function fetchLiveScores() {
  try {
    // We use the football-data.org free API (no key needed for basic data)
    // It returns ongoing/completed matches for the World Cup (competition code WC)
    const res = await fetch(
      "https://api.football-data.org/v4/competitions/WC/matches?status=LIVE,FINISHED",
      { headers: { "X-Auth-Token": "" } }
    );

    if (!res.ok) throw new Error("API unavailable");
    const data = await res.json();

    if (data.matches) {
      data.matches.forEach(apiMatch => {
        const matchId = findMatchId(apiMatch);
        if (!matchId) return;

        const s = apiMatch.score;
        const home = s.fullTime?.home ?? s.regularTime?.home ?? null;
        const away = s.fullTime?.away ?? s.regularTime?.away ?? null;
        const status = apiMatch.status === "IN_PLAY" || apiMatch.status === "PAUSED"
          ? "live"
          : apiMatch.status === "FINISHED" ? "finished" : "upcoming";

        liveScores[matchId] = { homeScore: home, awayScore: away, status };
      });
    }
  } catch (e) {
    // Silently fail — show static data
    console.warn("Live score fetch failed, showing static data:", e.message);
  }

  updateTimestamp();
  renderGroups();
  renderScoreboard();
  renderKnockout();
}

function findMatchId(apiMatch) {
  const homeUtf = normalise(apiMatch.homeTeam?.name || "");
  const awayUtf = normalise(apiMatch.awayTeam?.name || "");
  const apiDate = new Date(apiMatch.utcDate).toISOString().slice(0, 10);

  // Try group matches first
  for (const m of WC2026.groupMatches) {
    const mDate = new Date(m.utcTime).toISOString().slice(0, 10);
    if (mDate !== apiDate) continue;
    if (normalise(m.home) === homeUtf && normalise(m.away) === awayUtf) return m.id;
  }
  // Then knockout
  for (const m of WC2026.knockoutMatches) {
    if (!m.home) continue;
    const mDate = new Date(m.utcTime).toISOString().slice(0, 10);
    if (mDate !== apiDate) continue;
    if (normalise(m.home) === homeUtf && normalise(m.away) === awayUtf) return m.id;
  }
  return null;
}

function normalise(str) {
  return str.toLowerCase()
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ä/g, "a")
    .replace(/ç/g, "c").replace(/é/g, "e").replace(/[^a-z0-9]/g, "");
}

function updateTimestamp() {
  const now = new Date();
  const bst = new Date(now.getTime() + BST_OFFSET * 60 * 1000);
  const ts = bst.toLocaleTimeString("en-BD", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: true, timeZone: "UTC"
  });
  const el = document.getElementById("lastUpdated");
  const footer = document.getElementById("footerUpdate");
  if (el) el.textContent = `Updated ${ts} BST`;
  if (footer) footer.textContent = `Last updated: ${ts} BST`;
}

// ---- MANUAL REFRESH ----
document.getElementById("refreshBtn").addEventListener("click", () => {
  document.getElementById("refreshBtn").textContent = "⟳ Fetching...";
  fetchLiveScores().finally(() => {
    document.getElementById("refreshBtn").textContent = "⟳ Refresh";
  });
});

// ---- INIT ----
function init() {
  renderGroups();
  renderScoreboard();
  renderKnockout();
  updateTimestamp();
  fetchLiveScores();
  setInterval(fetchLiveScores, REFRESH_INTERVAL);
}

document.addEventListener("DOMContentLoaded", init);
