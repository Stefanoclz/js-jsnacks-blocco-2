console.log('JS OK');

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

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