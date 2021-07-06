/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;

	resultado=" la suma es ";
	resultado=resultado +(parseInt(uno)+parseInt(dos));

	alert(resultado);
}

