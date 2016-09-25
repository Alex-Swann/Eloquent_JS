function arrayToList(array){
  var list = {};
  if (array.length > 1){
    list.value = array.shift();
    list.rest = arrayToList(array);
  } else {
    list.value = array.shift();
    list.rest = null;
  }
  return list;
}

function listToArray(list){
  var array = [];
  array.push(list.value);
  if (list.rest !== null) array.push.apply(array, listToArray(list.rest));
  return array;
}

function prepend(element, list){
  element.rest = list;
  return element;
}

function nth(list, number){
  return listToArray(list)[number-1];
}

exports.nth = nth;
exports.prepend = prepend;
exports.arrayToList = arrayToList;
exports.listToArray = listToArray;
