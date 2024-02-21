const basket = [];

basket.push();


const bobo = document.getElementById("addBolo");
const pate = document.getElementById("addPates");
const riz =  document.getElementById("addRiz");
const yaourt = document.getElementById("addYaourt");

result.innerText = basket;

function ajouterBolo() {
    basket.push(bobo)
}

function ajouterPates() {
    basket.push(pate)
}

function ajouterRiz() {
    basket.push(riz)
}

function ajouterYaourt() {
    basket.push(yaourt)
}
///event listener quand add bolo click active la fct ajEl
document.getElementById('addBolo').addEventListener('click', ajouterBolo);

document.getElementById('addPates').addEventListener('click', ajouterPates);

document.getElementById('addRiz').addEventListener('click', ajouterRiz);

document.getElementById('addYaourt').addEventListener('click', ajouterYaourt);


afficherTableau();

function afficherTableau() {
    // Sélectionner l'élément HTML
    let tableauListe = document.getElementById('tableauListe');

    // Effacer le contenu actuel de l'élément
    tableauListe.innerHTML = '';

    // Parcourir le tableau et ajouter chaque élément à la liste
    monTableau.forEach(function(element) {
        let listItem = document.createElement('basket');
        listItem.textContent = element;
        tableauListe.appendChild(listItem);
    });
}