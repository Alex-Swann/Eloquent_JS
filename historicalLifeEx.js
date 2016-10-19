(function(exports){
  var current;

  function dataGrouper(){
    current = this;
    this.result = [];
  }

  dataGrouper.prototype = {
    ageAndCentury: function(data){
      data.forEach(function(obj){
        var store = {},
            age = obj.died - obj.born,
            key = Math.ceil(obj.died/100) + "th Century";

        store[key] = age;
        current.result.push(store);
      });
      return this.result;
    },

    averageLE: function(file){
      var data = JSON.parse(require(file)),
          result = [];

      data = this.ageAndCentury(data);
      var groupedObj = this.groupBy(current.result);
      result = this.averageValues(groupedObj);

      return this.keySort(result);
    },

    averageValues: function(groupedObj){
      for(var obj2 in groupedObj){
        groupedObj[obj2] = groupedObj[obj2].reduce(function(a,b){
                            return a + b;
                           })/groupedObj[obj2].length;
      }
      return groupedObj;
    },

    groupBy: function(arrayOfDates){
      var groupedObj = {};

      for(var i = 0; i < arrayOfDates.length; i++){
        for(var obj in arrayOfDates[i]){
         groupedObj[obj] = groupedObj[obj] ?
                           groupedObj[obj].concat(arrayOfDates[i][obj]) :
                           [].concat(arrayOfDates[i][obj]);
        }
      }

      return groupedObj;
    },

    keySort: function(array){
      var sorted = Object.keys(array).sort(),
          result = [];

      sorted.forEach(function(v){
        var object = {};
        object[v] = +(array[v].toFixed(1));
        result.push(object);
      });
      return result;
    }
  };

  module.exports = dataGrouper;

})(this);
