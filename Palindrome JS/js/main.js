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
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        // Dichiaro una Variabile in cui racchiudo l'input dell'utente
        const userWord = document.getElementById('user-word').value;
        console.log('userWord', userWord, typeof userWord);


        // Inizializzo una variabile con all'interno la funzione che abbia come argomento l'input dell'utente
        const userReverse = inputReverse(userWord);
        console.log(userReverse);

        const myContainer = document.querySelector('.container');

        // Creo un elemento e lo "appendo" all'interno del contenitore 
        const containerResult = document.createElement('div');
        containerResult.classList.add('card-body', 'text-center','card', 'mt-3', 'w-25');

        myContainer.append(containerResult)

        console.log(containerResult);

        let message = 0;

        if (userReverse == userWord) {

            containerResult.classList.add('text-success');
            message = 'Complimenti, hai trovato una parola palindroma!'
            
        } else {
            containerResult.classList.add('text-danger');
            message = 'Sbagliato, prova ancora..'

        }

        containerResult.innerHTML = message;

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

