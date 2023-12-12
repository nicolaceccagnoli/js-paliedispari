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
    // Dichiaro una Variabile in cui racchiudo l'input dell'utente
    const userWord = document.getElementById('user-word').value;
    console.log('userWord', userWord, typeof userWord);
})