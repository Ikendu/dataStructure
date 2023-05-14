//Oblects
playFd = {name: "Fred", dept: "Computer Sci", age: "32"};

playFd.show = function(){
	console.log(this.name);
};
playFd.show();