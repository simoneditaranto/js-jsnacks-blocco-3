// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).


// memorizzo in una costante l'array 
const elementsArray = ["0", "1", "2", "3", "4", "5", "6"];
// memorizzo in due costanti le posizioni (min, max) dell'array risultante
const positionMin = prompt("Inserisci la prima posizione:");
const positionMax = prompt("Inserisci la seconda posizione:");

if(positionMin < 0 || positionMax < positionMin || positionMax > elementsArray.length) {

    alert("Valore non accettabile, ricarica la pagina per riprovare");

} else {

    // memorizzo in una costante l'array risultante
    const newElementsArray = positionMinMaxArray(elementsArray, positionMin, positionMax);
    
    // sampo in pagina il risultato
    document.getElementById("result").innerHTML = `Array: [${elementsArray}] <br> Posizione min: ${positionMin} <br> Posizione max: ${positionMax} <br> Risultato: [${newElementsArray}];`

}




// definisco la funzione
function positionMinMaxArray(array, positionMin, positionMax) {

    // memorizzo il nuovo array
    const newElementsArray = [];

    // attraverso un ciclo for che va da "positionMin" a "positionMax" aggiungo ogni volta l'elemento dell'array passato come parametro al nuovo array
    for(let i = positionMin; i <= positionMax; i++){

        newElementsArray.push(array[i]);

    }

    return newElementsArray;

} 