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

// Dato un array contenente una lista di cinque immagini
const images = [
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp"
];