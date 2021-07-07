/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10%
//en el bis,debemos lograr el porcentaje que quiera el usuario
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentajeDeAumento;
	var calculo;
	var resultado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	porcentajeDeAumento=prompt("ingrese el número del % a aumentar");
	sueldo=parseInt(sueldo);
	porcentajeDeAumento= parseInt(porcentajeDeAumento);
	calculo=sueldo * (porcentajeDeAumento/100);
	resultado=calculo + sueldo;
	document.getElementById("txtIdResultado").value=resultado;
}
