const bg ="linear-gradient(11deg, rgba(3,0,6,5) 0%, rgba(7,7,131,1) 23%, rgba(0,912,155,3) 86%)";

const style_console=`background:${bg}; color: white;
border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`


console.warn ("--- Practica 07 Arreglos de JS ");

console.log("%c1.- Condicionales -Si/Entonces (IF)", style_console);
//let fechaActual= new Date(2024,7,5);
let fechaActual= new Date();
console.log(`HOLA, LAFECHA DE HOY ES ${fechaActual.toString()}`);
const fechaLocalMX = fechaActual.toLocaleString(`es-MX`, 
    {

        weekday : `long`,
        year: `numeric`,
        month: `numeric`,
        day : `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second:`numeric`,
        hou12: false
    }
);

console.log(`en formato local (Mexico): ${fechaLocalMX}`);

//si es antes de las doce saluda con un buenos dias 
if(fechaActual.getHours()<12){
    console.log(`Buenos dias; la fecha de hoy es: ${fechaActual}`);
}

//
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año `);
}
else{
    console.log(`Estas en la segunda mitad del año `);
}

//que pasa si la validacion tiene varias opcdiones 
let anio= fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtono = new Date(anio, 8, 21);
let inicioInvierno = new Date(anio, 11, 21);
let estacion;

let horarioVerano =false;

if ( fechaActual >=inicioPrimavera && fechaActual< inicioVerano){
    console.log(`Estamos en  Primavera .... `)
    console.log("Inicia la floracion de ,uchas plantas...")
    console.log("Los dias son mas largos y las noches mas cortas...")
    console.log("Muchos animales despiertan de la hibernacion..")
    estacion="Primavera"
    horarioVerano=true;
}
else if  ( fechaActual >=inicioVerano && fechaActual< inicioOtono){
    console.log(`Estamos en  Verano .... `)
    console.log("En esta tempoprada abundan los dias Soleados y calurosos ")
    console.log("En esta temporada el indice de turismo vacasional sube ...")
    console.log("Mucha gente busca realizar actividades al aire ...")
    estacion="Verano"
    horarioVerano=true;


}
else if  ( fechaActual >=inicioOtono && fechaActual< inicioInvierno){
    console.log(`Estamos en  Otoño .... `)
    console.log("Los arboles suele cambiar su follaje  ")
    console.log("Se registran temperaturas mas templadas  ...")
    console.log("Los animales comienzan con la recolleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran")
    estacion="Otoño"
    horarioVerano=true;
}
else {
    console.log(`Estamos en  Invierno.... `)
    console.log("En esta temporada los dias son mas cortos y las noches mas largas  ")
    console.log("En algunas regiones suele NEVAR ...")
    console.log("Dado las bajas temperaturas, se recomeinda abrigarse ...")
    estacion="Invierno"
    horarioVerano=true;


}

console.log("%c2.- Operador Ternario (validacion:cumple:no_cumple", style_console);

//en java Script exista una operacion simplificada que valida si una conicion se cumple o no, y que en cada  caso 
const edadPersona=18;
const mayoriaDeEdadMX=18;
const myoriaEdadUS=21;
let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "eres mayor de edad ": "No eres mayor de edad "
console.log("Evaluando la mayoria de edad de ua persona ..")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoria de edad varuia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evalucion 

evaluarMayoriaEdad=(edad,pais)=>
    (edad>=18 && pais=== "MX")? `En ${pais} eres mayor de edad `: `En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoria de edad de ua persona en Estados Unidos ..")
console.log(evaluarMayoriaEdad(edadPersona, "US"));
console.log("Evaluando la mayoria de edad de ua persona en Mexico ..")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("%c3.-SWITCH - CASE (Eleccion por valor definido)", style_console);

//Calculando tu generacion en base a tu edad 

let anioNacimiento=2003;
let asignaGeneracion=(anioNacimiento)=>{

switch(true){
    case (anioNacimiento<1968):
        return "Baby Boomers"
    
    case (anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generacion X"
    
    case (anioNacimiento>1980 && anioNacimiento <=1994):
        return "Generacion Milenials"

    case (anioNacimiento>1994 && anioNacimiento <=2010):
        return "Generacion Z"
    
    case (anioNacimiento>2011 ):
        return "Alpha "
}
}
console.log(`Dado que nacio en el año 2005 soy de la generacion: ${asignaGeneracion(2005)}`);

