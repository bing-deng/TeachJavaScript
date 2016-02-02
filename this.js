myFunction = function(a, b) {
	var myObject = this;
	console.log(this.a);
	// do something
}
console.log(myFunction(3, 5));