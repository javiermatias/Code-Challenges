//BIENVENIDOS A TU PROFESOR EN LINEA

//Arrays Javascript 

let nota1=8;
let nota2=6;
let nota3=7;

let notas=[8,6,7,5,10,5]; //arreglo podemos agrupar distintos elementos;
//         0,1,2,3,4,5
//declaracion y asginacion al mismo tiempo.

//Propiedad muy importante es .length

let tamanio= notas.length; // 4

let primerElemento= notas[0]; // En cualquier arreglo el elemento primero va ser el indice 0.

let ultimoElemento= notas[notas.length - 1]; //En cualquier arreglo siempre de esta forma
//Conseguimos ir al ultimo elemento;


//Forma de recorrer el arreglo.
let suma=0;
for(let i=0; i<notas.length; i++){//0,1,2,3,4,5
  console.log(notas[i]); //va imprimir por pantalla 8,6,7,5,10,5
   //suma = suma + notas[i];
   suma += notas[i]
}

let promedio = suma / notas.length;


//Usar una function de los arreglos .foreach notas=[8,6,7,5,10,5]

notas.forEach(function(valorActual){ // el forech ejecuta por cada vuelta una funcion anonima
    
    console.log(valorActual);// es una ejecucion sincrona
})

notas.forEach(valorActual => console.log(valorActual)); //esto es una funcion lambda, anonima

//La forma larga o basica de hacer el foreach
for(let i=0; i<notas.length; i++){

    mostrarElemento(notas[i]); //llamamos a esta funcion por cada elemento del for
}

function mostrarElemento(valor){
    console.log(valor);
}

//Usando el operador foreach, mostrar en consola los valores que dentro del arreglo son pares.

notas.forEach(valor =>{
    if(valor % 2 == 0){
        console.log("el valor es par" + valor);
    }else{
        console.log("el valor es impar" + valor);
    }
 })
