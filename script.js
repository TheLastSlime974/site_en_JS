const bouton = document.getElementById("btn");
const message = document.getElementById("message");

bouton.addEventListener("click", () => {
    message.textContent = "Bravo 🎉 Tu utilises JavaScript !";
});
