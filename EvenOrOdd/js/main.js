/*

    1) L'utente sceglie tra Pari o Dispari e seleziona un numero tra 1 e 5;
    2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
    3) Sommiamo i due numeri;
    4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
    5) Dichiariamo chi ha vinto.

*/
// Dichiaro una Variabile in cui inserisco il Bottone del Form

const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);

// Dichiaro una Variabile in cui inserisco l'input della Select "Pari o Dispari"
const userEvenOdd = document.getElementById('even-odd');
console.log('userEvenOdd', userEvenOdd, typeof userEvenOdd);
