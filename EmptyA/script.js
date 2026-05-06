// Initial Game State
const gameState = {
    steps: 0,
    clay: 0,
    hasFoundClay: false
};

function updateUI() {
    // Update numbers
    document.getElementById('stat-steps').innerText = gameState.steps;
    document.getElementById('stat-clay').innerText = gameState.clay;

    // Logic for Unfolding UI
    if (gameState.steps >= 10) {
        document.getElementById('search-btn').classList.remove('hidden');
    }

    if (gameState.hasFoundClay) {
        document.getElementById('stat-clay-row').classList.remove('hidden');
    }
}

function logMessage(text) {
    const log = document.getElementById('message-log');
    const newMsg = document.createElement('p');
    newMsg.innerText = text;
    // Prepends so newest message is at the top
    log.prepend(newMsg);
}

function handleWalk() {
    gameState.steps++;
    
    if (gameState.steps === 1) {
        logMessage("Picking a direction, I started walking.");
    } else if (gameState.steps === 5) {
        logMessage("The horizon is too flat. Eerily uniform.");
    }
    
    updateUI();
}

function handleSearch() {
    // 20% chance to find clay
    if (Math.random() > 0.8) {
        gameState.clay++;
        if (!gameState.hasFoundClay) {
            gameState.hasFoundClay = true;
            logMessage("Your fingers brush against something cooler and denser. Clay.");
        } else {
            logMessage("You extract a bit more clay from the white expanse.");
        }
    } else {
        logMessage("Nothing but fine, artificial sand.");
    }
    updateUI();
}