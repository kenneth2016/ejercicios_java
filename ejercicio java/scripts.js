var btncrear = document.getElementById("boton")
var barra= document.getElementById("input") 
var container = document.getElementById("contenedor")
var color = document.getElementById("selccion")

btncrear.onclick = function() {

	for(var i = 0; i < parseINT(barra.value); i++) { resultado+="<h1>hola " + i + " </h1>"; }

}

