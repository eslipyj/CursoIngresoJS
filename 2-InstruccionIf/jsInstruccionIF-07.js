//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio7
function mostrar()
{
	var edad;
	var estado;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estado=document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero" ){
		alert("Es muy pequeño para NO ser soltero");
	}
	//si quisiera tomar los datos de la linea de texto y no de las opciones es exactamente igual. Ej:
	/*
	var edad;
	var estado;
	var edadValida;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estado=document.getElementById("estadoCivil").value;
	edadValida=edad < 18 && edad >=0;

	if (estadoCivil != "Soltero" && edadValida ){
		alert("Es muy pequeño para NO ser soltero");
	}
	*/

}//FIN DE LA FUNCIÓN