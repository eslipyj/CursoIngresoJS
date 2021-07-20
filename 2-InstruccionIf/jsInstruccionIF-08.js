//AUTOR:Slipyj,Emanuel
//ENUNCIADO:Ejercicio8
function mostrar()
{
	var edad;
	var estado;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estado=document.getElementById("estadoCivil").value;

	if (estado == "Soltero" && edad >= 18){
		alert("Es soltero y no es menor");
	}
	// if(estado == "Soltero" && edad <=17)
	// if(estado == "Soltero" && edad > 17)
	// if(estado == "Soltero" && !(edad < 18))
	// if( !(edad <18 || estado != "Soltero"))
	//Son opciones correctas.


}//FIN DE LA FUNCIÓN