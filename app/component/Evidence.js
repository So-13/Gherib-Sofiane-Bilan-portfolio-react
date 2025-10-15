
export default function Evidence() {
   

        // Obtenir le chemin de la page actuelle
const currentPagePath = location.pathname;

// Sélectionner tous les liens de la page
const links = document.querySelectorAll('a');

// Parcourir tous les liens
links.forEach(link => {
  // Vérifier si le href du lien correspond au chemin de la page actuelle
  if (link.pathname === currentPagePath) {
    // Ajouter la classe 'is-actif' au lien
    link.classList.add('is-actif');
  }
});
 }