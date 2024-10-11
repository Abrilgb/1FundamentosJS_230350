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

console.log("%c4.-Manejo de Excepciones (TRY/ CATCH) ",style_console);
//En algunas pcaciones existiran errores que no son culpa del programa ,si no del usuario, la red, el SO o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecución
console.log("Intentamos dividir : 0/100, el resultado es:")
try{ //intenta 
    let result=0/100;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir : 0/10, el resultado es:")
try{ //intenta 
    let result=10/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir : a/10, el resultado es:")
try{ //intenta 
    let result="a"/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir la variable a/10, el resultado es:")
try{ //intenta 
    let result=a/0;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("Intentamos dividir el valor de la variable x entre el valor de la variable y, el resultado es:")
try{ //intenta 
    let x=8,y=2,result=x/y;  //dividir un netero entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error :"+ error.message)
}

console.log("%c5.- Control de Ciclos (BREAK/ CONTINUA)",style_console);

//En algunas ocaciones será importante detener un cliclo de manera abrupta para controlar casos especiales en un ciclo.....

console.log("Vamos a contar del 1 al 10....")
for(let num=1;num<=10;num++){
    console.log(num)
}
console.log("Ahora necesitamos que si llega al 7 pare de contar... suponiendo que solo por hoy es de mala suerte")
for( num=1;num<=10;num++){
    if (num==7)
        break;
    console.log(num)
}

console.log("Ahora necesitamos que si llega al 7 salte ese numero y continue")
for( num=1;num<=10;num++){
    if (num==7)
        continue;
    console.log(num)
}

console.log("%c6.- Ciclo Iterativo (FOR) ",style_console);
//Recorre de manera iterativa (i), de manera incremental o decremental

console.log("Los días de la semana son:")
let dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
for(let i=0;i<=dias.length;i++){
    console.log(dias[i])
}
console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=11;i >=0; i--){
    console.log(meses[i])
}

console.log("%c7.- Ciclo Condicionales -(WHILE)",style_console);
//Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutandose



let finDeSemana = false;
let mensaje = "";
let j = 0;

while (j < dias.length ) {
    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingooooo... zzzzZZZZzzz";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "San Lunes a chambiar";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Segundo dia de chamba a darle...";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Ombligo de semana !!....";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Es juebebes oh si oh si";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Es hoooy... es HOOOOOOOOOOOOOOOOOOOOY";
            break;
        case 6:
            finDeSemana = true;
            mensaje = "Sabadrink ☆*: .｡. o(≧▽≦)o .｡.:*☆";
            break;
    }
    if(!finDeSemana){
    console.log(`Dia ${j} ${dias[j]}`);
    console.log(`Mensaje del dia: ${mensaje}`);
    }
    j++;
}

