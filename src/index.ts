// EJERCICIO "SUMAR DOS ARREGLOS"

/*
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

// SE DEFINEN LAS VARIABLES DE "ARREGLO 1"
let arreglo1: number[] = new Array(6);
let indice1: number = 0;
// SE DEFINEN LAS VARIABLES DE "ARREGLO 2"
let arreglo2: number[] = new Array(6);
let indice2: number = 0;

// SE DESARROLLA EL ALGORITMO PARA LA TOMA DE DATOS DE "ARREGLO 1"
for (indice1; indice1 < 6; indice1++) {
  arreglo1[indice1] = Number(
    prompt(
      `"ARREGLO 1" Por favor, ingrese el número en la posición ${indice1}:`
    )
  );
}
// SE DESARROLLA EL ALGORITMO PARA LA TOMA DE DATOS DE "ARREGLO 2"
for (indice2; indice2 < 6; indice2++) {
  arreglo2[indice2] = Number(
    prompt(
      `"ARREGLO 2" Por favor, ingrese el número en la posición ${indice2}:`
    )
  );
}

// SE DEFINE LA FUNCION "SUMAR ARREGLOS"
function sumarArreglos(vector1: number[], vector2: number[]) {
  let resultado: number[] = [];
  for (let i = 0; i < vector1.length; i++) {
    resultado[i] = vector1[i] + vector2[i];
  }
  return resultado;
}

// SE MUESTRA EL RESULTADO POR CONSOLA (LLAMANDO A LA FUNCION)
console.log(
  "La suma de los arreglos es igual a:",
  sumarArreglos(arreglo1, arreglo2)
);
