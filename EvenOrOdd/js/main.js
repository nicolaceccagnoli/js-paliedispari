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

// Creo l'evento Click sul bottone 
myButton.addEventListener('click', function () {

    console.log(myButton);

    // Dichiaro una Variabile in cui inserisco l'input della Select "Pari o Dispari"
    const userEvenOdd = (document.getElementById('even-odd').value);
    console.log('userEvenOdd', userEvenOdd, typeof userEvenOdd);



    // Dichiaro una Variabile in cui inserisco l'input della Select "Numeri"
    const userNumber = parseInt(document.getElementById('user-number').value);
    console.log('userNumber', userNumber, typeof userNumber);



})