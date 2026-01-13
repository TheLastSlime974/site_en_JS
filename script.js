// Login et mot de passe
const LOGIN = "slime";
const PASSWORD = "1234";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(user === LOGIN && pass === PASSWORD){
        // Masquer la login-box
        document.getElementById("loginBox").style.display = "none";
        // Afficher le contenu
        document.getElementById("content").style.display = "block";
    } else {
        error.textContent = "❌ Login ou mot de passe incorrect !";
        error.style.color = "red";
    }
}
