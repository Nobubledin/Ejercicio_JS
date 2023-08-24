const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

//Quitamos el = para que contador no supere el número de caracteres del array
for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
}

const promedio = sumaTotal / numeros.length;
return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
//Imprimimos el resultado por consola pero podemos sacarlo en pantalla con la linea "alert(promedioNumeros)"
console.log(promedioNumeros);