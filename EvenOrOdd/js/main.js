/*

    1) L'utente sceglie tra Pari o Dispari e seleziona un numero tra 1 e 5;
    2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione);
    3) Sommiamo i due numeri;
    4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione);
    5) Dichiariamo chi ha vinto.

*/

// 1) L'utente sceglie tra Pari o Dispari e seleziona un numero tra 1 e 5;


// Dichiaro una Variabile in cui inserisco il Bottone del Form

const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);

const containerResult = document.querySelector('.container-result');

// Creo l'evento Click sul bottone 
myButton.addEventListener('click', function () {

    console.log(myButton);

    // Dichiaro una Variabile in cui inserisco l'input della Select "Pari o Dispari"
    const userEvenOdd = (document.getElementById('even-odd').value);
    console.log('userEvenOdd', userEvenOdd, typeof userEvenOdd);

    // Dichiaro una Variabile in cui inserisco l'input della Select "Numeri"
    const userNumber = parseInt(document.getElementById('user-number').value);
    console.log('userNumber', userNumber, typeof userNumber);

    // Dichiaro una Variabile che contiene il numero casuale del PC
    const randomPcNumber = getRandomNumber(1, 5);

    // 3) Sommiamo i due numeri;
    const sum = userNumber + randomPcNumber;
    
    // 5) Dichiariamo chi ha vinto.
    const winner = evenOdd(sum)
    console.log('winner', winner, typeof winner);

    let message;

    if (winner == userEvenOdd) {

        message = 'Hai Vinto!';

        let styleClassSuccess = 'card-body' + ' text-center' + ' card' + ' mt-3'+ ' text-success';

        // Creo un elemento e lo "appendo" all'interno del contenitore 
        containerResult.innerHTML += (`<div class="${styleClassSuccess}"> ${message} </div>`);

    } else {

        message = 'Hai perso..';

        let styleClassDanger = 'card-body' + ' text-center' + ' card' + ' mt-3'+ ' text-danger';

        // Creo un elemento e lo "appendo" all'interno del contenitore 
        containerResult.innerHTML += (`<div class="${styleClassDanger}"> ${message} </div>`);
}

})

// 2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione?? Non è necessario perchè so che i numeri saranno sempre compresi tra 1 e 5);
function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + min) ) + min;

}


// Definisco una funzione per stabilire se la somma dei due numeri è pari o dispari;
function evenOdd (n) {

    if (n % 2 == 0) {
        return('even');
    }

    return ('odd');
}   
