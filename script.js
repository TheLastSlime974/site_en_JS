// Sélection des éléments
const bouton = document.getElementById("btn");
const message = document.getElementById("message");

// Action au clic
bouton.addEventListener("click", () => {
    message.textContent = "Bravo 🎉 Tu utilises JavaScript !";
});
