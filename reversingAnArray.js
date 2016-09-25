function reverseArray(array){ //creates a new array using elements from original
  var newArray = [];
  var length = array.length;
  for (var i = 0; i < length; i++){
    newArray.push(array.pop());
  }
  return newArray;
}

function reverseArrayInPlace(array){ //modifies given array
  for (var i = 0; i < Math.floor(array.length/2.0); i++){
    var temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }
  return array;
}

exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;
