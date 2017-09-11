function totito(state){

	var contenedor = document.createElement("div");
	var fila1 = document.createElement("div");
	var fila2 = document.createElement("div");
	var fila3 = document.createElement("div");
	var div11 = document.createElement("div");
	var div12 = document.createElement("div");
	var div13 = document.createElement("div");
	var div21 = document.createElement("div");
	var div22 = document.createElement("div");
	var div23 = document.createElement("div");
	var div31 = document.createElement("div");
	var div32 = document.createElement("div");
	var div33 = document.createElement("div");
	

	contenedor.className="contenedor";
	fila1.className="fila1";
	fila2.className="fila2";
	fila3.className="fila3";
	div11.className="div11";
	div12.className="div12";
	div13.className="div13";
	div21.className="div21";
	div22.className="div22";
	div23.className="div23";
	div31.className="div31";
	div32.className="div32";
	div33.className="div33";

	fila1.appendChild(div11);
	fila1.appendChild(div12);
	fila1.appendChild(div13);
	fila2.appendChild(div21);
	fila2.appendChild(div22);
	fila2.appendChild(div23);
	fila3.appendChild(div31);
	fila3.appendChild(div32);
	fila3.appendChild(div33);
	contenedor.appendChild(fila1);
	contenedor.appendChild(fila2);
	contenedor.appendChild(fila3);

	if (state == 0){
		rojo.style.opacity=1;
	};
	if (state == 1){
		verde.style.opacity=1;
	};
	if (state == 2){
		amarillo.style.opacity=1;
	}

return contenedor;
}
