/*2.	Para el departamento de Construcción:
//AUTOR: Slipyj , Emanuel
//ENUNCIADO: Tp 2
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetroLargo;
    var perimetroAnchos;
    var suma;
    var resultado;
    var mensaje;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseInt(largo);
    ancho=parseInt(ancho);
    largo=largo * 2;
    ancho=ancho * 2;
    perimetroLargo=largo * 3
    perimetroAnchos=ancho * 3
    suma=perimetroLargo + perimetroAnchos;
    resultado=suma;
    mensaje= "se debe comprar "
    mensaje= mensaje + resultado
    mensaje=mensaje + " metros de alambre"
    alert(mensaje);
    document.getElementById("txtIdLargo").value="";
    document.getElementById("txtIdAncho").value="";

}
function Circulo () 
{
	var radio;
    var diametro;
    var pi;
    var perimetro;
    var cantidadDeHilo;
    var resultado;
    var mensaje;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseInt(radio);
    diametro=radio * 2;
    pi=3.1416;
    perimetro= pi * diametro;
    cantidadDeHilo=perimetro * 3;
    resultado=cantidadDeHilo;
    mensaje="la cantidad de alambre que debe comprar es "
    mensaje=mensaje + resultado
    mensaje=mensaje + " metros"
    alert(mensaje);
    document.getElementById("txtIdRadio").value="";
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cementoTotal;
    var calTotal;
    var mensaje

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseInt(largo);
    ancho=parseInt(ancho);
    area= largo * ancho;
    cementoTotal=area * 2;
    calTotal=area * 3;
    mensaje="se debe comprar ";
    mensaje=mensaje + cementoTotal;
    mensaje=mensaje + " bolsas de cemento ";
    mensaje=mensaje + " y ";
    mensaje=mensaje + calTotal ; 
    mensaje=mensaje + " bolsas de cal"
    alert(mensaje);
    document.getElementById("txtIdLargo").value="";
    document.getElementById("txtIdAncho").value="";
}