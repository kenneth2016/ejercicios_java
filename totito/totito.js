
function totito(state){

	var contenedor = document.createElement("div");
	contenedor.className="contenedor";
	for (var fila = 0; fila<state.tablero.length; fila++){
		for (var columna = 0; columna<state.tablero.length; columna++){
			var div = document.createElement("div");
			contenedor.appendChild(div);
			div.className="div1"
			div.onclick = generarOnClick(state, fila, columna);
			if (state.tablero[fila][columna]==0) {
				div.className="div1"
			}
			else if (state.tablero[fila][columna]==1) {
				div.className="div1x"
			}
			else {
				div.className="div1o"
			}

	}


	}

return contenedor;
}

function generarOnClick(state, fila, columna) {
	return function() {
		if (state.turno==true) {
			state.tablero[fila][columna]=1
			state.turno=false;
		}
		else if (state.turno==false){
			state.turno=true;
			state.tablero[fila][columna]=-1
		}

		render(root, totito, state);


	};
}

function render (mountPoint, component, state){
	mountPoint.innerHTML="";
	mountPoint.appendChild(component(state));

} 

var state = {
	tablero:[
	[0,0,0],
	[0,0,0],
	[0,0,0]
	],

	turno : false
}


var root = document.getElementById("root");
render(root, totito, state);

 
