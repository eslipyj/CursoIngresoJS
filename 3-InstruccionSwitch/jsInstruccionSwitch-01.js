function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!.");
	
		default:
			break;
	}

}//FIN DE LA FUNCIÓN