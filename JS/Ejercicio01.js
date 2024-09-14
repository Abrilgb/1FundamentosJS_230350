// EJERCICIO 01: Declaracion de variables 

var miNombre="Abril"
var misApellidos ="Guzman Barrera";
var miEdad=32;

//Nota: the bug significa depurar, los repara 

console.warn("--- Declaracion de variables usando: VAR");
console.log("Intentando leer las variables: " , miNombre, misApellidos );
console.log("Ya que ambas fueron inicializadas vuelvo intentar a leerlas:", miNombre, misApellidos,);

// una variable puede cambiar de valor en el proceso de ejecucion del programa 

//Const 

console.warn("---- Dexclaracion de constantes usando : CONST");
const miUniversidad="UT Xicotepec";
const miMatricula="230350";

console.log("Hola, " , miNombre, " " , misApellidos, "Se que estudias actualmente en: ", miUniversidad, " asignaron la matricula:", miMatricula, "y tienes una edad de : ", miEdad, "años." );

console.log("Analizando los datos puedo deducir que:")
console.log("miNombre es el tipo:", typeof(miNombre));
console.log("miApellido es del tipo:", typeof(misApellidos));
console.log("miUniversidad es del tipo: ", typeof(miUniversidad));
console.log("miMatricula es del tipo:",typeof(miMatricula));
console.log("miEdad es del tipo:", typeof(miEdad));

//LET 

let miFechaNacimiento="17-10-2005"
let miColorFavorito;

console.warn("--- Dexclaracion de Variable Locales usando : LET ");
console.log("Genial, te vot conociendo mejor, ahora se que tu naciste el:", miFechaNacimiento, "y tu color favorito es mmmmmmmm dejame pensar....");
miColorFavorito="Naranja";
console.log(`Creo que es ${miColorFavorito}, le atine?`);
console.log("Analizando los datos puedo decir que:");
console.log("miColorFvaorito es del tipo:", typeof (miColorFavorito));
console.log("miFeachadeNacimiento es del tipo: ",typeof (miFechaNacimiento));