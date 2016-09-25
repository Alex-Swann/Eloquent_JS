function countBs(string, character){
  var count = 0;
  string.split('').forEach(function(element, index, array){
    if (element === (character === undefined ? 'B' : character)) count++;
  });
  return count;
}

function countChar(string, character){
  return countBs(string, character);
}

exports.countBs = countBs;
exports.countChar = countChar;
