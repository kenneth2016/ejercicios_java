

var saludoFormal = function(nombre){
	return "Buenas tardes " + nombre + "gusto en saludarlo";
}

var saludoInformal = function(nombre){
	return "como le vainas " + nombre + "?";
}

var saludar = function(saludo, nombre) {
	return saludo(nombre);
}

var persona = "Kenneth";



if (persona == "Kenneth"){
	console.log(saludar(saludoInformal,persona))

} else{
		console.log(saludar(saludoFormal,persona))
}
