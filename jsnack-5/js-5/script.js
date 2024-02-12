// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

// memorizzo in una costante la frase da modificare
const phrase = "nel mezzo del cammin di nostra vita";
console.log(phrase);

// memorizzo in una costante il risultato
const upperPhrase = phraseUpperCase(phrase);
// scrivo il risultato in pagina
document.getElementById("result").innerHTML = `La frase da modificare è: ${phrase} <br> La stessa frase con le iniziali tutte maiuscole è: ${upperPhrase}`;


// definisco la funzione che, data una stringa, la restituisce con le iniziali tutte maiuscole
function phraseUpperCase(phrase) {

    // inserisco la mia stringa in un array con il metodo "split()"
    const upperPrhaseArray = phrase.split("");

    // memorizzo in una variabile la parola nuova 
    let upperPhrase;

    // attraverso un ciclo for giro lettera per lettera fino a quando non trovo uno spazio
    for(let i = 0; i < upperPrhaseArray.length; i++) {
        if(upperPrhaseArray[i] == ' ') {

            // prendo l'indice dello spazio
            let index = upperPrhaseArray[i];
            // prendo la lettera che si trova nella posizione successiva e la trasformo in maiuscola con il metodo "toUpperCase"
            let letterUp = upperPrhaseArray[i+1].toUpperCase();
            // sostituisco la lettera maiuscola alla lettera presente nell'array
            upperPrhaseArray[i+1] = letterUp;

        }

    }

    // con lo stesso procedimento rendo la prima lettera maiuscola
    const firstLetter = upperPrhaseArray[0].toUpperCase();
    upperPrhaseArray[0] = firstLetter;

    return upperPhrase = upperPrhaseArray.join("");

}