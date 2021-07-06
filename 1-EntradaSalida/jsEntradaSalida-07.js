/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	
	resultado=" la suma es "
	resultado=resultado + (parseInt(uno) + parseInt(dos));

	alert(resultado)
}

function restar()
{
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	
	resultado=" la resta es "
	resultado=resultado + (parseInt(uno) - parseInt(dos));

	alert(resultado)
	
}

function multiplicar()
{ 
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	
	resultado=" la multiplicación es "
	resultado=resultado + (parseInt(uno) * parseInt(dos));

	alert(resultado)
}

function dividir()
{
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroUno").value;
	dos=document.getElementById("txtIdNumeroDos").value;
	
	resultado=" la división es "
	resultado=resultado + (parseInt(uno) / parseInt(dos));

	alert(resultado)
}

