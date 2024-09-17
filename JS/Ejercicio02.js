// undifined CUANDO UNA VARIEBLE ES CR4EADO PERO NO INCIALISADA (null)
console.warn("--- Tipo de dato UNDIFINED")
let cliente;
console.log(`El cliente es:`,  $(cliente));
console.olog(`El tipo de dato de la bvariable cliente es:  `, typeof(cliente));

cliente="Juan Romero"
console.log(`El cliente es: $(cliente)`);
console.log(`El tipo de dato de la variable cliente es`, typeof(cliente));

cliente= 19227
console.log(`El clientre es: $(cliente) `)
console.log(`El tipo de dato de la variable cliente es `, typeof(cliente));

console.log(`El cliente a realizado `);


//bolean-boleanos- TRUE/FALSE 

console.warn("---Tipo de dato : BOOLEAN (boleano - true/false)");
let esPremium="No lo se";
console.log(`¿Es el cliente premium?`, $(esPremium));
console.log(`El tipo de dato de la variable esPremium es:`, $(typeof(esPremium)));

console.olog("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es:`, $(typeof(esPremium)));

console.olog("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es:`, $(typeof(esPremium)));

console.log(`¿Es el cliente Premium? :`, $(esPremium));
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

if (esPremium)
    console.log("El cliente pago por usar su sevicio:")
else
console.log("El cliente recibe los sevicios gratuitos:")


// numeros 
var cantidad;
const costo_producto= 10.50
let saldo_cuenta=2500.0
let monto_transaccion;

console.warn("--- Tipo de dato - NUMBER (Numeros, positivos, negativos, decimales, flotantes)");
console.log(`"Tu saldo al dia de hoy es de:"`, $(saldo_cuenta), `Tipo de dato=`, $(typeof(saldo_cuenta)))
cantidad=0;
console.log(`Has elegido comprar`, $(cantidad) `de productos`)
console.log(`El importe total de la compra es:`, $((cantidad, costo_producto)))
saldo_cuenta=saldo_cuenta- (cantidad,costo_producto);
console.log(`Tu nuevo saldo es de : `, $(saldo_cuenta))

monto_transaccion=2500;
console.log(`Tu bono de :`, $(monto_transaccion) `ha sido recibido, tu nuevo saldo es de:`, $(saldo_cuenta,monto_transaccion));