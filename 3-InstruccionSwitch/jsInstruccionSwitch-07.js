function mostrar()
{
	var destino;
	
	destino=document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
			alert("Se encuentra en el Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este");
			break;
	
		default:
			alert("Se encuentra en el Oeste");
			break;
	}

}//FIN DE LA FUNCIÓN