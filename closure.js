// closure are function that refer to independent variables

// usually a local variable will stay as long as it is in the function , 
// but when it is made closure it will stay in the function environment

function show(line){
	console.log(line);
}

// ____________________________________
// example 1:
// ____________________________________

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

show(add5(2));  // 7
show(add10(2)); // 12

// makeAdder returns a function and hence add5 is a function

// example 2:counter example
// ______________________________________________________________


function rank(){
	var count=1;
	return function(){
		count =count+1;
		return count;
	}
}
var sum=rank();
show(sum());
// show(sum());
// show(sum());

// example 3:
// ______________________________________________________________
function num(){
	var count=1;
	return function(y){
		count =count+y;
		return count;
	}
}
var s=num();
show(s(4));
show(s(6));
show(s(7));


