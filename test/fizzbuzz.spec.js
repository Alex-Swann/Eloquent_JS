var expect = require('chai').expect,
    FizzBuzz = require('../fizzbuzz');

describe('FizzBuzz', function(){
  var game;

  beforeEach(function(){
    game = new FizzBuzz();
  });

  it('when a number is divisible by 15, fizzbuzz is returned', function(){
    expect(game.play(30)).to.eql('fizzbuzz');
  });

  it('when a number is divisible by 5, buzz is returned', function(){
    expect(game.play(35)).to.eql('buzz');
  });

  it('when a number is divisible by 3, fizz is returned', function(){
    expect(game.play(99)).to.eql('fizz');
  });

  it('returns a number as a string', function(){
    expect(game.play(4)).to.eql('4');
  });

});
