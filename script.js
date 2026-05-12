// Theme Toggle Logic
const toggleBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;

toggleBtn.addEventListener('click', () => {
    const newTheme = htmlTag.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    htmlTag.setAttribute('data-theme', newTheme);
});

// Mock Data for demonstration (Replace with real API endpoint)
const mockMatches = [
    {
        homeTeam: "USA", homeCode: "us", 
        awayTeam: "Bangladesh", awayCode: "bd", 
        score: "2 - 1", timeUTC: "2026-06-12T20:00:00Z" 
    },
    {
        homeTeam: "Mexico", homeCode: "mx", 
        awayTeam: "Canada", awayCode: "ca", 
        score: "0 - 0", timeUTC: "2026-06-12T23:00:00Z" 
    }
];

function convertToBST(utcString) {
    const date = new Date(utcString);
    return date.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'short'
    });
}

function renderScores() {
    const container = document.getElementById('scores-container');
    container.innerHTML = '';

    mockMatches.forEach(match => {
        const bstTime = convertToBST(match.timeUTC);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="font-size: 0.8rem; color: gray;">${bstTime} BST</div>
            <div style="margin: 10px 0;">
                <img src="https://flagcdn.com/w40/${match.homeCode}.png" class="flag"> 
                <strong>${match.homeTeam}</strong> ${match.score} 
                <strong>${match.awayTeam}</strong>
                <img src="https://flagcdn.com/w40/${match.awayCode}.png" class="flag">
            </div>
        `;
        container.appendChild(card);
    });
}

// Initial Render
renderScores();

// Placeholder for API Fetching (Real usage requires a free key from football-data.org)
async function fetchLiveData() {
    try {
        // const response = await fetch('https://api.football-data.org/v4/competitions/WC/matches', {
        //     headers: { 'X-Auth-Token': 'YOUR_API_KEY' }
        // });
        // const data = await response.json();
        // Process data here...
        console.log("API Fetch would happen here.");
    } catch (error) {
        console.error("Error fetching scores:", error);
    }
}

setInterval(fetchLiveData, 60000); // Check for updates every minute