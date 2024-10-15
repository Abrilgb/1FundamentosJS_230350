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

console.log("%c8.- Ciclo Condicionales, que se ejecuta al menos una vez -(DO WHILE)",style_console);

//Simulamos una lista de episodios de una temporada
let episodios = [
    "Episodio 1: El Comienzo",
        "Episodio 2: El Libro",
            "Episodio 3: Tiempos Difíciles",
                "Episodio 4: Diversión el Sabado por la Mañana",
                    "Episodio 5: La opción para el Armagedón"
];

let indice = 0;
let continuarviendo = true; //Esta variable simula la desición del usuario de continuar viendo
do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //simulamos la reproducción del episodio
    indice++;

    //Simulamos una pregunta al usuario si desea continuar viendo
    if(indice < episodios.length){
        continuarviendo = confirm("¿Deseas continuar con el siguiente episodio?");
    }else{
        continuarviendo = false; //Cuando se acaba la lista de episodios
    }
}while(continuarviendo && indice < episodios.length);

console.log("Fin de la reproducción");

//Ciclo para recorer objetos iterables cómo mapas, arreglos, cadenas y conjuntos de datos
console.log("%c9.- Ciclos para recorrer elementos finitos  -(FOR ... OF)",style_console);
//Se crea un arreglo de las series
let seriesTrending=[
    {nombre: "Heartstoper", temporadas: 3, totalViwers:"1.5M", totalReprods: "3.0M"},
    {nombre: "Good Omens", temporadas: 2, totalViwers:"6.5M", totalReprods: "10M"},
    {nombre: "The winix", temporadas: 3, totalViwers:"3.2M"},
    {nombre: "Loki", temporadas: 2, totalReprods: "250K"},
    {nombre: "Jovenes Altesas", temporadas: 4}
];

//Usando FOR .. OF para recorrer la lista
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try{
    console.log(`La última serie leida fué ${serie.nombre}`) //No va a fusionar por la variable serie ya no existe ya que su alcance solo estuvo durante el ciclo
}
catch(error){
console.log("Mensaje de error: "+error.message)
}

console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos  -(FOR ... IN)",style_console);

//Usando FOR ... IN para recorrer cada serie
for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log(`--------------------`);
}

console.log("%c11.- Ciclos Interrumpidos para cada uno de los elementos del arreglo -(FOR ... EACH)",style_console);

//La lista de series de TV tending con temporadas, viwers y reproducciones
let seriesTrending2 = [
    {nombre: "Heartstoper", temporadas: 3, viwers:8000000, Reproduccioness: 2500000},
    {nombre: "SEX EDUCATION", temporadas: 2, viwers: 120000000, Reproducciones: 400000000},
    {nombre: "The winix", temporadas: 3, viwers: 70000000, Reproducciones: 25000000},
    {nombre: "Loki", temporadas: 2, viwers: 900000, Reproducciones: 30000000},
    {nombre: "Jovenes Altesas", temporadas: 4, viwers: 60000000, Reproducciones:18000000},
    {nombre: "The Walking Dead", temporadas: 16, viwers: 16000000, Reproducciones:36000000}
];

//usando forEach para recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie,index)=>{
    let calificacion = (serie.Reproducciones / serie.viwers).toFixed(2); //Calcula la calificación y la redondea a 2 decimales
    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporadas: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viwers}:`);
    console.log(`Reproducciones: ${serie.Reproducciones}:`);
    console.log(`Calificación: ${calificacion}:`); //Muestra la califiación
    console.log(`---------------`);
});


console.log("%c12.- Ciclos para Filtrar y para Transformar -(FILTER ... MAP)",style_console);
//Usando Filter para filtrar, y map para transformar la información
//Lista de series que queremos verifcar
let seriesDeseadas = ["The Walking Dead", "The Boys","Loki"];

//Usando map e includes para filtrar y obtener los nombres de series con 3 Temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie=> serie.temporadas <=3)// Filtramos las series que tienen 3 Temporadas
.map(serie =>serie.nombre) //Obtenemos solo los nombres de estas Series
.filter(nombre =>seriesDeseadas.includes(nombre));// Filtramos las que están en la lista de series deseadas

//Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada");
console.table(seriesConTresTemporadas);
