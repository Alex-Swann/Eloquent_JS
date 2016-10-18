var expect = require('chai').expect,
    isEven = require('../recursion');

describe('isEven', function(){

  it('return true when the number given is zero', function(){
    expect(isEven(0)).to.eql(true);
  });

  it('return false when the number given is one', function(){
    expect(isEven(1)).to.eql(false);
  });

  it('return true when the number given is two', function(){
    expect(isEven(2)).to.eql(true);
  });

  it('return true when the number given is three', function(){
    expect(isEven(3)).to.eql(false);
  });

  it('return true when the number given is even', function(){
    expect(isEven(1002)).to.eql(true);
  });

  it('return false when the number given is odd', function(){
    expect(isEven(3333)).to.eql(false);
  });

  it('return false when the number given is -1', function(){
    expect(isEven(-1)).to.eql(false);
  });

});
