/*
	anonymous Function 
	匿名函数
 */
square = function(a) {
	return a * a;
}
applyOperation = function(f, a) {
	return f(a);
}
console.log(applyOperation(square, 10)); // 100 函数名和参数 level same


console.log("--------------------------");

applyOperationSecond = function(f, a) {
	return f(a);
}
applyOperationSecond(
		function(a) {
			return a * a;
		},
		10
	) // 100