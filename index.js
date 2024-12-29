
function analyserPhrase(phrase) {
    // Vérifie si la phrase se termine par un point
    if (phrase[phrase.length - 1] !== '.') {
        console.log("La phrase doit se terminer par un point.");
        return;
    }

    // Initialisation des compteurs
    let longueur = 0;  // Compteur pour la longueur de la phrase
    let nbMots = 0;    // Compteur pour le nombre de mots
    let nbVoyelles = 0; // Compteur pour le nombre de voyelles

    // Définir les voyelles (majuscules et minuscules)
    const voyelles = 'aeiouAEIOU';

    // Itérer à travers chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i];

        // Compter la longueur de la phrase (tous les caractères sauf le point final)
        if (char !== '.') {
            longueur++;
        }

        // Compter les mots (en comptant les espaces entre les mots)
        if (char === ' ' && i > 0 && phrase[i - 1] !== ' ') {
            nbMots++;
        }

        // Compter les voyelles
        if (voyelles.includes(char)) {
            nbVoyelles++;
        }
    }

    // Ajouter 1 au nombre de mots pour le dernier mot (car la boucle compte les espaces)
    nbMots++;

    // Affichage des résultats
    console.log("Longueur de la phrase (sans le point) : " + longueur);
    console.log("Nombre de mots : " + nbMots);
    console.log("Nombre de voyelles : " + nbVoyelles);
}


