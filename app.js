const boutton = document.querySelector("button");
const erreur = document.getElementById("error-message");

let commentaire_input = document.getElementById("message");
let prenom_input = document.getElementById("first-name");
let nom_input = document.getElementById("last-name");

let container = document.getElementById("comment-list");
let div = document.createElement("div");

let ajout_commentaire = function () {
  let contenu_html = (div.innerHTML =
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
  </div>`);

  //ajouter le commentaire dans la liste
  container.appendChild(div);
};

let erreur_check = function () {
  //empecher le chargement de la page

  //vérifier si les champs sont vides
  if (
    !commentaire_input.value.trim() ||
    !prenom_input.value.trim() ||
    !nom_input.value.trim()
  ) {
    //afficher le message d'erreur
    erreur.style.display = "block";
    console.log("champs vides");
  } else {
    //cacher le message d'erreur
    erreur.style.display = "none";
    console.log("champs remplis");
  }
};

let reset = function () {
  //vider les champs
  commentaire_input.value = "";
  prenom_input.value = "";
  nom_input.value = "";
};

function valider() {
  event.preventDefault();
  erreur_check();
  ajout_commentaire(prenom_input);
  //reset();
}

boutton.addEventListener("click", valider);
