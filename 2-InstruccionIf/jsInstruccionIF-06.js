//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio6
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad >=18){
		alert("Es Mayor de edad");
	} else if (edad <=17 && edad>=13){
		alert("Es adolescente");
	} else if (edad<13){
		alert("Es niño");
	}
}//FIN DE LA FUNCIÓN