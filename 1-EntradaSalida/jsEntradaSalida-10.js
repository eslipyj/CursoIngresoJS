/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
//en el bis,debemos lograr el porcentaje que quiera el usuario
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var porcentajeDeDescuento;
	var calculo;
	var resultado;

	sueldo=parseInt(document.getElementById("txtIdImporte").value);
	porcentajeDeDescuento=prompt("ingrese el número del % a descontar");
	sueldo=parseInt(sueldo);
	porcentajeDeDescuento= parseInt(porcentajeDeDescuento);
	calculo=sueldo * (porcentajeDeDescuento/100);
	resultado=sueldo - calculo;
	document.getElementById("txtIdResultado").value=resultado;
}
