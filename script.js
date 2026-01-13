// Identifiants
const LOGIN = "slime";
const PASSWORD = "1234";

// Sélection des éléments
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

    if(user === LOGIN && pass === PASSWORD){
        loginBox.style.display = "none";
        content.style.display = "block";
    } else {
        errorMsg.textContent = "❌ Login ou mot de passe incorrect !";
    }
});

// Exemple de bouton interactif sur le site
btn.addEventListener("click", () => {
    message.textContent = "Bravo 🎉 Tu as cliqué !";
});
