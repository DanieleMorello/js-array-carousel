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

// Creiamo un elemento div per i bottoni "prev" e "next"
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons");
containerDiv.insertBefore(buttonsDiv, rowDiv);

// Creiamo il bottone "prev"
const prevButton = document.createElement("button");
prevButton.classList.add("prev");
prevButton.innerHTML = "&and;";
buttonsDiv.appendChild(prevButton);

// Creiamo il bottone "next"
const nextButton = document.createElement("button");
nextButton.classList.add("next");
nextButton.innerHTML = "&or;";
buttonsDiv.appendChild(nextButton);

// Aggiungiamo un gestore di eventi per il click del bottone "prev"
prevButton.addEventListener("click", function() {
  // Troviamo l'indice corrente dell'immagine visualizzata
  const currentIndex = images.indexOf(imgTag.getAttribute("src").split("/").pop());
  
  // Calcoliamo l'indice dell'immagine precedente
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  
  // Aggiorniamo l'attributo "src" dell'elemento "img"
  imgTag.setAttribute("src", `./assets/img/${images[prevIndex]}`);
});

// Aggiungiamo un gestore di eventi per il click del bottone "next"
nextButton.addEventListener("click", function() {
  // Troviamo l'indice corrente dell'immagine visualizzata
  const currentIndex = images.indexOf(imgTag.getAttribute("src").split("/").pop());
  
  // Calcoliamo l'indice dell'immagine successiva
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  
  // Aggiorniamo l'attributo "src" dell'elemento "img"
  imgTag.setAttribute("src", `./assets/img/${images[nextIndex]}`);
});