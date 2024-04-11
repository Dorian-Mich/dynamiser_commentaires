const boutton = document.querySelector("button");
const erreur = document.getElementById("error-message");

let commentaire_input = document.getElementById("message");
let prenom_input = document.getElementById("first-name");
let nom_input = document.getElementById("last-name");

let container = document.getElementById("comment-list");

function ajout_commentaire() {
  //Ajouter le contenu html pour la div
  let contenu_html =
    `
  <div class="flex-1 py-10 border-t border-gray-200">
  <h3 class="font-medium text-gray-900">` +
    prenom_input.value +
    " " +
    nom_input.value +
    `</h3>
  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
  <p>
  ` +
    commentaire_input.value +
    `
  </p>
  </div>
  </div>`;

  //créer une div avec le contenu HTML et l'intégrer dans le DOM
  let div = document.createElement("div");

  div.innerHTML = contenu_html;
  container.appendChild(div);
}

let erreur_check = function () {
  //vérifier si les champs sont vides
  if (
    !commentaire_input.value.trim() ||
    !prenom_input.value.trim() ||
    !nom_input.value.trim()
  ) {
    //afficher le message d'erreur
    erreur.style.display = "block";
  } else {
    //sinon ajout du commentaire et effacer les champs
    ajout_commentaire(nom_input, prenom_input, commentaire_input);
    reset();
  }
};

let reset = function () {
  //vider les champs
  commentaire_input.value = "";
  prenom_input.value = "";
  nom_input.value = "";
};
//fonction principale au clic du bouton
async function valider() {
  event.preventDefault();
  erreur_check();
}

boutton.addEventListener("onclick", valider);
