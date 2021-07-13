//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio2
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	//si pongo
	//if(edad > 17) funciona,pero no es tan estricto el rango
	if(edad>=18){

		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN