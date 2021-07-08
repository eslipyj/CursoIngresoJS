/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var resultado;

    precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    suma=precio1 + precio2 + precio3
    resultado=suma
    alert(resultado)
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;
    var resultado;

    precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    suma=precio1 + precio2 + precio3
    promedio=suma / 3
    resultado=promedio
    alert(resultado)
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var coniva;
    var resultado;

    precio1=document.getElementById("txtIdPrecioUno").value;
	precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    suma=precio1 + precio2 + precio3
    coniva=suma * 1.21
    resultado=coniva
    alert(resultado)
}