const formulaires = document.querySelector("textarea");
const boutton = document.querySelector("button");
const erreur = document.getElementById("error-message");

function valider() {
  if (!formulaires.value.trim()) {
    event.preventDefault();
    erreur.style.display = "block";
  }
}

boutton.addEventListener("click", valider);
