var expect = require('chai').expect,
    Filing = require('../motherChildAgeDiff'),
    data = './data/ancestry',
    test_data = './data/ancestry.test',
    test_data2 = './data/ancestry2.test',
    test_data3 = './data/ancestry3.test',
    filing;

describe('Average Age Mother/Child', function(){

  beforeEach(function(){
    filing = new Filing();
  });

  it('can read a modularized data file', function(){
    expect(filing.average(data)).to.eql(31.2);
  });

  it('can return a mother\'s DOB from the data', function(){
    expect(filing.mothersDOB("Carol", [{"name": "Carol", "born": 1832}])).to.eql(1832);
  });

  it('throws an error when no argument given' , function(){
    expect(filing.average.bind(this)).to.throw('Please use a modularized JSON file as an argument...');
  });

  it('if mother key is empty then child is not considered', function(){
    expect(filing.average(test_data)).to.eql(0);
  });

  it('if mother is not included in data then child is not considered', function(){
    expect(filing.average(test_data2)).to.eql(0);
  });

  it('if mother and child are in the data then they are considered', function(){
    expect(filing.average(test_data3)).to.eql(32);
  });

});
