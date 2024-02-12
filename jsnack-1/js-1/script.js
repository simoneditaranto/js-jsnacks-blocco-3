// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


// memorizzo in una variabile la mia stringa
let word = "ciao";

// creo un array vuoto dove inserisco ogni singola lettera della mia parola partendo dall'ultima lettera
const reverseWordArray = [];


// attraverso un ciclo che parte dall'ultima lettera della parola aggiungo la stessa al mio array
for(let i = word.length-1; i >= 0; i--) {

    reverseWordArray.push(word.charAt(i));
    
}

// attraverso il metodo join() stampo il contenuto dell'array come string
const wordReverse = reverseWordArray.join("");

// stampo in pagina il risultato
document.getElementById("word").innerHTML = `La parola che hai scelto è: ${word}`;
document.getElementById("result").innerHTML = `La parola al contrario è: ${wordReverse}`;