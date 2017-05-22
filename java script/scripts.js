var botonCambiarRisa = document.getElementById("cambiar");

botonCambiarRisa.onclick = function() {

	var texto = "waka waka:  ";

	for (var i = 0; i < 10; i++) {
	texto += i;
	}

	var risa = document.getElementById("risa");
	risa.innerHTML = texto;
}

/////////////////////////////////

var nombre = document.getElementById("nombre");
var titulo = document.getElementById("titulo");
var elboton = document.getElementById("saludar");

elboton.onclick = function() {
	var texto= nombre.value;
	titulo.innerHTML= "Hola " + texto;
}