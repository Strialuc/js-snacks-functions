/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

let arrayOutput = [];


// Dichiara la funzione qui.

function primeLettere (cont) {

    const result= [];

    for (let i= 0 ; i < cont.length ; i++ ) {

       result.push(cont[i].charAt(0));
    }

    return result;
}


// Invoca la funzione qui e stampa il risultato in console

arrayOutput = primeLettere(names)

console.log(arrayOutput);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]