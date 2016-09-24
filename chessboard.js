(function(exports){

  function Chess(){
    this.string = '';
  }

  Chess.prototype = {
    board: function(number){
      while (this.string.length < number/2){
        this.string += '#';
      }
      this.string = this.string.split('').join(' ');

      for(var i = 0; i < number; i++){
        if (i % 2 === 0) console.log(' ' + this.string);
        else console.log(this.string);
      }
      this.string = '';
    }
  };

  module.exports = Chess;

})(this);
