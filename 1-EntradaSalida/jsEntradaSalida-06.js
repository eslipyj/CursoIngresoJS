/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos las variables
	var uno;
	var dos;
	var suma;
	var resultado="";

	//seteamos la variable de input
	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	//sumo
	suma=uno + dos;
	resultado=" la suma es ";
	resultado=resultado + suma;
	//si quiero que al cerrar el alert vuelva a 0,cambio de lugar el "=" de izquierda a derecha
	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";
	alert(resultado);
}