//AUTOR:Slipyj,Emanuel
//ENUNCIADO:Parcial3
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
function mostrar()
{
    var precio;
    var porcentaje;
    var calulo;
    var resultado;
    var mensaje;
    
    precio=prompt("Indicar precio (ej: 10)");
    porcentaje=prompt("Indicar porcentaje de descuento(ej: 15)");
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);
    calulo=precio * (porcentaje/100);
    resultado=precio - calulo;
    mensaje= "El precio final es: " + resultado;
    mensaje=mensaje + " pesos."
    document.getElementById("elPrecioFinal").value=mensaje;

}
