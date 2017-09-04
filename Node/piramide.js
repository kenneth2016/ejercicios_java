var al= 6;
var an= al-1;
var t = 2;

for( var i = 0;  i< al; i++){
	console.log(" ".repeat(an), "* ".repeat(i) )
	an-=1
};

for (var j=0; j<t ; j++){
	console.log(" ".repeat(al-2),"*")
};
