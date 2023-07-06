// Elements
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScoreBorderEl = document.getElementById("home-score-container")
let guestScoreBorderEl = document.getElementById("guest-score-container")
let timeEl = document.getElementById("time")

// Starting points
let homeScore = 0
let guestScore = 0
let time = 0
let period = 0
setInterval(updateTime, 1000)

// New game
function newGame() {
    homeScore = 0
    guestScore = 0
    time = 0
    period = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    timeEl.textContent = "00:00"
    highlightLeader()
}

// Timer
function updateTime() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    
    if (minutes == 10) {
        period == 4 ? newGame() : period++
    }
    
    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    
    timeEl.textContent = minutes + ':' + seconds
    time++;
}

// Adding points for home team
function addOneToHome() {
    addPointsTohome(1)
}

function addTwoToHome() {
    addPointsTohome(2)
}

function addThreeToHome() {
    addPointsTohome(3)
}

function addPointsTohome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

// Adding points for guest team
function addOneToGuest() {
    addPointsToGuest(1)
}

function addTwoToGuest() {
    addPointsToGuest(2)
}

function addThreeToGuest() {
    addPointsToGuest(3)
}

function addPointsToGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

// Highlighting the leader
function highlightLeader() {
    if (homeScore == guestScore) {
        homeScoreBorderEl.style.borderColor = "#FEFEFE"
        guestScoreBorderEl.style.borderColor = "#FEFEFE"
    } else if (homeScore > guestScore) {
        homeScoreBorderEl.style.borderColor = "green"
        guestScoreBorderEl.style.borderColor = "red"
    } else {
        homeScoreBorderEl.style.borderColor = "red"
        guestScoreBorderEl.style.borderColor = "green"
    }
}