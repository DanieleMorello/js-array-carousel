/*
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.
*/

/* 
  MILESTONE 2
  Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente 
  servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
  Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la 
  renderà visibile.
  Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
  ma costruito dinamicamente attraverso JavaScript.
*/

// Definiamo l'array di immagini
const images = [
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp"
];

// Selezioniamo l'elemento body nella pagina HTML
const body = document.querySelector("body");

// Creiamo un elemento div con la classe container
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
body.appendChild(containerDiv);

// Creiamo un elemento div con la classe row e lo aggiungiamo al container
const rowDiv = document.createElement("div");
rowDiv.classList.add("row");
containerDiv.appendChild(rowDiv);

// Creiamo un elemento div con la classe col e lo aggiungiamo alla row
const colDiv = document.createElement("div");
colDiv.classList.add("col");
rowDiv.appendChild(colDiv);

// Creiamo un tag img e lo aggiungiamo alla colonna
const imgTag = document.createElement("img");
imgTag.setAttribute("src", `./assets/img/${images[0]}`);
imgTag.setAttribute("alt", "");
colDiv.appendChild(imgTag);