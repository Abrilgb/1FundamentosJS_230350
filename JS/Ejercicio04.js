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

let arregloMixto






//Funciones y metodos de Arreglos 
//Los metodos de un objeto siempre son invocados usamdo un . y al termino  se delimitan los para,etros entre (), en caso de que no lleve (), no es un metodo si no una propiedad 
console.log("%c3.- Funciones y etodos de los Arreglos(Array Methos or Array Functions) ", style_console);

console.log("Como saber cual es el tamaño del arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto}`)
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


//Siempre agrega el elemento en la ultima posicion
console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH) ", style_console);
let estudiantes =["Angel Rufino", "Idai Vargas", "Daniel Bravo ", "Esther Gonzales", "Ailton Artiaga"]
console.log("Los elemetos actuañes del arreglo son:");
console.table(estudiantes)
console.log("Agregamops un nuevo estudiantes llamado: Abril Guzman")
estudiantes.push("Abril Guzman ")
console.log("Despus de agregar los elementos del arreglo son: ")
console.table(estudiantes)
console.log("Que pasa con los Mixtos ?")
console.log("El ArregloMixto actualamnete tiene los siguientes elementos")
console.table(arregloMixto)
console.log("Agregamos la palabra : \"Hola\", como nuevo elemto")
arregloMixto.push("Hola")
console.log("Yb tambien agregamos el numero 215599484663.2566145898, siendo este un BigInt ")
arregloMixto.push((-215599484663.2566145898));
console.log("Despues de estas operciones el arreglo queda cn los siguintes elementos: ")
console.table(arregloMixto)

console.log("%c5.- Agregar un nuevo elemento a un arreglo (UNSHIFT) EN LA POSICICON INICIAL ", style_console);
console.table(estudiantes)
console.log("Ahora agregamos a Abishai Flores, el comienso del arreglo.")
estudiantes.unshift("Abishai Flores");
console.log("La lista actual es: ")
console.table(estudiantes)

console.log("%c7.- Eliminar el elemento de un arreglo en la ultima pocicion (POP)", style_console);
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abril Guzman en la ultima opcion ")
console.pop()
console.log("Despus de eliminar el ultimo elemento el arreglon quedo de la siguiente manera  ")
console.table(estudiantes);

console.log("%c8.- Eliminar el elemento de un arreglo en la primera pocicion (SHIFT)", style_console);
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abishai Flores en la primera opcion ")
estudiantes.shift()
console.log("Despues de eliminar el primer elemento  el arreglo quedo de la siguiente manera")
console.table(estudiantes);

console.log("%c9.- Dividir un arreglo en un nuevo asrreglo con posiciones definidas (SPLICE)", style_console);
console.log ("El arreglo original tiene los siguientes arreglos:")
console.table(estudiantes)
console.log("Divir el arreglo en uno nuevo eliminando ciertos elementos en base a su posicion  ")
//Cuando la funcion esplice recibe un solo parametro eliminara los elementos de esa pocicion en adelante
estudiantes.splice(2)
console.table(estudiantes)

//elimina todos los elemetos que no esten ene ese rango 

estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Tania Ibarra")
estudiantes.push("Juvenal Viveros")
estudiantes.push("Marcos Rios")
estudiantes.push("Jonathan Baldemar")
console.log("Se hab agregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes);

console.log("Ahora ya tenemos elemtos suficientes para aplicar el metodo splice con dos parametros que seran : 3 5")
estudiantes.splice(3,5)
console.log("Resultado es:")
console.table(estudiantes)

//Splice sirve tambien para insertar elemetos en pociciones especificas, ahora necesitamos insertar a : "Antonio Ocpaco "entre "Angel" y "Idai"
console.log("Ahora vamos a insertar a \"Antonio Ocpaco\" entre Angel e Idai ")
estudiantes.splice(1,0,"Antonio Ocpaco");
console.log("Resultado es:")
console.table(estudiantes)

// Tambien splice sirve para remplaxzar elementos por otros 
console.log("Ahora remplazaremos al elemeto Angel por Brandomn Leon  ")
estudiantes.splice(0,1,"Brandon Leon ");
console.log("Resultado es:")
console.table(estudiantes);

console.log("%c10.- Metodos para la manipulacion de Arreglos  INMUTABLES", style_console);

const signosZodiacales = ["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"]

//Destructuracion de Arreglos 

let[signo1,,signo3,,,,signo7,,,,,]= signosZodiacales; //Desctructuracion parcial
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El tercer signo zodiacal es: ${signo3}`)
console.log(`El septimo signo zodiacal es: ${signo7}`)
//console.log(`El cuarto signo zodiacal es: ${signo4}`)

//Congelamos el arreglo volviendo INMUTABLE 
Objeto.freeze(signosZodiacales);




