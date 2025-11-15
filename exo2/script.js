"use strict"; // Mode strict, vu dans le slide 51.

// Déclaration d'une fonction sans parametres , vu dans le slide 45.
function f1() {
    // Déclaration d'un tableau, vu dans le slide 38.
    let tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    
    // Boucle pour afficher chaque élément, vu dans le slide 44.
    for (let i = 0; i < tableauEtudiants.length; i++) {
        console.log(tableauEtudiants[i]); // Affichage d'éléments du tableau, vu dans le slide 38.
    }
}
// Déclaration d'une fonction sans parametres , vu dans le slide 45.
function f2() {
    // Déclaration d'un objet, vu dans le slide 39.
    let objetEtudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };
    console.log(objetEtudiant); // Affichage de l'objet, vu dans le slide 39.
}
// Déclaration d'une fonction sans parametres , vu dans le slide 45
function f3() {
    // Déclaration d'un tableau d'objets, vu dans le slide 40 
    let tableauObjetsEtudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    
    // Affichage élaboré, vu dans le slide 41
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        let etudiant = tableauObjetsEtudiants[i];
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age); 
    }
}