/*
A) Solicitar al usuario que ingrese números, los cuales se guardarán en una lista. 
Finalizar al ingresar el número 0, el cual no debe guardarse.
B) A continuación, solicitar al usuario que ingrese un número y, 
si el número está en la lista, eliminar su primera ocurrencia. 
Mostrar un mensaje si no es posible eliminar.
C) Recorrer la lista para imprimir la sumatoria de todos los elementos.
D) Solicitar al usuario otro número y crear una lista con los elementos 
de la lista original que sean menores que el número dado.
Imprimir esta nueva lista, iterando por ella.
E) Generar e imprimir una nueva lista que contenga como elementos a 
tuplas de dos elementos, cada una compuesta por un número de la lista original y la 
cantidad de veces que aparece en ella. Por ejemplo, si la lista original es [5,16,2,5,57,5,2] la 
nueva lista contendrá: [(5,3), (16,1), (2,2), (57,1)]
*/

function numbersSystem() {
    console.log("Number list system");

    // A solution
    var numbers = [];
    var number = 0;
    var condition_cero = 1;

    while (condition_cero === 1) {
        number = prompt("Insert number: ");

        if (number == 0) {
            condition_cero = 0;
        } else {
            numbers.push(number);
        }
    }

    console.log("The numbers are:");
    console.log(numbers);

    // B Solution
    number = prompt("Insert a number to delete number: ");

    for (let c in numbers) {
        if (numbers[c] == number) {
            delete numbers[c];
        }else{
            console.log("Its impossible to delete number");
        }
    }

    console.log("The numbers are:");
    console.log(numbers);

    // C solution
    var sum = 0;
    for(let c in numbers){
        sum += numbers;
    }

    console.log(sum);
    // D Solution

}

