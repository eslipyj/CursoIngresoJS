//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio3
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad >=18){
		alert("Es mayor de edad");
	} else {
		alert("No es mayor de edad");
	}
	/* else{
		//se ejecuta solo cuando no se cumple la condición
		alert("No es mayor de edad")
	}
	*/
	
}