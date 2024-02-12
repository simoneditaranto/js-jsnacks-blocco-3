// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro

// memorizzo i due array da "fondare"
// array 1
const firstArray = ["a", "b", "c"];
//array 2
const secondArray = ["1", "2", "3"];


// memorizzo l'array risultante
const newArray = bothElementsArray(firstArray, secondArray);
// stampo in pagina il risultato

document.getElementById("result").innerHTML = `Primo array: ${firstArray} <br> Secondo array: ${secondArray} <br> Risultato: ${newArray}`;


// definisco una funzione che, dati due array, restituisce un array con gli stessi elementi presi alternativamente
function bothElementsArray(firstArray, secondArray) {

    // memorizzo l'array che avrà gli elementi di entrambi gli array iniziali
    const resultArray = [];

    // attraverso un ciclo for itero entrambi gli array e ad ogni iterazione salvo gli elementi in un terzo array
    for(let i = 0; i < firstArray.length; i++) {

        resultArray.push(firstArray[i]);
        resultArray.push(secondArray[i]);

    }

    return resultArray;

}