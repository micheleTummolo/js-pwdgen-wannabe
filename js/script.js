// Dichiarazone e assegnazione variabili
let nome = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');
let colore = prompt('Inserisci il tuo colore preferito');
let stringa;

//Unione stringhe 
stringa = nome + cognome + colore;

console.log(nome);
console.log(cognome);
console.log(colore);
console.log(stringa);

//Stamps su documento del risultato
document.getElementById('pwd').innerHTML = stringa + 21;