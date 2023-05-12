//Set Operations
var mySet = function()
{
	var collection = [];

	this.has = function(item)
	{
		return (collection.indexOf(item) !== -1);
	}
	this.values = function()
	{
		return collection;
	}
	this.add = function(item)
	{
		if (!this.has(item))
		{
			collection.push(item);
			return true; 
		} else {
			return false;
		}
	};
	this.remove = function(item)
	{
		if (this.has(item))
		{
			var index = collection.indexOf(item);
			collection.splice(index, 1);
			return true;
		}
		else {
			return false;
		}
	};
	this.size = function()
	{
		return collection.length();
	}
	this.union = function(otherSet)
	{
		var unionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values()
		firstSet.forEach(function(i){
			unionSet.add(i);
		});
		secondSet.forEach(function(i){
			unionSet.add(i)
		});
		return unionSet;
	};
	this.interSet = function(otherSet)
	{
		var interset = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();
		firstSet.forEach(function(i){
			if(firstSet.has(i))
			{
				interset.add(i)
			}
		});
	}
	this.diffSet = function(otherSet)
	{
		var diffset = new mySet();
		var firstSet = this.values()
		var secondSet = otherSet.values()
		firstSet.forEach(function(i){
			if (!this.values.has(i))
			{
				diffset.add(i);
			}
		});
	};
	this.subSet = function(otherSet)
	{
		var firstSet = this.values();
		return firstSet.every(function(i){
			return otherSet.has(i);
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
