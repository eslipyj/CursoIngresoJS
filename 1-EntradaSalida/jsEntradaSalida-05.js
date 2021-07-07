/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaramos variables
	var nombre;
	var edad;
	var mensaje="";

	//seteamos la variable con lo ingresado en input
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;

	//cambiamos el input. texto concatenado = "usted se llama" + Nombre + "y tiene" + edad + "años";
	mensaje=" Usted se llama ";
	mensaje=mensaje + nombre; 
	mensaje=mensaje + " y tiene ";
	mensaje=mensaje + edad;
	mensaje=mensaje + " años";
	alert(mensaje);
}

