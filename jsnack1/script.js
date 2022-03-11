console.log('JS OK');

// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari.

const numeri = [254, 757, 969, 2, 854, 777, 321, 66, 1, 57, 91, 94, 1435];

let dispari = [];

let dispariStamp = document.getElementById('dispari');

let sommaStamp = document.getElementById('somma');

for (let i = 0; i < numeri.length; i++) {
    let allNumeri = numeri[i];

    if (allNumeri % 2 !== 0) {
        dispari.push(allNumeri);
    }
}

console.log(dispari);
dispariStamp.innerText = `I numeri dispari sono: ${dispari}`;

let sum = 0;

for (let x = 0; x < dispari.length; x++) {
    sum += parseInt(dispari[x]);

}

console.log(sum);

sommaStamp.innerText = `La somma dei numeri dispari sono: ${sum}`;
