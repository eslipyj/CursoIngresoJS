/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensaje;
	var nombre,mensaje;
	nombre=prompt("Ingresa su nombre");
	mensaje="su nombre es: "+nombre;
	document.getElementById("txtIdNombre").value=mensaje;
}

