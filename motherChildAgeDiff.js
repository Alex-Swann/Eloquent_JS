(function(exports){
  var ageDifference,
      children,
      data,
      current;

  function Filing(){
    ageDifference = [];
    children = [];
    data = {};
    current = this;
  }

  Filing.prototype = {
    average: function(file){
      if (file === undefined) throw 'Please use a modularized JSON file as an argument...';
      data = JSON.parse(require(file));

      data.filter(function(obj){
        if (obj.mother !== null) {
          children.push(
            {
              "name": obj.name,
              "born": obj.born,
              "mother": obj.mother,
              "mother_dob": current.mothersDOB(obj.mother)
            });
          }
        });

        children.forEach(function(obj){
          if (obj.mother_dob !== undefined) ageDifference.push(obj.born - obj.mother_dob);
        });

        var result = +((ageDifference.reduce(function(a, b){
          return a + b;
        }, 0)/ageDifference.length).toFixed(1));

        result = isNaN(result) ? 0 : result;
        console.log(result);
        return result;
      },

      mothersDOB: function(name, file){
        var age;
        if (file !== undefined) data = file;
        data.filter(function(obj){
          if (name === obj.name) age = obj.born;
        });
        return age;
      }

  };

  module.exports = Filing;

})(this);
