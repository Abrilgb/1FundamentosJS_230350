//Repaso de objetos 
const bg ="linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console=`background:${bg}; color: white;
border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`

// Personalizacion de las salidas dfe consola 
console.warn("Practica 05 repaso de Objetos en JvaScript");

//VARIABLES INDEPENDIENTES 
console.log("%c1.- Variables Independientes", style_console);

//Declaramos valores independientes relacionados a un producto 

let Producto_Nombre=" Computadora Gamer Laptop 17\" ";
let Producto_Marca = "ASUS";
let Producto_Modelo = " TUF 17";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707W-HX221W"); 
let Producto_Stock= 15;
let Producto_Imagen= null;
let Producto_Barcode ;
let Producto_Categoria= ["Electronicos", "Compuitacion", "Gamming", "Promociones buen fin ", "Mejor valorados "];


//Accedemos a los valors actuales de las caracteristicas del producto de manera independiente 

console.log(`"Los datos del PRODUCTO son: \n 
    Nombre ${Producto_Nombre}, Tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categoria}, Tipo de dato< ${typeof(Producto_Categoria)}>`);

console.log("En el caso del SKU al ser symbol, no se puede conectara la cadena de impresion anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));

//Ahora lo declaramos como un objeto 
console.log("%c2.- Obejtos", style_console);

let Producto =
{
    Nombre: "Tenis Deportivos",
    Marca: "Nike",
    Modelo: "Jordan 24",
    Precio: "3361.25",
    Disponibilidad:false,
    Stock: 0,
    Imagen:"../Aseets/products/sneakers/JORDAN.png",
    SKU: "DZ5485-612",
    Barcode:null,
    Categorias: ["Deportes", "Tenis", "Juvenil"]
}

//Ahora leemos el objeto 
console.table(Producto);



//Para acceder a las propiedades del objeto utilanzodoun "." y el nombre de la propiedad 
console.log("Accediendo a las propiedades especificas del PRODUCTO ");
console.log(`Nombre Completo del PRODUCTO ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo} `);
console.log(`Precio: ${Producto.Precio}`);
if (Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles`);


console.log("%c3.- Destructuracion de Objetos ", style_console);


let Producto2 =
{
    Clave:3216,
    Nombre: "Lentes para Sol",
    Marca: "Oakley",
    Modelo: "QNTM Kato",
    Precio: "3361.25",
    Disponibilidad:true,
    Stock: 5,
    Imagen: "../Aseets/products/sungalsses/KatoRed.png",
    SKU: "009481D-0356",
    Barcode:888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador= 
{
    Calave:3216,
    Nombre:"Abril",
    Apellidos: "Guzman Barrera",
    Tipo:"Frecuente",
    Correo: "aguzm@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 14000.00
}

let Pedido=
{

     Producto_Clave: 316,
     Comprador_Clave: 3216,
     Cantidad: 2,
     Estatus: "Carrito de Compra",
     TipoPago:"Tarjeta de credito"

}

//En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su dsaldo a favor 

let{ Precio: Producto_Precio2}= Producto2;
let { Cantidad: Pedido_Cantidad}= Pedido;
let {SaldoActual:Cliente_SaldoActual }=Comprador;
let Costo_Compra= Producto_Precio * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carritpo de compras ${Pedido_Cantidad} unidades, con un costo de: ${Costo_Compra}  `);
if(Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficinte");

//Actualizar el valor de los Objetos 
console.log("%c4.- Actualizacion de los valores de las propiedadezs de un objeto  ", style_console);
console.log(`El objeto actualmente tiene las sigueientes valores`);
console.log( JSON.stringify(Producto2, null, 2));
//Convierte el objeto a una cadena para evitar problemad co la referencia 
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debeb ser a tuali9zado... de $6,829.00 a $6915.50`)

//Parar modificar elm v alor de un objeto basta con igualar el nuevo valor de la propiedad deseada 

Producto2.Precio=6915.50;
console.log(`Los nuevos valores del producto son :`)
console.log( Producto2);

//¿Puedo cambiar no solo el valor si no el tipo de dato del un obejto en JS?
console.log(`----------------------------------------`);
console.log(`El objeto actuualemnte tiene los siguientes valores`);
let= tipoDisponibilidad = typeof (Producto.Disponibilidad)
console.log( `El tipo de dato de la disponibilñidad es : ${tipoDisponibilidad}`);
console.log( JSON.stringify(Producto2, null, 2)); //Disponibilidad Booleano
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2)
console.log(`El tipo de dato de la disponibilñidad es : ${nuevoTipoDisponibilidad}`)

console.log("%c5.- Agrgar nuevas propiedades al obejto ", style_console);
//Parar agregar una nueva propiedad utilizaremos el nombre del obejto de los corchetes [  ] y el nuevo de propiedad co s su valor por defecto
console.log("Los datos actuales de un comprador son:")
console.table(Comprador)
Comprador[`Direccion`] = "Nicolas Bravo No. 131, Interiro C, Xicotepec de Juarez, Puebla, Mexio"
Comprador[`Tipo`]="Nuevo cliente"
Comprador[`ActividadReciente`]= true
Comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las propiedades Direccion, Tipo, ActividadReciente y TotalCompras....")
console.table(Comprador)

//Elegir propiedades existentes de un objeto 
console.log("%c6.- Eliminar propiedades del objeto ", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificacion")
console.table(Pedido)
delete Pedido.TipoPago
console.group("Despues de la modificacion ")
console.table(Pedido)


//