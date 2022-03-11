console.log('JS OK');

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


/******* Versione For con While per controllo valore inserito nel prompt *******/

/*

let sum = 0;

let risultato = document.getElementById('risultato');

let number;

while (isNaN(number)) {

    for (let i = 0; i < 5; i++) {

        number = parseInt(prompt('Inserisci un numero'));

        sum += number;
    }
}

console.log(sum);

risultato.innerText = `Il risultato della somma dei numeri inseriti è: ${sum}`;

*/


/**********Versione con solo While **********/



let sum = 0;

let risultato = document.getElementById('risultato');

let i = 0;

while (i < 5) {
    let number = parseInt(prompt('Inserisci un numero'));

    i++

    sum += number;
}

console.log(sum);

risultato.innerText = `Il risultato della somma dei numeri inseriti è: ${sum}`;