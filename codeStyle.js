// 编码规约 meteor 提供的 https://github.com/meteor/meteor/wiki/Meteor-Style-Guide

Separate tokens with a single space as in these examples:

	a = b + 1, not a = b + 1

function(a, b, c) {
	return 1;
}, not
function(a, b, c) {
	return 1;
}

for (i = 0; i < 3; i++), not
for (i = 0; i < 3; i++)

	a(1, 2, 3), not a(1, 2, 3)

{
	a: 1,
	b: 2
}, not {
	a: 1,
	b: 2
}

if (a), not
if (a)

	Unary negation also takes a space:

	if (!a), not
if (!a)

	But increment and decrement operators don 't take a space:

a++, not a++

--b, not--b

When functions or objects fit entirely on a single line, put a space inside the enclosing braces:

	stack.push({
		parent: node,
		red: true
	}), not stack.push({
		parent: node,
		red: true
	})

a(function() {
	return true;
}), not a(function() {
	return true;
})

Single - line arrays don 't get that space though:

samples.concat([1, 2, 3]), not samples.concat([1, 2, 3])


and so on...