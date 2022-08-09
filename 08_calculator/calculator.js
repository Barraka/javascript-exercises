const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(a) {
  let result=0;
  return a.reduce((x,y)=>x+y,0);
    // for(let n of a)result+=n;
    // return result;
};

const multiply = function(a) {
  let result=1;
  return a.reduce((x,y)=>x*y,1);
  // for(let n of a)result*=n;
  // return result;
};

const power = function(x,y) {
    return Math.pow(x,y);
};

const factorial = function(n) {
  if(n===0)return 1;
  result=1;
  for(let x =1;x<=n;x++)result*=x;
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
