function every(array, func){
  var result = true;
  for (var i = 0; i < array.length; i++){
    if (!func(array[i])) return result = false;
  }
  return result;
}

function some(array, func){
  var result = false;
  for (var i = 0; i < array.length; i++){
    if (func(array[i])) return result = true;
  }
  return result;
}

console.log(every([5,5,5,5], function(e){ return e >= 5; })); // true
console.log(every([4,7,5,5], function(e){ return e >= 5; })); // false
console.log(some([4,2,3,4], function(e){ return e >= 5; })); // false
console.log(some([2,5,1,4], function(e){ return e >= 5; })); // true
