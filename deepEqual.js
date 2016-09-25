
function deepEqual(first, second) {

    first = typeof first === 'object' ?
              JSON.stringify(first).split('') :
              first.toString().split('');

    second = typeof second === 'object' ?
              JSON.stringify(second).split('') :
              second.toString().split('');

    if (first.length != second.length) return false;
    for (var i = 0; i < second.length; i++) {
        if (first[i].deepEqual) { //To test values in nested arrays
            if (!first[i].deepEqual(second[i])) return false;
        }
        else if (first[i] !== second[i]) return false;
    }
    return true;
}

module.exports = deepEqual;
