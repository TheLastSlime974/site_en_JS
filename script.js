// ---- CONFIGURATION ----
// Change ici ton login et ton mot de passe
const CREDENTIALS = {
    login: "slime",
    password: "1234"
};
// -----------------------

const loginBox = document.getElementById("loginBox");
const content = document.getElementById("content");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("error");

const btn = document.getElementById("btn");
const message = document.getElementById("message");

// Fonction login
loginBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === CREDENTIALS.login && pass === CREDENTIALS.password){
        loginBox.style.display = "none";
        content.style.display = "block";
    } else {
        errorMsg.textContent = "❌ Login ou mot de passe incorrect !";
    }
});

// Bouton interactif
btn.addEventListener("click", () => {
    message.textContent = "Bravo 🎉 Tu as cliqué !";
});
