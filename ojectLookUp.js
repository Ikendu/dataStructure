// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   const lookup = {
    alpha: "Adams", 
    bravo: "Boston",      
    charlie: "Chicago", 
    delta: "Denver", 
    echo: "Easy",  
    foxtrot: "Frank"
    };
    let val1 = "alpha";
    let val2 = "bravo";
    let val3 = "charlie";
    let val4 = "delta";
    let val5 = "echo";
    
    result = lookup[val]

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");