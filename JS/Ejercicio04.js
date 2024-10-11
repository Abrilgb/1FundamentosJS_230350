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
console.log(`¿Que tipo de dato es un arreglo?  ${typeof(mesesAnio)}`)

const saludar =  function(nombreUsuario){return `Hola, ${nombreUsuario}!`}

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)
let arreglomixto=["String",5,86.25,-200,-.1586,Symbol("March"), 'Z', false,null, BigInt(6454444444444444444444444444444444146),true,{latitud:"20° 18' 0\" N" , longitud:"97° 58' 00\" W",altitud:796},saludar]

console.log(arreglomixto);
console.table(arreglomixto);
console.log(typeof(arreglomixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[0] = ${arreglomixto[0]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[1] = ${arreglomixto[1]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[2] = ${arreglomixto[2]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[3] = ${arreglomixto[3]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[4] = ${arreglomixto[4]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[5] = ${arreglomixto[5].toString} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[6] = ${arreglomixto[6]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[7] = ${arreglomixto[7]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[8] = ${arreglomixto[8]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[9] = ${arreglomixto[9]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[10] = ${arreglomixto[10]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[11] = ${arreglomixto[11]} y es del tipo: ${(typeof(arreglomixto))}`)
console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[12] = ${arreglomixto[12]} y es del tipo: ${(typeof(arreglomixto))}`)

//Funciones y metodos de Arreglos 
//Los metodos de un objeto siempre son invocados usamdo un . y al termino  se delimitan los para,etros entre (), en caso de que no lleve (), no es un metodo si no una propiedad 
console.log("%c3.- Funciones y etodos de los Arreglos(Array Methos or Array Functions) ", style_console);

let matriz= [[1,2,3,4],['a','b','c','d']];
// esta es una matriz regular de 4 x 4

console.log(matriz);
console.table(matriz);

console.log("Declarando una matriz irregular");

const matrizIrregular=[["Juan","Pedro","Maria","Inés"],[true,false,null],[9.2]]

console.log(matrizIrregular);
console.table(matrizIrregular);

// Accediendo a los valores de una matriz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`)

//Accediendo a los valors de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz irregular")
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][2]}`)
console.log(`Elemento en la posición [2][0]: ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posición [1][2](¿Es Maria mayor de edad?): ${matrizIrregular[1][2]}`)


console.log("Como saber cual es el tamaño del arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
//console.log(`arregloMixto es un arreglo de tamaño: ${arreglomixto}`);
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
console.table(arreglomixto)
console.log("Agregamos la palabra : \"Hola\", como nuevo elemto")
arreglomixto.push("Hola")
console.log("Yb tambien agregamos el numero 215599484663.2566145898, siendo este un BigInt ")
arreglomixto.push((-215599484663.2566145898));
console.log("Despues de estas operciones el arreglo queda cn los siguintes elementos: ")
console.table(arreglomixto)

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
estudiantes.pop()
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
Object.freeze(signosZodiacales);

//Filtrado de datos 
console.log("%c11.- Fitrado de elemto dentro de un arreglo (FILTER) ", style_console);
console.table(estudiantes)
//antes de filtrara datos tenemos el arreglo con dies elementos 
estudiantes.push("Angel Rufino");
estudiantes.push("Esther Gonzales");
estudiantes.push("Lorena Galindo");
estudiantes.push("Jonathan Ramirez");
estudiantes.push("Angel Rufino");
estudiantes.push("Ailton Airtiaga");
estudiantes.push("Tania Ibarra ");
console.table(estudiantes);

Object.freeze(estudiantes)
//es un metodo que recorre los elemetos de un arreglo haciendo alguna tarea en especifico, lo que temos que considerara es que este nuevo arreglo resultante e su objeto muevo que puede ser mutable
console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes= estudiantes.filter((estudiante,index)=> index<5);
console.log("Prueba 1")
console.table(nuevoEstudiantes);
console.log("Prueba 2")
console.table(filtrarprimeros5(estudiantes))

//filtarar a los estudinates que su nombre tenga mas de 15 caracteres 
let nuevoEstudiantesNombre= estudiantes.filter((estudiante)=> estudiante.length>15);
console.table(nuevoEstudiantesNombre)




//intentamos modificar el arreglo inmutabole 
//estudiantes.pop();
//console.table(estudiantes);


//intentamos modifixcar el nuevo arreglo que no a sido congelado 
nuevoEstudiantes.unshift("Diego Tecorralco");
console.table(nuevoEstudiantes);

function filtrarprimeros5(estudiantes){
    let  listaFiltrada
    for (let i=0;i<0;i++){
        listaFiltrada(pushestudiente[i]);
    }
    return listaFiltrada;
}

//filtrado de datos

console.log("%c12.- Filtrado de elementos de un arreglo utilizando el mertdodo map en el que necesitamos transformarlos ", style_console);
console.log("Imprimirmos los elementos acatuales de Zignos sodiacales ")
console.table(signosZodiacales);

//

console.table(signosZodiacales.map(signoZodiacal=>signoZodiacal.toUpperCase()));
//Redujiendo eleemtos de un arreglo, se usa cuando se debe hacer operaciones automaticas o cuantitaticvas a aun arreglo, como optener totales, reducir la lista mas simplificada 

const costosListaCompras=[15,52.50,16.90,32.50,28,105,45.2,94.10]
//Cómo podemos calcular el total de una lista de costos de un carrito de compras 
console.log("Los precios son:")
console.table(costosListaCompras)
console.log(`El total de la compra es: ${costosListaCompras.reduce((total,precio)=>total+precio,0).toFixed(2)}`)





