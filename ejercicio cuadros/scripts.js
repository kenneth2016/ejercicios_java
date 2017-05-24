var btncrear = document.getElementById("boton")
var barra= document.getElementById("input") 
var container = document.getElementById("contenedor")
var color = document.getElementById("seleccion")

btncrear.onclick = function() {

	for(var i = 0; i < (barra.value); i++) {
		var cuadro= document.createElement("div");
		cuadro.setAttribute("class", "squares " + color.value);
		document.getElementById("contenedor").appendChild(cuadro);
	}
	 
 }



