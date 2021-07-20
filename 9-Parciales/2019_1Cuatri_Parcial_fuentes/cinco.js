//AUTOR:Slipyj,Emanuel 
//ENUNCIADO:Parcial2019Cinco
/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
function mostrar() {
    var continente;
    var porcentaje;
    var valorDia;
    var medioDePago;
    var dias;
    var precioBruto;
    var precioFinal;

    valorDia = 100;
    porcentaje = 0;
    continente = document.getElementById("Marca").value;
    dias = parseInt(prompt("Indique cantidad de días"));
    precioBruto = valorDia * dias;

    switch (continente) {
        case "América":
            medioDePago = prompt("Indique medio de pago: Debito/mercadoPago/Efectivo");
            switch (medioDePago) {
                case "Debito":
                    porcentaje = 60;
                    break;
                default:
                    porcentaje = 50;
                    break;
            }
            break;
        case "África":
            medioDePago = prompt("Indique medio de pago: Debito/mercadoPago/Efectivo");
            switch (medioDePago) {
                case "mercadoPago":
                case "efectivo":
                    porcentaje = 75;
                    break;
                default:
                    porcentaje = 60;
                    break;
            }
            break;
        case "Europa":
            medioDePago = prompt("Indique medio de pago: Debito/mercadoPago/Efectivo");
            switch (medioDePago) {
                case "debito":
                    porcentaje = 35;
                    break;
                case "mercadoPago":
                    porcentaje = 30;
                    break;
                default:
                    porcentaje = 25;
                    break;
            }
            break;
        default:
            porcentaje = -20;
            break;
    }

    porcentaje = precioBruto * porcentaje / 100;
    precioFinal = precioBruto - porcentaje;

    alert(precioFinal);
}
