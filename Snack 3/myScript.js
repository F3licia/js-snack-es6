
/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi
degli array foreach(return value) o filter(return arr).*/


var numbers =[25, 34, 71, 45, 6, 8, 20];
console.log(numbers)
var min = parseInt(prompt("inserisci index d'inizio"));
var max = parseInt(prompt("inserisci index finale"));

var filteredNo;
var filteredNo = filterIndex(min, max, numbers);
console.log(filteredNo)


function filterIndex(a, b, array){
    result = [];

    numbers.forEach(function(element, index) {
        
        if(index >= a && index <= b){
            result.push(element);
        }
    });
    return result

}

