//AUTOR: Slipyj , Emanuel
//ENUNCIADO: Parcial 1
//Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
function mostrar()
{
    var lados;
    var perimetro;
    var resultado;
    var mensaje;

    lados=prompt("valor en número del lado");
    lados=parseInt(lados);
    perimetro=lados * 3;
    resultado=perimetro;
    mensaje="Nuestro perimetro es ";
    mensaje=mensaje + resultado;
    alert(mensaje);
}
