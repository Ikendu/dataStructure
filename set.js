//Set Operations
var mySet = function()
{
	var collection = [];

	this.has = function(item)
	{
		return(collection.indexOf(item) !== -1);
	};

	this.values = function()
	{
		return (collection);
	};

	this.size = function()
	{
		return (collection.length);
	};

	this.add = function(item)
	{
		if (!this.has(item))
		{
			collection.push(item);
			return (true);
		}
		return (false);
	}

	this.remove = function(itme)
	{
		if (this.has(item))
		{
			collection.slice(item, 1);
			return (true);
		}
		return (false);
	}

	this.union = function(newSet)
	{
		var result = new mySet();
		var firstSet = this.values();
		var checkSet = newSet.values();
		firstSet.forEach(function(i){
			result.add(i);
		});
		checkSet.forEach(function(i){
			result.add(i);
		});
		return(result);
	}
	this.interset = function(newSet)
	{
		var result = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(i){
			if (newSet.has(i))
			{
				result.add(i)
			}
		});
		return (result)
	};

	this.diffset = function(newSet)
	{
		var result = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(i){
			if (!newSet.has(i))
			{
				result.add(i);
			}
		});
		return (result);
	};

	this.subset = function(newSet)
	{
		var firstSet = this.values();
		return firstSet.every(function(i){
			return (newSet.has(i));
		});

	};
}


var setA = new mySet();
var setB = new mySet();

setA.add("Hello");
setA.add("Lovely Gift");
setA.add(11);
setA.add(23);
setB.add(11);
setB.add(23);
//runSet.remove("Hello"); 
console.log(setA.values());

console.log(setB.subset(setA));
console.log(setA.size());
console.log(setA.diffset(setB).values());
console.log(setA.has("Helloo"));
console.log(setA.interset(setB).values());
