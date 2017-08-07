

forma = "triangulo"
d1 = 10
d2 = 15

var areaTriangulo = function(d1, d2){
        return (d1*d2)/2;
}

var areaRectangulo = function(d1, d2){
        return d1*d2;
}

var areaCirculo = function(d1){
        return (2*3.14*(d1*d1));
}

var encontrar =function(forma, d1, d2){
        return forma(d1, d2)
}

if (forma == "triangulo"){
        console.log(encontrar(areaTriangulo, d1, d2))
}
if (forma == "rectangulo"){
        console.log(encontrar(areaRectangulo, d1, d2))
}
if (forma == "circulo"){
        console.log(encontrar(areaCirculo, d1))
}