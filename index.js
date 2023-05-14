//Oblects
playFd = {name: "Fred", dept: "Computer Sci", age: "32"};

playFd.display = function(){
	console.log(this.name);
	console.log(this.dept);
	console.log(this.age);
};


playFd.display();

function Player(n, a, l, d)
{
	this.name = n;
	this.age = a;
	this.level = l;
	this.dept = d;
}
Player.prototype.details = function(){
	console.log(`${this.name} is our student from ${this.dept} Department.`);
	console.log(`Age is ${this.age} and a level ${this.level} player`);
}

ply1 = new Player("Aniede Akuoma", 2, 1, "Nursary");
ply2 = new Player("Onyi Love", 25, 4, "Zology");
ply3 = new Player("Davic Ndu", 32, 6, "Software Engineer"); 

ply1.details();
ply2.details();
ply3.details();

var intervalHandler;
var seconds;

function tick()
{
	var timedisplay = document.getElementById("time");
	var min = Math.floor(seconds / 60);
	var sec = seconds - (min * 60);
	min;
	parseInt(min);
	parseInt(sec);
	if (sec < 10)
	{
		sec = "0" + sec;
	}

	var message = min + ":" + sec;
	timedisplay.innerHTML = message;

	if (seconds === 0)
	{
		alert("Done");
		clearInterval(intervalHandler);
		//resetPage();
	}
	seconds--
}
//count down function
function startCountDown()
{
	var minute = document.getElementById("timerspace").value;
	if(isNaN(minute))
	{
		alert("input a number");
		return;
	}
	var seconds = minute * 60;
	intervalHandler = setInterval(tick, 1000)
}


	//Timer counter
	var timespace = document.createElement("input");
	timespace.setAttribute("type", "text");
	timespace.setAttribute("id", "timerspace");
	//timespace.setAttribute("placeholder", "0:00")
	var timeBotton = document.createElement("input");
	timeBotton.setAttribute("type", "button");
	timeBotton.setAttribute("value", "Set countDown");
	timeBotton.onclick = function()
	{
		startCountDown();
	};
	document.getElementById("timer").appendChild(timespace);
	document.getElementById("timer").appendChild(timeBotton);



