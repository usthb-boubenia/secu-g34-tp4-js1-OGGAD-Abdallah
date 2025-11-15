"use strict"; // Mode strict, vu dans le slide 51.


//    Données Students : tableau d'arrays slide 38
let Students = [
    [1000, "JOHN",   "DOE",     14, 5],
    [2000, "BOB",    "CARLTON",  7, 1],
    [3000, "RAYANE", "SMITH",   13, 3]
];

//    Fonction B avec retour – prend un FLOAT  et retourne BOOLEAN vue dans slide 45 
function B(moyenne) {
    // Vérifie si la moyenne >= 10 
    return moyenne >= 10; // Retourne true ou false – slide 42
}

//    Fonction A – appelle B avec la moyenne calculée vue dans slide 45
function A() {
    for (let i = 0; i < Students.length; i++) {
        let etu = Students[i];
        let note1 = etu[3]; // Note1 – accès tableau, slide 38
        let note2 = etu[4]; // Note2

        // FORMULE DU PROF: Moyenne = (Note1 + Note2)/2 + 5
        let moyenne = (note1 + note2) / 2 + 5; // slide 41

        // Appel de B avec la moyenne (float)
        let estAdmis = B(moyenne); // slide 45

        // Affichage selon le résultat
        let resultat = estAdmis ? "ADMIS" : "AJOURNE"; // Notation  ternaire, slide 42

        console.log(etu[0] + ": " + resultat); // slide 37 
    }
}