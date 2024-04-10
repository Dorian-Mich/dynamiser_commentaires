const formulaires = document.querySelector("textarea");
const boutton = document.querySelector("button");
const erreur = document.getElementById("error-message");

let container = document.getElementById("comment-list");
let div = document.createElement("div");
let prenom_input = document.getElementById("first-name").value;
let prenom = document.createTextNode(prenom_input);

let commentaire_input = document.getElementById("message").value;

let ajout_commentaire = function (prenom_input) {
  let contenu_html = (div.innerHTML =
    `
  <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">` +
    prenom_input +
    `</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, enim
        vitae quasi culpa est, excepturi cum voluptatum exercitationem id,
        deleniti similique maiores! Totam, itaque praesentium quod ipsa quos
        ratione et.
      </p>
    </div>
  </div>`);

  //ajouter le commentaire dans la liste
  container.appendChild(div);
  div.appendChild(contenu_html);
};

let erreur_check = function () {
  //empecher le chargement de la page
  event.preventDefault();

  //vérifier si les champs sont vides
  if (!formulaires.value.trim()) {
    //afficher le message d'erreur
    erreur.style.display = "block";
  } else {
    //cacher le message d'erreur
    erreur.style.display = "none";
  }
};

function valider() {
  erreur_check();
  ajout_commentaire(prenom_input);
}

boutton.addEventListener("click", valider);
