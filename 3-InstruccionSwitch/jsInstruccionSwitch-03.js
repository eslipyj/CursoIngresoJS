function mostrar()
{
	//tomo el mes
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
	
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}

}//FIN DE LA FUNCIÓN