
function totito(state){

	var contenedor = document.createElement("div");
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	var div6 = document.createElement("div");
	var div7 = document.createElement("div");
	var div8 = document.createElement("div");
	var div9 = document.createElement("div");
	

	contenedor.className="contenedor";
	div1.className="div1";
	div2.className="div2";
	div3.className="div3";
	div4.className="div4";
	div5.className="div5";
	div6.className="div6";
	div7.className="div7";
	div8.className="div8";
	div9.className="div9";


	contenedor.appendChild(div1);
	contenedor.appendChild(div2);
	contenedor.appendChild(div3);
	contenedor.appendChild(div4);
	contenedor.appendChild(div5);
	contenedor.appendChild(div6);
	contenedor.appendChild(div7);
	contenedor.appendChild(div8);
	contenedor.appendChild(div9);


	var state = {
	tablero = [[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]]

	turno = True
	};



	for (var fila = 0; fila<state.tablero.length; fila++){
		for (var columna = 0; columna<state.tablero.length; columna++){
			if (state.tablero[fila][columna] == 0){
			

			} else if(state.tablero[fila][columna] == 1 ){


			}
			else{ 

			}
		}
	}


return contenedor;
}

function render (mountPoint, component, state){
	mountPoint.innerHTML="";
	mountPoint.appendChild(component(state));

} 


var root = document.getElementById("root");
render(root, totito, state);




