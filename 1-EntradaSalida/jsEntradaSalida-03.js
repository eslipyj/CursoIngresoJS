/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos las variables
	var nombreIngresado;
	//seteamos la variable con lo ingresado en el input
	nombreIngresado=document.getElementById("txtIdNombre").value;
	//cambiamos el input
	document.getElementById("txtIdNombre").value="";
	//Mostramos el valor ingresado
	alert(nombreIngresado);



}


