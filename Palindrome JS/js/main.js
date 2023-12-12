/*

    1) Chiedere all'utente di inserire una parola;
    2) Creare una funzione per capire se la parola inserita è palindroma.

*/

// Dichiaro una Variabile in cui racchiudo il Bottone del Form
const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);

// Creo l'evento click sul bottone 
myButton.addEventListener('click', function() {

    console.log(myButton);

    // Dichiaro una Variabile in cui racchiudo il Form
    const form = document.querySelector('form');

    // Creo l'evento per la sottomissione del Form
    form.addEventListener('click', function(event) {

        // Dichiaro una Variabile in cui racchiudo l'input dell'utente
        const userWord = document.getElementById('user-word').value;
        console.log('userWord', userWord, typeof userWord);


        // Inizializzo una variabile con all'interno la funzione che abbia come argomento l'input dell'utente
        const userReverse = inputReverse(userWord);
        console.log(userReverse);

        if (userReverse == userWord) {
            alert ('Bravo')
        } else {
            alert ('Hai sbagliato');
        }

    });



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

