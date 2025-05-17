const form = document.querySelector(".main_form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const genderInput = document.getElementById("gender");
const countryInput = document.getElementById("country");
const scoreInput = document.getElementById("score");
const submitBtn = document.querySelector(".main_form-submit-btn");
const errorPrompter = document.querySelector(".main_error-prompter");
const scoreboardWrapper = document.querySelector(".main_scoreboard-wrapper");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let players = JSON.parse(localStorage.getItem("players")) || [];
// Store previous rankings by player id (we'll generate IDs)
let previousRanks = {};

// Utility: assign unique ID to each player if not exists (for tracking)
function ensurePlayerIds() {
  players.forEach((p, i) => {
    if (!p.id) {
      p.id =
        "player_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
    }
  });
}

// Save to localStorage
function savePlayers() {
  localStorage.setItem("players", JSON.stringify(players));
}

// Show error message temporarily
function showError(message) {
  errorPrompter.textContent = message;
  errorPrompter.style.display = "block";
  setTimeout(() => {
    errorPrompter.style.display = "none";
  }, 3000);
}

// Capitalize first letter only
function formatName(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Check country contains only letters and spaces
function isValidCountry(country) {
  return /^[a-zA-Z\s]+$/.test(country);
}

function renderPlayers() {
  ensurePlayerIds();

  // Sort players according to current sort
  let sortedPlayers = [...players];
  const sortVal = sortSelect.value;
  if (sortVal === "name") {
    sortedPlayers.sort((a, b) =>
      (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
    );
  } else if (sortVal === "country") {
    sortedPlayers.sort((a, b) => a.country.localeCompare(b.country));
  } else if (sortVal === "score") {
    sortedPlayers.sort((a, b) => b.score - a.score);
  }

  // Filter players by search input (name or country)
  const filterText = searchInput.value.toLowerCase().trim();
  const filteredPlayers = sortedPlayers.filter(
    (p) =>
      (p.firstName + " " + p.lastName).toLowerCase().includes(filterText) ||
      p.country.toLowerCase().includes(filterText)
  );

  // Create a map of current ranks by player id
  const currentRanks = {};
  filteredPlayers.forEach((p, idx) => {
    currentRanks[p.id] = idx + 1;
  });

  scoreboardWrapper.innerHTML = "";

  filteredPlayers.forEach((player, index) => {
    // Calculate rank movement compared to previousRanks
    let prevRank = previousRanks[player.id];
    if (prevRank === undefined) prevRank = index + 1; // If no previous rank, assume same as current
    const rankDiff = prevRank - (index + 1); // positive means moved up, negative down

    const playerRow = document.createElement("div");
    playerRow.classList.add("main_scoreboard", "fade-in");

    // Rank + movement arrow
    const leftDiv = document.createElement("div");

    // Rank number or crown
    const rankSpan = document.createElement("span");
    rankSpan.classList.add("main_player-rank");
    if (index === 0) {
      rankSpan.textContent = "👑";
      rankSpan.style.fontSize = "1.3rem";
    } else {
      rankSpan.textContent = index + 1;
    }
    leftDiv.appendChild(rankSpan);

    // Movement arrow for rank changes
    const movementArrow = document.createElement("span");
    if (rankDiff > 0) {
      movementArrow.className = "arrow-up";
      movementArrow.textContent = "▲";
    } else if (rankDiff < 0) {
      movementArrow.className = "arrow-down";
      movementArrow.textContent = "▼";
    } else {
      movementArrow.className = "arrow-placeholder";
      movementArrow.textContent = "–";
    }
    leftDiv.appendChild(movementArrow);

    // Player info container
    const playerInfo = document.createElement("div");
    const nameGenderDiv = document.createElement("div");

    const playerName = document.createElement("span");
    playerName.classList.add("main_player-name");
    playerName.textContent = player.firstName + " " + player.lastName;
    nameGenderDiv.appendChild(playerName);

    const playerGender = document.createElement("span");
    playerGender.textContent = player.gender;
    nameGenderDiv.appendChild(playerGender);

    playerInfo.appendChild(nameGenderDiv);

    const timeStamp = document.createElement("span");
    timeStamp.classList.add("main_time-stamp");
    timeStamp.textContent = new Date(player.timestamp).toLocaleString();
    playerInfo.appendChild(timeStamp);

    leftDiv.appendChild(playerInfo);
    playerRow.appendChild(leftDiv);

    // Country (uppercase)
    const countrySpan = document.createElement("span");
    countrySpan.classList.add("main_player-country");
    countrySpan.textContent = player.country.toUpperCase();
    playerRow.appendChild(countrySpan);

    // Score controls
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("main_player-score");

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.title = "Decrease score";
    decreaseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (player.score > 0) {
        player.score--;
        savePlayers();
        renderPlayers();
      }
    });

    const scoreSpan = document.createElement("span");
    scoreSpan.textContent = player.score;

    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.title = "Increase score";
    increaseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      player.score++;
      savePlayers();
      renderPlayers();
    });

    scoreDiv.appendChild(decreaseBtn);
    scoreDiv.appendChild(scoreSpan);
    scoreDiv.appendChild(increaseBtn);
    playerRow.appendChild(scoreDiv);

    // Delete button
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("main_scoreboard-btn-container");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete player";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playerRow.classList.add("fade-out");
      setTimeout(() => {
        players = players.filter((p) => p !== player);
        savePlayers();
        renderPlayers();
      }, 400);
    });
    btnContainer.appendChild(deleteBtn);
    playerRow.appendChild(btnContainer);

    scoreboardWrapper.appendChild(playerRow);
  });

  // Update previousRanks for next render
  previousRanks = currentRanks;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = formatName(firstNameInput.value.trim());
  const lastName = formatName(lastNameInput.value.trim());
  const gender = genderInput.value;
  const country = countryInput.value.trim();
  const score = parseInt(scoreInput.value, 10) || 0;

  if (!firstName || !lastName || !gender || !country) {
    showError("Please fill all fields.");
    return;
  }

  if (!isValidCountry(country)) {
    showError("Country must contain only letters.");
    return;
  }

  // Check duplicates by full name (case-insensitive)
  const exists = players.some(
    (p) =>
      p.firstName.toLowerCase() === firstName.toLowerCase() &&
      p.lastName.toLowerCase() === lastName.toLowerCase()
  );
  if (exists) {
    showError("Player with this name already exists.");
    return;
  }

  const newPlayer = {
    firstName,
    lastName,
    gender,
    country,
    score,
    timestamp: Date.now(),
  };

  players.push(newPlayer);
  savePlayers();
  renderPlayers();

  // Clear inputs
  firstNameInput.value = "";
  lastNameInput.value = "";
  genderInput.value = "";
  countryInput.value = "";
  scoreInput.value = "";
});

searchInput.addEventListener("input", renderPlayers);
sortSelect.addEventListener("change", renderPlayers);

// Initial render
renderPlayers();
