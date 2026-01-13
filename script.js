// ---- CONFIGURATION ----
const CREDENTIALS = {
    login: "slime",
    password: "1234"
};
const GAME_DURATION = 10; // secondes
// -----------------------

// Éléments DOM
const loginBox = document.getElementById("loginBox");
const content = document.getElementById("content");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("error");

const btn = document.getElementById("btn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

// Login
loginBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === CREDENTIALS.login && pass === CREDENTIALS.password){
        loginBox.style.display = "none";
        content.style.display = "block";
        startGame();
    } else {
        errorMsg.textContent = "❌ Login ou mot de passe incorrect !";
    }
});

// Jeu
let score = 0;
let timeLeft = GAME_DURATION;
let timerInterval;

function startGame() {
    score = 0;
    timeLeft = GAME_DURATION;
    scoreDisplay.textContent = `Score : ${score}`;
    timerDisplay.textContent = `Temps restant : ${timeLeft}`;
    btn.disabled = false;

    // Timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant : ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(timerInterval);
            btn.disabled = true;
            message.textContent = `⏱ Temps écoulé ! Score final : ${score}`;
        }
    }, 1000);
}

// Déplacement et score
btn.addEventListener("click", () => {
    if(timeLeft > 0){
        score++;
        scoreDisplay.textContent = `Score : ${score}`;

        // Déplacer le bouton aléatoirement
        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight - 50; // éviter le bas de la page

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        btn.style.position = "absolute";
        btn.style.left = x + "px";
        btn.style.top = y + "px";
    }
});

