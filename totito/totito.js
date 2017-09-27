

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
	
	};
	contador= 0
	turno = contador%2;
	div1.onclick=function(){
		if (turno==0){
			tablero[0][0]=1
			contador +=1;
		}
		else{
			tablero[0][0]=-1
			contador +=1;
		}
	}

	div2.onclick=function(){
		if (turno==0){
			tablero[0][1]=1
			contador +=1;
		}
		else{
			tablero[0][1]=-1
			contador +=1;
		}
	}

	div3.onclick=function(){
		if (turno==0){
			tablero[0][2]=1
			contador +=1;
		}
		else{
			tablero[0][2]=-1
			contador +=1;
		}
	}

	div4.onclick=function(){
		if (turno==0){
			tablero[1][0]=1
			contador +=1;
		}
		else{
			tablero[1][0]=-1
			contador +=1;
		}
	}

	div5.onclick=function(){
		if (turno==0){
			tablero[1][1]=1
			contador +=1;
		}
		else{
			tablero[1][1]=-1
			contador +=1;
		}
	}

	div6.onclick=function(){
		if (turno==0){
			tablero[1][2]=1
			contador +=1;
		}
		else{
			tablero[1][2]=-1
			contador +=1;
		}
	}

	div7.onclick=function(){
		if (turno==0){
			tablero[2][0]=1
			contador +=1;
		}
		else{
			tablero[2][0]=-1
			contador +=1;
		}
	}

	div8.onclick=function(){
		if (turno==0){
			tablero[2][1]=1
			contador +=1;
		}
		else{
			tablero[2][1]=-1
			contador +=1;
		}
	}

	div9.onclick=function(){
		if (turno==0){
			tablero[2][2]=1
			contador +=1;
		}
		else{
			tablero[2][2]=-1
			contador +=1;
		}
	}

	for (var fila = 0; fila<state.tablero.length; fila++){
		for (var columna = 0; columna<state.tablero.length; columna++){
			if (state.tablero[fila][columna] == 0){
			div1.className="div1"
			div2.className="div2"
			div3.className="div3"
			div4.className="div4"
			div5.className="div5"
			div6.className="div6"
			div7.className="div7"
			div8.className="div8"
			div9.className="div9"

			} 
			else if(state.tablero[fila][columna] == 1 ){
			div1.className="div1x"
			div2.className="div2x"
			div3.className="div3x"
			div4.className="div4x"
			div5.className="div5x"
			div6.className="div6x"
			div7.className="div7x"
			div8.className="div8x"
			div9.className="div9x"

			}
			else{ 

			div1.className="div1o"
			div2.className="div2o"
			div3.className="div3o"
			div4.className="div4o"
			div5.className="div5o"
			div6.className="div6o"
			div7.className="div7o"
			div8.className="div8o"
			div9.className="div9o"

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

 
