// Liste des utilisateurs
const utilisateurs = [
    { login: "alex", mdp: "1234" },
    { login: "sam", mdp: "abcd" },
    { login: "lea", mdp: "pass" }
];

// Récupération des éléments
const btnLogin = document.getElementById("btnLogin");
const message = document.getElementById("message");

btnLogin.addEventListener("click", function () {

    const loginEntre = document.getElementById("login").value;
    const mdpEntre = document.getElementById("mdp").value;

    let connecte = false;

    // Vérification des utilisateurs
    for (let i = 0; i < utilisateurs.length; i++) {
        if (
            utilisateurs[i].login === loginEntre &&
            utilisateurs[i].mdp === mdpEntre
        ) {
            connecte = true;
            break;
        }
    }

    // Résultat
    if (connecte) {
        message.textContent = "✅ Connexion réussie ! Redirection...";
        message.style.color = "green";
        // Redirection vers la page du portail après 1 seconde
        setTimeout(function(){
            window.location.href = "portail.html";
        }, 1000);
    } else {
        message.textContent = "❌ Login ou mot de passe incorrect";
        message.style.color = "red";
    }
});
