//AUTOR: Slipyj,Emanuel
//ENUNCIADO: Parcial 2
//A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
function mostrar()
{
    var nombres;
    var pesoEl;
    var pesoElla;
    var suma;
    var promedio;
    var mensaje;

    nombres=prompt(" Sus Nombres Son ");
    pesoEl=prompt ("El Pesa");
    pesoElla=prompt(" Ella pesa ");
    pesoEl=parseInt(pesoEl);
    pesoElla=parseInt(pesoElla);
    suma=pesoEl + pesoElla;
    promedio=suma / 2;
    mensaje="Ustedes se llaman "
    mensaje=mensaje + nombres
    mensaje=mensaje + " y sus kg en total son ";
    mensaje=mensaje + suma;
    mensaje=mensaje + " y el promedio es ";
    mensaje=mensaje + promedio;
    alert(mensaje);


}
