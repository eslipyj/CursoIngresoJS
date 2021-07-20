function mostrar()
{
	var destino;
	
	destino=document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;
	
		default:
			alert("Hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN