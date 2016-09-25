function range(start, end, step){
  var array = [];
  var bool = start < end;
  for (var i = (bool ? start : end);
           i <= (bool ? end : start);
           step === undefined ? i++ : i += Math.abs(step) ){
    array.push(i);
  }
  return bool ? array : array.reverse();
}

function sum(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

exports.range = range;
exports.sum = sum;
