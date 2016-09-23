(function(exports){

  var FizzBuzz = function (){

  };

  FizzBuzz.prototype = {
    play: function(number){
      if (number % 15 === 0) return 'fizzbuzz';
      else if (number % 5 === 0) return 'buzz';
      else if (number % 3 === 0) return 'fizz';
      else return number.toString();
    }
  };

  module.exports = FizzBuzz;

  //below is run before test suite to complete challenge

  for(var i = 1; i < 101; i++){
    var game = new FizzBuzz();
    console.log(game.play(i));
  }

})(this);
