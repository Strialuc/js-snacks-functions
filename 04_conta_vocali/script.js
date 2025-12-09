/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocali = ["a","e","i","o","u"]

// Dichiara la funzione qui.

function controlloVocali (array1, array2) {

    let count = 0;

    const result= [];

    for (i=0; i<array1.length; i++) {

       const lettera = array1[i];

       if (array2.includes(lettera)) {
            result.push = lettera;
            console.log(result);
            count++;
        }
        

    }


    return count;

    return result;

}

    


// Invoca la funzione qui e stampa il risultato in console

const risultato = controlloVocali(word, vocali);
console.log(risultato);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)