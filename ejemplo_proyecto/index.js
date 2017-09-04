function CirculoCuadrado(posicion) {
	var h1Titulo = document.createElement("h1");
	var titulo = document.createTextNode("Ejemplo Dibujo: ");
	h1Titulo.appendChild(titulo);

	var divCuadro = document.createElement("div");
	divCuadro.className = "cuadro";


	var divCirculo = document.createElement("div");
	divCirculo.className = "circulo";
	divCirculo.style.left = posicion.x;
	divCirculo.style.top = posicion.y;

	divCuadro.appendChild(divCirculo);

	var app = document.createElement("div");
	app.className = "app";

	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);

	return app;


}

function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));


} 

var root = document.getElementById("root");
render(root, CirculoCuadrado, {x: 50, y: 100});