//AUTOR:Slipyj,Emanuel 
//ENUNCIADO:Parcial2019cuatro  
/* (IF).Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10"
*/
function mostrar() {
    var num1;
    var num2;
    var resultado;

    num1 = prompt("Ingresar un número");
    num2 = prompt("Ingresar otro número");

    if (num1 == num2) {
        resultado = num1 + num2;
    }
    else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 > num2) {
            resultado = num1 - num2;
            if (resultado > 10) {
                resultado = ("La resta es " + resultado + " y supero el 10.");
            }
        }
        else {
            resultado = num1 + num2;
        }
    }
    alert(resultado);
}
