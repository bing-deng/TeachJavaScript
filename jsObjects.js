// 参考：https://www.discovermeteor.com/blog/javascript-for-meteor/

/*
	javaScript Objects
 */
myProfile = {
	name: "John Smith",
	email: "Johnsimith@gmail.com",
	'zip code': 1345,
	isInvited: true,
	friends: [{
		name: "john Doe",
		email: "john Doe@gmial.com"
	}, {
		name: "Jane Doe",
		email: "JaneDoe@gmial.com"
	}]
}

console.log(myProfile.name); // John Smith
console.log(myProfile.friends[1].name); // Jan Doe