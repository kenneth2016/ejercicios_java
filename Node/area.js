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


if (figura == "ractangulo"){
	var base = 10;
	var altura = 5;
	console.log(areaRectangulo);

} else{
	console.log("nada")

}