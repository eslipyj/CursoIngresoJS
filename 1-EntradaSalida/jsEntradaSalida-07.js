/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
//cada llave abre un scou
//las variables nunca se pueden llamar igual que el resultado
{
	//declaramos las variables
	var uno;
	var dos;
	var suma;
	var resultado="";

	//seteamos la variable de input
	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	//parseInt toma texto y lo transforma a número y lo almacena en el dato entre ("");
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

function restar() {
	var uno;
	var dos;
	var resultado = "";

	uno = document.getElementById("txtIdNumeroUno").value;
	dos = document.getElementById("txtIdNumeroDos").value;

	resultado = " la resta es ";
	resultado = resultado + (parseInt(uno) - parseInt(dos));

	alert(resultado);

}

function multiplicar() {
	var uno;
	var dos;
	var resultado = "";

	uno = document.getElementById("txtIdNumeroUno").value;
	dos = document.getElementById("txtIdNumeroDos").value;

	resultado = " la multiplicación es ";
	resultado = resultado + (parseInt(uno) * parseInt(dos));

	alert(resultado);
}

function dividir() {
	var uno;
	var dos;
	var resultado = "";

	uno = document.getElementById("txtIdNumeroUno").value;
	dos = document.getElementById("txtIdNumeroDos").value;

	resultado = " la división es ";
	resultado = resultado + (parseInt(uno) / parseInt(dos));

	alert(resultado);
}

