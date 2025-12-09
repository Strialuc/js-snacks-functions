/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let output = [];

// Dichiara la funzione qui.

function snack (cont1, cont2) {

    const result=[];

    for (let i = 0 ; i < cont1.length ; i++ ) {

        if ((cont1[i].charAt(0)) === cont2) {

            result.push(cont1[i]);
        }

        
    }

    return result;
}




// Invoca la funzione qui e stampa il risultato in console

output = snack(names, "A");

console.log(output);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]