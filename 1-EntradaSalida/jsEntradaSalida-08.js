/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var uno;
	var dos;
	var resultado="";

	uno=document.getElementById("txtIdNumeroDividendo").value;
	dos=document.getElementById("txtIdNumeroDivisor").value;
	
	resultado=" el resto es "
	resultado=resultado + (parseInt(uno) / parseInt(dos));

	alert(resultado)
}
