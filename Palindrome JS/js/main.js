/*

    1) Chiedere all'utente di inserire una parola;
    2) Creare una funzione per capire se la parola inserita è palindroma.

*/

// Dichiaro una Variabile in cui racchiudo il Bottone del Form
const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);


    // Dichiaro una Variabile in cui racchiudo il Form
    const form = document.querySelector('form');

    // Creo l'evento per la sottomissione del Form
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        // Dichiaro una Variabile in cui racchiudo l'input dell'utente
        const userWord = document.getElementById('user-word').value;
        console.log('userWord', userWord, typeof userWord);

        // Inizializzo una variabile con all'interno la funzione che abbia come argomento l'input dell'utente
        const userReverse = inputReverse(userWord);
        console.log(userReverse);

        const myContainer = document.querySelector('.container');

        let message;

        if ((userReverse == userWord) && (userWord !== '')) {
            message = 'Complimenti, hai trovato una parola palindroma!' 

            let styleClassSuccess = 'card-body' + ' text-center' + ' card' + ' mt-3'+ ' w-25' + ' text-success';

            // Creo un elemento e lo "appendo" all'interno del contenitore 
            myContainer.innerHTML += (`<div class="${styleClassSuccess}"> ${message} </div>`);
            
        } else {
            message = 'Sbagliato, prova ancora..'

            let styleClassDanger = 'card-body' + ' text-center' + ' card' + ' mt-3'+ ' w-25' + ' text-danger';

            // Creo un elemento e lo "appendo" all'interno del contenitore 
            myContainer.innerHTML += (`<div class="${styleClassDanger}"> ${message} </div>`);
            
        }

        });


/*

    2) Creare una funzione per capire se la parola inserita è palindroma.
    Dichiaro una funzione con all'interno un ciclo che scorra l'indice della parola al contrario

*/

function inputReverse(string) {

    let reverseWord = '';

    for (let i = string.length -1; i >= 0; i--){

        reverseWord += string[i];

     }

     return reverseWord;

 } 

