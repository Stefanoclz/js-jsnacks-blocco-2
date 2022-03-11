console.log('JS OK');

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

let primoArray = ["paperella", "penna", "cassa", "router", "mouse", "accendino", "tasiera", "monitor", "scheda video"];

let secondoArray = ["cassapanca", "trapano", "cacciavite", "guru"];

let elemento = "elemento";



let i = 0;

while (secondoArray.length < primoArray.length) {
    secondoArray.push(elemento + i);
    i++;
}

console.log('lunghezza secondo array: ' + secondoArray.length);


console.log('lunghezza primo Array: ' + primoArray.length);

