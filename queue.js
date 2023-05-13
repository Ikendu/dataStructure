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


var pqueue = function()
{
	var collection = [];

	this.enq = function(item)
	{
		if (collection.length === 0)
		{
			collection.push(item);
		} else {
			var added = false;
			for(var i = 0; i < collection.length; i++)
			{
				if (item[1] < collection[i][1])
				{
					collection.splice(i, 0, item);
					added = true;
					break;
				}
				
			}
			if (!added)
				collection.push(item);
		}
	}

	this.values = function()
	{
		return (collection);
	}

	this.deq = function()
	{
		var result = collection.shift();
		return (result[0]);
	}

	this.top = function()
	{
		return (collection[0]);
	}

	this.size = function()
	{
		return (collection.length);
	} 
}


var pq = new pqueue();
pq.enq([45, 3]);
pq.enq([48, 1]);
pq.enq([42, 5]);
pq.enq([45, 0]);

console.log(pq.values()); 
pq.deq();
console.log(pq.values()); 
console.log(pq.top());
console.log(pq.size());
