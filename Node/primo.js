var n = 14;

function isPrime(n){
	for (var i = 2; i<n ; i++){
		if (n%i==0){
			return false;
		}
		return true
	}
}
if (isPrime(n)==false){
	console.log("no es primo")
}else{
	console.log("es primo")
}