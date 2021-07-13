//AUTOR:Slipyj,Emanuel
//ENUNCIADO:Ejercicio1DeIf
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	//comparo numeros asi...;
	//edad=parseInt(edad);
	//	if(edad==15);
	
	if(edad=="15"){
		alert("Niña bonita");
	}	
	
	alert("Fin de la funcion");
}
//15==15 :es true(numeros). si le pongo 3 "==="va a seguir siendo true
//"15"=="15" :es true(palabras). si le pongo 3 "==="va a seguir siendo true
//"15"==15 :es true(palabra igual a numero).si le pongo 3 "==="va a dar false	
//15=="15":es true(numero igual a palabra).si le pongo 3 "==="va a dar false
//existe el "!==" que significa que es distinto también.