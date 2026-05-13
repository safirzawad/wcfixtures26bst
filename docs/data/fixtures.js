// ==========================================================
// FIFA WORLD CUP 2026 — FIXTURE DATA
// All UTC times will be converted to BST (UTC+6) in app.js
// ==========================================================

const WC2026 = {

  // ---- TEAM DATA (flagcdn.com image URL + full name + short code) ----
  // Flag images served from https://flagcdn.com — free, reliable CDN
  // Format: https://flagcdn.com/w40/{iso2}.png  (40px wide)
  // Scotland & England use special GB subdivision codes via flagicons.lipis.dev
  teams: {
    "Mexico":             { flag: "mx", short: "MEX" },
    "South Africa":       { flag: "za", short: "RSA" },
    "South Korea":        { flag: "kr", short: "KOR" },
    "Czechia":            { flag: "cz", short: "CZE" },
    "Canada":             { flag: "ca", short: "CAN" },
    "Bosnia and Herzegovina": { flag: "ba", short: "BIH" },
    "Qatar":              { flag: "qa", short: "QAT" },
    "Switzerland":        { flag: "ch", short: "SUI" },
    "Brazil":             { flag: "br", short: "BRA" },
    "Morocco":            { flag: "ma", short: "MAR" },
    "Haiti":              { flag: "ht", short: "HAI" },
    "Scotland":           { flag: "gb-sct", short: "SCO", special: true },
    "United States":      { flag: "us", short: "USA" },
    "Paraguay":           { flag: "py", short: "PAR" },
    "Australia":          { flag: "au", short: "AUS" },
    "Türkiye":            { flag: "tr", short: "TUR" },
    "Germany":            { flag: "de", short: "GER" },
    "Curaçao":            { flag: "cw", short: "CUW" },
    "Ivory Coast":        { flag: "ci", short: "CIV" },
    "Ecuador":            { flag: "ec", short: "ECU" },
    "Netherlands":        { flag: "nl", short: "NED" },
    "Japan":              { flag: "jp", short: "JPN" },
    "Sweden":             { flag: "se", short: "SWE" },
    "Tunisia":            { flag: "tn", short: "TUN" },
    "Belgium":            { flag: "be", short: "BEL" },
    "Egypt":              { flag: "eg", short: "EGY" },
    "Iran":               { flag: "ir", short: "IRN" },
    "New Zealand":        { flag: "nz", short: "NZL" },
    "Spain":              { flag: "es", short: "ESP" },
    "Cape Verde":         { flag: "cv", short: "CPV" },
    "Saudi Arabia":       { flag: "sa", short: "KSA" },
    "Uruguay":            { flag: "uy", short: "URU" },
    "France":             { flag: "fr", short: "FRA" },
    "Senegal":            { flag: "sn", short: "SEN" },
    "Iraq":               { flag: "iq", short: "IRQ" },
    "Norway":             { flag: "no", short: "NOR" },
    "Argentina":          { flag: "ar", short: "ARG" },
    "Algeria":            { flag: "dz", short: "ALG" },
    "Austria":            { flag: "at", short: "AUT" },
    "Jordan":             { flag: "jo", short: "JOR" },
    "Portugal":           { flag: "pt", short: "POR" },
    "DR Congo":           { flag: "cd", short: "COD" },
    "Uzbekistan":         { flag: "uz", short: "UZB" },
    "Colombia":           { flag: "co", short: "COL" },
    "England":            { flag: "gb-eng", short: "ENG", special: true },
    "Croatia":            { flag: "hr", short: "CRO" },
    "Ghana":              { flag: "gh", short: "GHA" },
    "Panama":             { flag: "pa", short: "PAN" },
  },

  // ---- GROUPS ----
  groups: {
    A: ["Mexico", "South Africa", "South Korea", "Czechia"],
    B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
    C: ["Brazil", "Morocco", "Haiti", "Scotland"],
    D: ["United States", "Paraguay", "Australia", "Türkiye"],
    E: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"],
    F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
    G: ["Belgium", "Egypt", "Iran", "New Zealand"],
    H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
    I: ["France", "Senegal", "Iraq", "Norway"],
    J: ["Argentina", "Algeria", "Austria", "Jordan"],
    K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
    L: ["England", "Croatia", "Ghana", "Panama"],
  },

  // ---- GROUP STAGE FIXTURES ----
  // utcTime: ISO string in UTC → converted to BST in app.js
  // status: "upcoming" | "live" | "finished"
  // homeScore / awayScore: null if not played
  groupMatches: [
    // GROUP A
    { id: "ga1",  group: "A", home: "Mexico",       away: "South Africa",  utcTime: "2026-06-11T19:00:00Z", venue: "Estadio Azteca, Mexico City", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ga2",  group: "A", home: "South Korea",  away: "Czechia",       utcTime: "2026-06-12T02:00:00Z", venue: "Estadio Akron, Guadalajara",  homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ga3",  group: "A", home: "Czechia",      away: "South Africa",  utcTime: "2026-06-18T16:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ga4",  group: "A", home: "Mexico",       away: "South Korea",   utcTime: "2026-06-19T01:00:00Z", venue: "Estadio Akron, Guadalajara",  homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ga5",  group: "A", home: "Czechia",      away: "Mexico",        utcTime: "2026-06-25T01:00:00Z", venue: "Estadio Azteca, Mexico City", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ga6",  group: "A", home: "South Africa", away: "South Korea",   utcTime: "2026-06-25T01:00:00Z", venue: "Estadio BBVA, Monterrey",     homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP B
    { id: "gb1",  group: "B", home: "Canada",       away: "Bosnia and Herzegovina", utcTime: "2026-06-12T19:00:00Z", venue: "BMO Field, Toronto",            homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gb2",  group: "B", home: "Qatar",        away: "Switzerland",   utcTime: "2026-06-13T19:00:00Z", venue: "Levi's Stadium, Santa Clara",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gb3",  group: "B", home: "Switzerland",  away: "Bosnia and Herzegovina", utcTime: "2026-06-18T19:00:00Z", venue: "SoFi Stadium, Inglewood",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gb4",  group: "B", home: "Canada",       away: "Qatar",         utcTime: "2026-06-18T22:00:00Z", venue: "BC Place, Vancouver",           homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gb5",  group: "B", home: "Switzerland",  away: "Canada",        utcTime: "2026-06-24T19:00:00Z", venue: "BC Place, Vancouver",           homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gb6",  group: "B", home: "Bosnia and Herzegovina", away: "Qatar", utcTime: "2026-06-24T19:00:00Z", venue: "Lumen Field, Seattle",         homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP C
    { id: "gc1",  group: "C", home: "Brazil",       away: "Morocco",       utcTime: "2026-06-13T22:00:00Z", venue: "MetLife Stadium, New Jersey",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gc2",  group: "C", home: "Haiti",        away: "Scotland",      utcTime: "2026-06-14T01:00:00Z", venue: "Gillette Stadium, Boston",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gc3",  group: "C", home: "Scotland",     away: "Morocco",       utcTime: "2026-06-19T22:00:00Z", venue: "Gillette Stadium, Boston",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gc4",  group: "C", home: "Brazil",       away: "Haiti",         utcTime: "2026-06-20T00:30:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gc5",  group: "C", home: "Scotland",     away: "Brazil",        utcTime: "2026-06-24T22:00:00Z", venue: "Hard Rock Stadium, Miami",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gc6",  group: "C", home: "Morocco",      away: "Haiti",         utcTime: "2026-06-24T22:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta",homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP D
    { id: "gd1",  group: "D", home: "United States", away: "Paraguay",    utcTime: "2026-06-13T01:00:00Z", venue: "SoFi Stadium, Inglewood",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gd2",  group: "D", home: "Australia",    away: "Türkiye",       utcTime: "2026-06-13T05:00:00Z", venue: "BC Place, Vancouver",           homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gd3",  group: "D", home: "United States", away: "Australia",   utcTime: "2026-06-19T19:00:00Z", venue: "Lumen Field, Seattle",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gd4",  group: "D", home: "Türkiye",      away: "Paraguay",      utcTime: "2026-06-20T03:00:00Z", venue: "Levi's Stadium, Santa Clara",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gd5",  group: "D", home: "Türkiye",      away: "United States", utcTime: "2026-06-26T02:00:00Z", venue: "SoFi Stadium, Inglewood",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gd6",  group: "D", home: "Paraguay",     away: "Australia",     utcTime: "2026-06-26T02:00:00Z", venue: "Levi's Stadium, Santa Clara",   homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP E
    { id: "ge1",  group: "E", home: "Germany",      away: "Curaçao",       utcTime: "2026-06-14T17:00:00Z", venue: "NRG Stadium, Houston",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ge2",  group: "E", home: "Ivory Coast",  away: "Ecuador",       utcTime: "2026-06-14T23:00:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ge3",  group: "E", home: "Germany",      away: "Ivory Coast",   utcTime: "2026-06-20T20:00:00Z", venue: "BMO Field, Toronto",            homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ge4",  group: "E", home: "Ecuador",      away: "Curaçao",       utcTime: "2026-06-21T00:00:00Z", venue: "Arrowhead Stadium, Kansas City",homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ge5",  group: "E", home: "Curaçao",      away: "Ivory Coast",   utcTime: "2026-06-25T20:00:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "ge6",  group: "E", home: "Ecuador",      away: "Germany",       utcTime: "2026-06-25T20:00:00Z", venue: "MetLife Stadium, New Jersey",   homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP F
    { id: "gf1",  group: "F", home: "Netherlands",  away: "Japan",         utcTime: "2026-06-14T20:00:00Z", venue: "AT&T Stadium, Dallas",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gf2",  group: "F", home: "Sweden",       away: "Tunisia",       utcTime: "2026-06-15T02:00:00Z", venue: "Estadio BBVA, Monterrey",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gf3",  group: "F", home: "Netherlands",  away: "Sweden",        utcTime: "2026-06-20T17:00:00Z", venue: "NRG Stadium, Houston",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gf4",  group: "F", home: "Tunisia",      away: "Japan",         utcTime: "2026-06-21T05:00:00Z", venue: "Estadio BBVA, Monterrey",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gf5",  group: "F", home: "Japan",        away: "Sweden",        utcTime: "2026-06-25T23:00:00Z", venue: "AT&T Stadium, Dallas",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gf6",  group: "F", home: "Tunisia",      away: "Netherlands",   utcTime: "2026-06-25T23:00:00Z", venue: "Arrowhead Stadium, Kansas City",homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP G
    { id: "gg1",  group: "G", home: "Belgium",      away: "Egypt",         utcTime: "2026-06-15T19:00:00Z", venue: "Lumen Field, Seattle",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gg2",  group: "G", home: "Iran",         away: "New Zealand",   utcTime: "2026-06-16T01:00:00Z", venue: "SoFi Stadium, Inglewood",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gg3",  group: "G", home: "Belgium",      away: "Iran",          utcTime: "2026-06-21T19:00:00Z", venue: "SoFi Stadium, Inglewood",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gg4",  group: "G", home: "New Zealand",  away: "Egypt",         utcTime: "2026-06-22T01:00:00Z", venue: "BC Place, Vancouver",           homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gg5",  group: "G", home: "Egypt",        away: "Iran",          utcTime: "2026-06-27T03:00:00Z", venue: "Lumen Field, Seattle",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gg6",  group: "G", home: "New Zealand",  away: "Belgium",       utcTime: "2026-06-27T03:00:00Z", venue: "BC Place, Vancouver",           homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP H
    { id: "gh1",  group: "H", home: "Spain",        away: "Cape Verde",    utcTime: "2026-06-15T16:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta",homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gh2",  group: "H", home: "Saudi Arabia", away: "Uruguay",       utcTime: "2026-06-15T22:00:00Z", venue: "Hard Rock Stadium, Miami",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gh3",  group: "H", home: "Spain",        away: "Saudi Arabia",  utcTime: "2026-06-21T16:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta",homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gh4",  group: "H", home: "Uruguay",      away: "Cape Verde",    utcTime: "2026-06-21T22:00:00Z", venue: "Hard Rock Stadium, Miami",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gh5",  group: "H", home: "Cape Verde",   away: "Saudi Arabia",  utcTime: "2026-06-27T00:00:00Z", venue: "NRG Stadium, Houston",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gh6",  group: "H", home: "Uruguay",      away: "Spain",         utcTime: "2026-06-27T00:00:00Z", venue: "Estadio Akron, Guadalajara",    homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP I
    { id: "gi1",  group: "I", home: "France",       away: "Senegal",       utcTime: "2026-06-16T19:00:00Z", venue: "MetLife Stadium, New Jersey",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gi2",  group: "I", home: "Iraq",         away: "Norway",        utcTime: "2026-06-16T22:00:00Z", venue: "Gillette Stadium, Boston",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gi3",  group: "I", home: "France",       away: "Iraq",          utcTime: "2026-06-22T21:00:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gi4",  group: "I", home: "Norway",       away: "Senegal",       utcTime: "2026-06-23T00:00:00Z", venue: "MetLife Stadium, New Jersey",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gi5",  group: "I", home: "Norway",       away: "France",        utcTime: "2026-06-26T19:00:00Z", venue: "Gillette Stadium, Boston",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gi6",  group: "I", home: "Senegal",      away: "Iraq",          utcTime: "2026-06-26T19:00:00Z", venue: "BMO Field, Toronto",            homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP J
    { id: "gj1",  group: "J", home: "Argentina",   away: "Algeria",        utcTime: "2026-06-17T01:00:00Z", venue: "Arrowhead Stadium, Kansas City",homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gj2",  group: "J", home: "Austria",     away: "Jordan",         utcTime: "2026-06-17T04:00:00Z", venue: "Levi's Stadium, Santa Clara",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gj3",  group: "J", home: "Argentina",   away: "Austria",        utcTime: "2026-06-22T17:00:00Z", venue: "AT&T Stadium, Dallas",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gj4",  group: "J", home: "Jordan",      away: "Algeria",        utcTime: "2026-06-23T03:00:00Z", venue: "Levi's Stadium, Santa Clara",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gj5",  group: "J", home: "Jordan",      away: "Argentina",      utcTime: "2026-06-28T02:00:00Z", venue: "AT&T Stadium, Dallas",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gj6",  group: "J", home: "Algeria",     away: "Austria",        utcTime: "2026-06-28T02:00:00Z", venue: "Arrowhead Stadium, Kansas City",homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP K
    { id: "gk1",  group: "K", home: "Portugal",    away: "DR Congo",       utcTime: "2026-06-17T17:00:00Z", venue: "NRG Stadium, Houston",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gk2",  group: "K", home: "Uzbekistan",  away: "Colombia",       utcTime: "2026-06-18T02:00:00Z", venue: "Estadio Azteca, Mexico City",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gk3",  group: "K", home: "Portugal",    away: "Uzbekistan",     utcTime: "2026-06-23T17:00:00Z", venue: "NRG Stadium, Houston",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gk4",  group: "K", home: "Colombia",    away: "DR Congo",       utcTime: "2026-06-24T02:00:00Z", venue: "Estadio Akron, Guadalajara",    homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gk5",  group: "K", home: "Colombia",    away: "Portugal",       utcTime: "2026-06-27T23:30:00Z", venue: "Hard Rock Stadium, Miami",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gk6",  group: "K", home: "DR Congo",    away: "Uzbekistan",     utcTime: "2026-06-27T23:30:00Z", venue: "Mercedes-Benz Stadium, Atlanta",homeScore: null, awayScore: null, status: "upcoming" },
    // GROUP L
    { id: "gl1",  group: "L", home: "England",     away: "Croatia",        utcTime: "2026-06-17T20:00:00Z", venue: "AT&T Stadium, Dallas",          homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gl2",  group: "L", home: "Ghana",       away: "Panama",         utcTime: "2026-06-17T23:00:00Z", venue: "BMO Field, Toronto",            homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gl3",  group: "L", home: "England",     away: "Ghana",          utcTime: "2026-06-23T20:00:00Z", venue: "Gillette Stadium, Boston",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gl4",  group: "L", home: "Panama",      away: "Croatia",        utcTime: "2026-06-23T23:00:00Z", venue: "BMO Field, Toronto",            homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gl5",  group: "L", home: "Panama",      away: "England",        utcTime: "2026-06-27T21:00:00Z", venue: "MetLife Stadium, New Jersey",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "gl6",  group: "L", home: "Croatia",     away: "Ghana",          utcTime: "2026-06-27T21:00:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
  ],

  // ---- KNOCKOUT STAGE FIXTURES ----
  knockoutMatches: [
    // ROUND OF 32
    { id: "r32_1",  round: "Round of 32", matchLabel: "R32 Match 1",  home: null, homePlaceholder: "2nd Group A",   away: null, awayPlaceholder: "2nd Group B",   utcTime: "2026-06-28T19:00:00Z", venue: "SoFi Stadium, Los Angeles",        homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_2",  round: "Round of 32", matchLabel: "R32 Match 2",  home: null, homePlaceholder: "1st Group C",   away: null, awayPlaceholder: "2nd Group F",   utcTime: "2026-06-29T17:00:00Z", venue: "NRG Stadium, Houston",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_3",  round: "Round of 32", matchLabel: "R32 Match 3",  home: null, homePlaceholder: "1st Group E",   away: null, awayPlaceholder: "3rd Group (best)",utcTime: "2026-06-29T20:30:00Z", venue: "Gillette Stadium, Boston",         homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_4",  round: "Round of 32", matchLabel: "R32 Match 4",  home: null, homePlaceholder: "1st Group A",   away: null, awayPlaceholder: "3rd Group (best)",utcTime: "2026-06-30T01:00:00Z", venue: "Estadio Monterrey, Monterrey",     homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_5",  round: "Round of 32", matchLabel: "R32 Match 5",  home: null, homePlaceholder: "1st Group B",   away: null, awayPlaceholder: "3rd Group (best)",utcTime: "2026-06-30T17:00:00Z", venue: "AT&T Stadium, Dallas",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_6",  round: "Round of 32", matchLabel: "R32 Match 6",  home: null, homePlaceholder: "1st Group F",   away: null, awayPlaceholder: "2nd Group E",   utcTime: "2026-06-30T21:00:00Z", venue: "MetLife Stadium, New Jersey",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_7",  round: "Round of 32", matchLabel: "R32 Match 7",  home: null, homePlaceholder: "1st Group D",   away: null, awayPlaceholder: "3rd Group (best)",utcTime: "2026-07-01T01:00:00Z", venue: "Estadio Azteca, Mexico City",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_8",  round: "Round of 32", matchLabel: "R32 Match 8",  home: null, homePlaceholder: "2nd Group C",   away: null, awayPlaceholder: "2nd Group D",   utcTime: "2026-07-01T16:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_9",  round: "Round of 32", matchLabel: "R32 Match 9",  home: null, homePlaceholder: "1st Group H",   away: null, awayPlaceholder: "3rd Group (best)",utcTime: "2026-07-01T20:00:00Z", venue: "Lumen Field, Seattle",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_10", round: "Round of 32", matchLabel: "R32 Match 10", home: null, homePlaceholder: "1st Group G",   away: null, awayPlaceholder: "2nd Group H",   utcTime: "2026-07-02T01:00:00Z", venue: "Hard Rock Stadium, Miami",         homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_11", round: "Round of 32", matchLabel: "R32 Match 11", home: null, homePlaceholder: "1st Group I",   away: null, awayPlaceholder: "2nd Group J",   utcTime: "2026-07-02T17:00:00Z", venue: "BC Place, Vancouver",              homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_12", round: "Round of 32", matchLabel: "R32 Match 12", home: null, homePlaceholder: "1st Group J",   away: null, awayPlaceholder: "2nd Group I",   utcTime: "2026-07-02T20:30:00Z", venue: "Lincoln Financial Field, Philadelphia", homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_13", round: "Round of 32", matchLabel: "R32 Match 13", home: null, homePlaceholder: "1st Group K",   away: null, awayPlaceholder: "2nd Group L",   utcTime: "2026-07-03T01:00:00Z", venue: "Arrowhead Stadium, Kansas City",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_14", round: "Round of 32", matchLabel: "R32 Match 14", home: null, homePlaceholder: "1st Group L",   away: null, awayPlaceholder: "2nd Group K",   utcTime: "2026-07-03T17:00:00Z", venue: "Levi's Stadium, Santa Clara",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_15", round: "Round of 32", matchLabel: "R32 Match 15", home: null, homePlaceholder: "3rd Group (best)", away: null, awayPlaceholder: "TBD",        utcTime: "2026-07-03T20:30:00Z", venue: "Estadio Akron, Guadalajara",       homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r32_16", round: "Round of 32", matchLabel: "R32 Match 16", home: null, homePlaceholder: "3rd Group (best)", away: null, awayPlaceholder: "TBD",        utcTime: "2026-07-04T01:00:00Z", venue: "Estadio BBVA, Monterrey",          homeScore: null, awayScore: null, status: "upcoming" },
    // ROUND OF 16
    { id: "r16_1",  round: "Round of 16", matchLabel: "R16 Match 1",  home: null, homePlaceholder: "Winner R32-M1",  away: null, awayPlaceholder: "Winner R32-M2",  utcTime: "2026-07-05T19:00:00Z", venue: "AT&T Stadium, Dallas",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_2",  round: "Round of 16", matchLabel: "R16 Match 2",  home: null, homePlaceholder: "Winner R32-M3",  away: null, awayPlaceholder: "Winner R32-M4",  utcTime: "2026-07-05T23:00:00Z", venue: "SoFi Stadium, Los Angeles",        homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_3",  round: "Round of 16", matchLabel: "R16 Match 3",  home: null, homePlaceholder: "Winner R32-M5",  away: null, awayPlaceholder: "Winner R32-M6",  utcTime: "2026-07-06T17:00:00Z", venue: "NRG Stadium, Houston",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_4",  round: "Round of 16", matchLabel: "R16 Match 4",  home: null, homePlaceholder: "Winner R32-M7",  away: null, awayPlaceholder: "Winner R32-M8",  utcTime: "2026-07-06T21:00:00Z", venue: "MetLife Stadium, New Jersey",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_5",  round: "Round of 16", matchLabel: "R16 Match 5",  home: null, homePlaceholder: "Winner R32-M9",  away: null, awayPlaceholder: "Winner R32-M10", utcTime: "2026-07-07T19:00:00Z", venue: "Gillette Stadium, Boston",         homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_6",  round: "Round of 16", matchLabel: "R16 Match 6",  home: null, homePlaceholder: "Winner R32-M11", away: null, awayPlaceholder: "Winner R32-M12", utcTime: "2026-07-07T23:00:00Z", venue: "Mercedes-Benz Stadium, Atlanta",   homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_7",  round: "Round of 16", matchLabel: "R16 Match 7",  home: null, homePlaceholder: "Winner R32-M13", away: null, awayPlaceholder: "Winner R32-M14", utcTime: "2026-07-08T17:00:00Z", venue: "BC Place, Vancouver",              homeScore: null, awayScore: null, status: "upcoming" },
    { id: "r16_8",  round: "Round of 16", matchLabel: "R16 Match 8",  home: null, homePlaceholder: "Winner R32-M15", away: null, awayPlaceholder: "Winner R32-M16", utcTime: "2026-07-08T21:00:00Z", venue: "Hard Rock Stadium, Miami",         homeScore: null, awayScore: null, status: "upcoming" },
    // QUARTER-FINALS
    { id: "qf_1",   round: "Quarter-finals", matchLabel: "QF Match 1", home: null, homePlaceholder: "Winner R16-M1", away: null, awayPlaceholder: "Winner R16-M2", utcTime: "2026-07-11T19:00:00Z", venue: "AT&T Stadium, Dallas",             homeScore: null, awayScore: null, status: "upcoming" },
    { id: "qf_2",   round: "Quarter-finals", matchLabel: "QF Match 2", home: null, homePlaceholder: "Winner R16-M3", away: null, awayPlaceholder: "Winner R16-M4", utcTime: "2026-07-11T23:00:00Z", venue: "MetLife Stadium, New Jersey",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "qf_3",   round: "Quarter-finals", matchLabel: "QF Match 3", home: null, homePlaceholder: "Winner R16-M5", away: null, awayPlaceholder: "Winner R16-M6", utcTime: "2026-07-12T19:00:00Z", venue: "SoFi Stadium, Los Angeles",        homeScore: null, awayScore: null, status: "upcoming" },
    { id: "qf_4",   round: "Quarter-finals", matchLabel: "QF Match 4", home: null, homePlaceholder: "Winner R16-M7", away: null, awayPlaceholder: "Winner R16-M8", utcTime: "2026-07-12T23:00:00Z", venue: "NRG Stadium, Houston",             homeScore: null, awayScore: null, status: "upcoming" },
    // SEMI-FINALS
    { id: "sf_1",   round: "Semi-finals", matchLabel: "Semi-final 1", home: null, homePlaceholder: "Winner QF-M1", away: null, awayPlaceholder: "Winner QF-M2", utcTime: "2026-07-15T23:00:00Z", venue: "MetLife Stadium, New Jersey",      homeScore: null, awayScore: null, status: "upcoming" },
    { id: "sf_2",   round: "Semi-finals", matchLabel: "Semi-final 2", home: null, homePlaceholder: "Winner QF-M3", away: null, awayPlaceholder: "Winner QF-M4", utcTime: "2026-07-16T23:00:00Z", venue: "AT&T Stadium, Dallas",             homeScore: null, awayScore: null, status: "upcoming" },
    // THIRD PLACE
    { id: "tp_1",   round: "Third Place", matchLabel: "3rd Place Playoff", home: null, homePlaceholder: "Loser SF-1", away: null, awayPlaceholder: "Loser SF-2", utcTime: "2026-07-18T19:00:00Z", venue: "Hard Rock Stadium, Miami",         homeScore: null, awayScore: null, status: "upcoming" },
    // FINAL
    { id: "final",  round: "Final", matchLabel: "🏆 THE FINAL", home: null, homePlaceholder: "Winner SF-1",   away: null, awayPlaceholder: "Winner SF-2",   utcTime: "2026-07-19T20:00:00Z", venue: "MetLife Stadium, New Jersey",      homeScore: null, awayScore: null, status: "upcoming" },
  ]
};
