//  对象可以包含方法。
var myObj = {
	myString: "Hello world!",
	myFunc: function() {
		return this.myString;
	}
};



var myOtherFunc = function() {
	return this.myString.toUpperCase();
}
myObj.myOtherFunc = myOtherFunc;

console.log(myObj.myOtherFunc());