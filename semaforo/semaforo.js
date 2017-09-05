function semaforo(state){

	var rectangulo = document.createElement("div");
	var rojo = document.createElement("div");
	var amarillo = document.createElement("div");
	var verde = document.createElement("div");

	rectangulo.className="rectangulo";

	rojo.className="rojo";

	amarillo.className="amarillo";

	verde.className="verde";

	rectangulo.appendChild(rojo);
	rectangulo.appendChild(amarillo);
	rectangulo.appendChild(verde);

	if (state == 0){
		rojo.style.opacity=1;
	};
	if (state == 1){
		verde.style.opacity=1;
	};
	if (state == 2){
		amarillo.style.opacity=1;
	}

return rectangulo;
}


function render (mountPoint, component, state){
	mountPoint.innerHTML="";
	mountPoint.appendChild(component(state));

} 
var state = 0;
var root = document.getElementById("root");
render(root, semaforo, state);

var boton= document.getElementById("boton");

boton.onclick= function(){
	state++;
	if (state>2) {
		state=0;
	};
	render(root, semaforo, state);
};