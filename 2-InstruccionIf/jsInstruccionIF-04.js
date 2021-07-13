//AUTOR:Slipyj,Emanuel
//ANUNCIO:Ejercicio4
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad >=13 && edad<=17){
		alert("es adolescente");
	} else{
		alert("No es adolescente");
	}
//preguntar si se encuentra entre un rango de edad y otro
	/*AND &&
	E1 E2 Sa
	1   1  0
	1   0  0
	0   1  0
	0   0  0
	/* Si el primero es falso no evalua mas nada y se va al else
	or || 124
	1   1  1
	1   0  1
	0   1  1
	0   0  0
*/
}//FIN DE LA FUNCIÓN
