//Cotizacion de seguros
//1- Pantalla de inicio y saludo
//2- hacer 5 intentos y si no bloquear usuario
//3- si ingresamos dar las siguientes opciones
//  1-auto
//  2-moto
//  3-hogar
//  4-bicicletas
// ingresamos el importe que queremos asegurar
// nos da el resultado de cuanto tenemos que pagar en 6 meses
// mensaje de salida

let Pass = "1234"
let ingreso = false


for (let i = 5; i >= 1; i = i - 1) {
    let ingresar = prompt("Ingresa tu Password");
    if (Pass === ingresar) {
    alert("Gracias por ingresar a tu compania de confianza");
    ingreso = true;
    break;
} else {
    alert("Hay un error en el ingreso");
}
}
console.log (ingreso);
if (ingreso) {
        let auto = 30;
        let moto = 20;
        let hogar = 40;
        let bicis = 50;
        let cuotas = 6;
        auto = parseInt(auto);
        moto = parseInt(moto);
        hogar = parseInt(hogar);
        bicis = parseInt(bicis);
        let definicion = ("Usted abona 6 cuotas de su seguro de ");
        let opcion = prompt(
        "Eleji una opcion para continuar: \n1 - Auto. \n2 - Moto. \n3 - Hogar. \n4 - Bicicletas \n0 - Para salir de la aplicacion."
);
function importeAbonar(a,b,c){
         return a * b / c;
}
while (opcion != "0") {
        if (opcion == "1") {
        let ingreseValorAuto = prompt("Ingresa el Monto de tu auto a asegurar");
        if (ingreseValorAuto == 0)
            console.log("No puede ingresar valor 0")
        else{
            consultaValorAuto = importeAbonar(+ingreseValorAuto,auto,cuotas);
        console.log(definicion + consultaValorAuto);
        }
        }
        else if (opcion == "2"){ 
        let ingreseValorMoto = prompt("Ingresa el Monto de tu moto a asegurar");
        consultaValorMoto = importeAbonar(+ingreseValorMoto,moto,cuotas);
        console.log(definicion + consultaValorMoto);
        }
        else if (opcion == "3"){ 
        let ingreseValorHogar = prompt("Ingresa el Monto de tu Hogar a asegurar");
        consultaValorHogar = importeAbonar(+ingreseValorHogar,hogar,cuotas);
        console.log(definicion + consultaValorHogar);
        }
        else if (opcion == "4"){ 
            let ingreseValorBicis = prompt("Ingresa el Monto de tu Bicicleta a asegurar");
            consultaValorBicis = importeAbonar(+ingreseValorBicis,bicis,cuotas);
            console.log(definicion + consultaValorBicis);
            }
    opcion = prompt(
        "Eleji una opcion para continuar: \n1 - Auto. \n2 - Moto. \n3 - Hogar. \n4 - Bicicletas \n0 - Para salir de la aplicacion."
    );
    }
}else {
    alert("No tenes mas intentos");

}