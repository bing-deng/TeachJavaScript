// 为了使用meteor 需要提前学习JS  两个地址
// https://www.discovermeteor.com/blog/javascript-for-meteor/
// https://learnxinyminutes.com/docs/zh-cn/javascript-cn/


///////////////////////////////////
// 1. 数字、字符串与操作符

// Javascript 只有一种数字类型(即 64位 IEEE 754 双精度浮点 double)。
// double 有 52 位表示尾数，足以精确存储大到 9✕10¹⁵ 的整数。
3; // = 3
1.5; // = 1.5

// 所有基本的算数运算都如你预期。
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// 包括无法整除的除法。
5 / 2; // = 2.5

// 位运算也和其他语言一样；当你对浮点数进行位运算时，
// 浮点数会转换为*至多* 32 位的无符号整数。
1 << 2; // = 4

// 括号可以决定优先级。
(1 + 3) * 2; // = 8

// 有三种非数字的数字类型
Infinity; // 1/0 的结果
- Infinity; // -1/0 的结果
NaN; // 0/0 的结果

// 也有布尔值。
true;
false;

// 可以通过单引号或双引号来构造字符串。
'abc';
"Hello, world";

// 用！来取非
!true; // = false
!false; // = true

// 相等 ===
1 === 1; // = true
2 === 1; // = false

// 不等 !=
1 !== 1; // = false
2 !== 1; // = true

// 更多的比较操作符 
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// 字符串用+连接
"Hello " + "world!"; // = "Hello world!"

// 字符串也可以用 < 、> 来比较
"a" < "b"; // = true

// 使用“==”比较时会进行类型转换...
"5" == 5; // = true
null == undefined; // = true

// ...除非你是用 ===
"5" === 5; // = false
null === undefined; // = false 

// ...但会导致奇怪的行为
13 + !0; // 14
"13" + !0; // '13true'

// 你可以用`charAt`来得到字符串中的字符
"This is a string".charAt(0); // = 'T'

// ...或使用 `substring` 来获取更大的部分。
"Hello world".substring(0, 5); // = "Hello"

// `length` 是一个属性，所以不要使用 ().
"Hello".length; // = 5

// 还有两个特殊的值：`null`和`undefined`
null; // 用来表示刻意设置的空值
undefined; // 用来表示还没有设置的值(尽管`undefined`自身实际是一个值)

// false, null, undefined, NaN, 0 和 "" 都是假的；其他的都视作逻辑真
// 注意 0 是逻辑假而  "0"是逻辑真，尽管 0 == "0"。

///////////////////////////////////
// 2. 变量、数组和对象

// 变量需要用`var`关键字声明。Javascript是动态类型语言，
// 所以你无需指定类型。 赋值需要用 `=` 
var someVar = 5;

// 如果你在声明时没有加var关键字，你也不会得到错误...
someOtherVar = 10;

// ...但是此时这个变量就会在全局作用域被创建，而非你定义的当前作用域

// 没有被赋值的变量都会被设置为undefined
var someThirdVar; // = undefined

// 对变量进行数学运算有一些简写法：
someVar += 5; // 等价于 someVar = someVar + 5; someVar 现在是 10 
someVar *= 10; // 现在 someVar 是 100

// 自增和自减也有简写
someVar++; // someVar 是 101
someVar--; // 回到 100


console.log("learn js"); // 输出语句
console.log(3); // 
console.log(1.5); // js 只用一种数字类型（即64位IEEE754 双进度浮点double） double 有52位表示位数 足以精确存储大道9✕10¹⁵的整数

/*
  运算

 */



console.log('abc');
console.log("hello,world"); // 可以通过单引号和双引号构造字符串

/*
  变量

 */

var someVar = 5; // 变量需要 var 关键字声明。 Javascript 是动态类型语言
someOtherVar = 10; // 声明时没有加var 关键字 也不会报错，但是此时这个变量就会在全局作用域被创建，而非你定义的当前作用域

var someThirdVar; //  = undefined
console.log(someThirdVar);

console.log("----------------------------------");
/*
  数组

 */

var myArray = ["hello", 45, true]; // 数组是任意类型组成的有序列表

console.log(myArray[1]); // 数组的元素可以用方括号下标来访问 ，数组索引从0开始

myArray.push("world"); // 数组是可变的,并拥有变量 length
console.log(myArray.length); // 4

myArray[3] = "hello"; // 在指定下标添加/修改


/*
	javascript 中的对象相当于其他语言中的 字典 或 映射：是键-值得无序集合

 */

var myObj = {
	key1: "hello",
	key2: "world"
};
console.log(myObj); // 键是字符串，但如果本身是合法的js 标识符，则引号并非是必须的
var youObj = {
	myKey: "myValue",
	"my other key": 4
}; // 键可以是任意类型

console.log(youObj["my other key"]); // 4

console.log(youObj.myKey); // 如果属性是合法的标识符，也可以通过 . 
youObj.myThirdKey = true; // 对象是可变的, 值也可以被更改或增加新的键

console.log(youObj);

console.log(youObj.myFourthKey); // 如果想获取一个还没定义的值,那么会返回undefined

/*
  逻辑控制与结构
	与java 的语法几乎完全相同
 */
var count = 1;
if (count == 3) {
	// count 是 3 时 执行
}
if (count == 4) {
	// count 是 3 时 执行
} else {
	// 其他情况下执行
}

// while循环
var i = 0;
while (i < 5) {
	console.log(i++);
}

// Do-while 和 While 循环很像 ，但前者会至少执行一次
var input = 0;
do {
	console.log(input++);
} while (input < 10)

// `for`循环和C、Java中的一样：
// 初始化; 继续执行的条件; 迭代。
for (var i = 0; i < 5; i++) {
	// 遍历5次
}
// var house
// 	// && 是逻辑与, || 是逻辑或
// if (house.size == "big" && house.colour == "blue") {
// 	house.contains = "bear";
// }
var colour = "red";
if (colour == "red" || colour == "blue") {
	// colour是red或者blue时执行
}

// && 和 || 是“短路”语句，它在设定初始化值时特别有用 
var otherName = "a";
var name = otherName || "default";
console.log("name:" + name);

// `switch`语句使用`===`检查相等性。
// 在每一个case结束时使用 'break'
// 否则其后的case语句也将被执行。 
grade = 'B';
switch (grade) {
	case 'A':
		console.log("Great job");
		break;
	case 'B':
		console.log("OK job");
		break;
	case 'C':
		console.log("You can do better");
		break;
	default:
		console.log("Oy vey");
		break;
}
console.log("----------------------------------");
/*
  运算

 */

console.log("----------------------------------");

/*
  运算

 */

console.log("----------------------------------");



/*
  运算

 */

console.log("----------------------------------");


/*
  运算

 */

console.log("----------------------------------");


/*
  运算

 */

console.log("----------------------------------");


/*
  运算

 */

console.log("----------------------------------");


/*
  运算

 */

console.log("----------------------------------");