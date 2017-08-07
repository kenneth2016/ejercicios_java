var figura = "rectangulo";

var areaRectangulo = function(base, altura){
	return (base * altura);
}

var areaTriangulo = function(base, altura){
	return ((base * altura)/2);
}

var areaCirculo = function(radio) {
	return (radio*radio*3.14);
}


var calcular = function (figura, d1, d2){
	return(figura(d1, d2));
}

if (figura == "rectangulo"){
	console.log(calcular(areaRectangulo))

}

