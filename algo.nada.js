inNumeroNuevo.onkeypress = function(f) {
	if (f.which == 13) {
		if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
			listaNumeros.push(inNumeroNuevo.value);
			parrafo.innerHTML = listaNumeros;
		}
		else{
			window.alert("Ingrese un numero de 0 a 100");
		}
		inNumeroNuevo.value = "";	
	}
}
