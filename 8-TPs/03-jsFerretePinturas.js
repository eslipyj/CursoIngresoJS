/*3.	Para el departamento de Pinturas:
//AUTOR: Slipyj Emanuel 
//ENUNCIADO:Tp 3
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
    var calculo;
    var resultado;
    var mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);
    calculo=temperatura - 32;
    calculo=calculo / 1.8;
    resultado=calculo;
    mensaje=temperatura + " grados Fahrenheit,son ";
    mensaje=mensaje + resultado ;
    mensaje=mensaje + " grados Centigrados";
    alert(mensaje);
    document.getElementById("txtIdTemperatura").value="";
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var calculo;
    var resultado;
    var mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);
    calculo=temperatura * 1.8;
    calculo=calculo + 32;
    resultado=calculo;
    mensaje=temperatura + " grados Centigrados,son ";
    mensaje=mensaje + resultado ;
    mensaje=mensaje + " grados Fahrenheit";
    alert(mensaje);
    document.getElementById("txtIdTemperatura").value="";
}
