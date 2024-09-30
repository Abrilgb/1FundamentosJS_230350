//Repaso de arreglos 

//estilizacion de los mensajes de salida 
const bg ="linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console=`background:${bg}; color: white;
border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`


//Personalizacion de las Salidas de Consola 
console.warn("Practica 06 : Arreglos en JvaScript");

//Declaracion de un arreglo 
//Para declarar un arreglo de datos en Js BASTA CON AGREGAR [, Y DENTRO COLOCAR LOS DATOS QUE CONTENGAN 

const mesesAnio =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("%c1.- Declaracion de Arreglos (array)", style_console);

console.log(mesesAnio)
console.table(mesesAnio)

console.log(`El mes del año en la posicion -1 es:  ${mesesAnio[-1]}`)
console.log(`El terceeavo mes del año en la posicion es:  ${mesesAnio[12]}`)
console.log(`¿Que tuipo de dato es un arreglo?  ${typeof(mesesAnio)}`)








//Funciones y metodos de Arreglos 
//Los metodos de un objeto siempre son invocados usamdo un . y al termino  se delimitan los para,etros entre (), en caso de que no lleve (), no es un metodo si no una propiedad 
console.log("%c3.- Funciones y etodos de los Arreglos(Array Methos or Array Functions) ", style_console);

console.log("Como saber cual es el tamaño del arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`Que pasa con los multidimensionales `)
console.log(`matriz de un arreglo de tamaño: ${matriz.length}`)
console.log("mmmm, eso me da el tamaño de numero de filas de la matriz , pero como saber el numero de columnas ?")
console.log(`la matriz tiene un numero de ${matriz[0].length}`)

console.log("Y para las irregulares?")
//Para l dimension de una matriz irreglas podemos hacer el uso del ciclo  

let numeroFilas= matrizIrregular.length
for(let i = 0;i<numeroFilas; i++){
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)
}
