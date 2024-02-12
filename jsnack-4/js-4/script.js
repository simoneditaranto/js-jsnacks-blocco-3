// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente


// memorizzo in una costante la stringa da riordinare
const word = "webmaster";

// parola scritta in con le lettere in ordine alfabetico
const newWord = reorderWord(word);

// scrivo il risultato in pagina
document.getElementById("result").innerHTML = `La parola da riordinare è: ${word} <br> Risultato: ${newWord}`;


// definisco una funzione che, data una parola, la riscrive con le lettere in ordina alfabetico
function reorderWord(word) {

    // inserisco ogni singola lettera della parola in un array
    const wordArray = word.split("");

    // definisco una costante dove ci sarà la parola con le lettere in ordine alfabetico
    const reorderArray = [];

    // attraverso un ciclo controllo se ogni lettera è minore di tutte le altre, se lo è la aggiungo al nuovo array e la rimuovo da quello originale. 
    // ripeto questo finché l'array originale ha almeno un elemento

    // finché l'array originale ha almeno un elemento
    while(wordArray.length > 0) {

        // controllo la i-esima lettera dell'array
        for(let i = 0; i < wordArray.length; i++) {
            // contatore che mi serve per capire se sono arrivato alla fine dell'array, cioè se la lettera è minore di tutte le altre (ad ogni lettera che controllo si azzera)
            let counter = 0;
            // ciclo che confronta l'i-esima lettera con tutte le altre  
            for(let j = 0; j < wordArray.length; j++) {
                
                if(wordArray[i] <= wordArray[j]) {

                    counter++;
                    
                    // se sono qui significa che l'i-esima lettera è minore di tutte le altre
                    if(counter == wordArray.length) {
                        
                        // la aggiungo al nuovo array
                        reorderArray.push(wordArray[i]);
                        
                        // prendo l'indice nell'array di quella lettera
                        let index = wordArray.indexOf(wordArray[i]);

                        // la rimuovo dall'array originale
                        wordArray.splice(index, 1);
                        
                    }

                }

            }

        }

    }

    return reorderArray;

}