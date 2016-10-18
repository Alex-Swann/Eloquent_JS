(function(exports){
  var current;

  function dataGrouper(){
    current = this;
    this.result = [];
  }

  dataGrouper.prototype = {
    averageLE: function(file){
      var data = JSON.parse(require(file));

        data.forEach(function(obj){
          var store = {},
              age = obj.died - obj.born,
              key = Math.ceil(obj.died/100) + "th Century";

          store[key] = age;
          current.result.push(store);
        });

      return this.filterBy(current.result);
    },

    filterBy: function(arrayOfDates){
      var ans = {};

      for(var i = 0; i < arrayOfDates.length; i++){
        for(var obj in arrayOfDates[i]){
         ans[obj] = ans[obj] ? ans[obj].concat(arrayOfDates[i][obj]) : [].concat(arrayOfDates[i][obj]);
        }
      }

      for(var obj2 in ans){
        ans[obj2] = ans[obj2].reduce(function(a,b){ return a + b; })/ans[obj2].length;
      }

      return ans;
    }
  };

  module.exports = dataGrouper;

})(this);
