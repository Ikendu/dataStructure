//declare array to be used as a stack
var letters = [];
var i;

var word = "racecardd";

var rword = "";

//stack the words inside the array
for (i = 0; i < word.length; i++)
{
	letters.push(word[i]);
}
for (i = 0; i < word.length; i++)
{
	rword += letters.pop();
}

console.log(`${rword}`);
if (word == rword)
{
	console.log(`${word }is a palindrome`);
} else {
	console.log(`${word} is not a palindrome`);
}


//creating a stack structure and all its functions
var stack = function()
{
	this.storage = {};
	this.count = 0;

	this.push = function(value)
	{
		this.storage[this.count] = value;
		this.count++;
	};
	this.pop = function()
	{
		if (this.storage[this.count] == 0)
		{
			return undefined;
		} else {
			this.count--;
			var result = this.storage[this.count];
			delete this.storage[this.count];
			return result;
		}
	};
	this.peek = function()
	{
		return (this.storage[this.count - 1]);
	}
	this.size = function()
	{
		return (this.count);
	};
}

	var myStack = new stack();
	myStack.push(12);
	myStack.push(20);
	myStack.push(2);
	myStack.push(12);
	myStack.push(20);
	console.log(myStack.pop());
	console.log(myStack.storage);
	console.log(myStack.size());
	myStack.push(21);
	console.log(myStack.peek());
	console.log(myStack.storage);

