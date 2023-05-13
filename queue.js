//Basic Queue data structure

var queue = function()
{
	var collection = [];

	this.enqueu = function(item)
	{
		collection.push(item);
	};

	this.dequeue = function()
	{
		return (collection.shift())
	};

	this.front = function()
	{
		return (collection[0]);
	};

	this.size = function()
	{
		return (collection.length);
	};

	this.isEmpty = function()
	{
		return (collection.length === 0);
	};

	this.print = function()
	{
		console.log(collection);
	}
}

var q = new queue();
q.enqueu("hi");
q.enqueu("how");
q.enqueu("are");
q.enqueu("you");
q.print(q);
q.dequeue()
q.print(q);
console.log(q.isEmpty());
console.log(q.front());
