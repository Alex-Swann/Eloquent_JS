var expect = require('chai').expect;

describe('FizzBuzz', function(){
  var game;

  beforeEach(function(){
    game = new FizzBuzz();
  });

  it('returns a number as a string', function(){
    expect(game(4)).to.eql('4');
  });


});
