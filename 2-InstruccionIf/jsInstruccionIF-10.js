//AUTOR:Slipyj,Emanuel
//ENUNCIADO:Ejercicio10
function mostrar()
{
	var random;

	random=Math.random();
	random=Math.random()*10;
	random=parseInt(Math.random()*10);
	random=parseInt(Math.random()*10)+1;

	if (random >= 9 && random <=10) {
		alert("Exelente");
	}else if (random <=8 && random >=4) {
		alert("Aprobo");
	}else {
		alert("Vamos,la proxima se puede");
	}

	/*Swich (random){
		case 10:
			alert("Exelente");
			break;
		case 9:
			alert("Exelente");
			break;
		case 8:
			alert("Aprobo");
			break;
		case 7:
			alert("Aprobo");
			break;
		case 6:
			alert("Aprobo");
			break;
		case 5:
			alert("Aprobo");
			break;
		case 4:
			alert("Aprobo");
			break;
		default:
			alert("Vamos,la proxima se puede")
	}
*/
}//FIN DE LA FUNCIÓN