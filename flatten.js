function flatten(arr){
  return arr.reduce(function(a, b){
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
}

exports.flatten = flatten;
