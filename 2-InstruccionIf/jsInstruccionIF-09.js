//AUTOR:Slipyj,Emanuel
//ENUNCIADO:Ejercicio9
function mostrar()
{
	var random;

	//Números entre 0 y 0.99999999
	random=Math.random();
	//Numeros entre 0 y 9.99999999
	random=Math.random()*10;
	//Numeros redondos entre 0 y 9
	random=parseInt(Math.random()*10);
	//Numeros desde 1 a 10
	random=parseInt(Math.random()*10)+1;

	alert(random);
}//FIN DE LA FUNCIÓN

/*
	var numero;
	var maximo;
	var minimo;

	maximo=10;
	minimo=1;
	//round redondea hacia el mas cercano
	numero=Math.round(Math.random()*(maximo - minimo) + minimo);

	alert(numero);

*/