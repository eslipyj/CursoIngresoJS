//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio5
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad <13 || edad>17){
		alert("No es adolescente");
	}
}//FIN DE LA FUNCIÓN