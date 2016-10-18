var expect = require('chai').expect,
    data = '../data/ancestry',
    test_data = './data/ancestry.test',
    test_data2 = './data/ancestry2.test',
    test_data3 = './data/ancestry3.test',
    Grouper = require('../historicalLifeEx'),
    averageLE;

describe('Life Expenctency', function(){

  beforeEach(function(){
    grouper = new Grouper();
  });

  it('returns an array containing a Century and age of individual', function(){
    expect(grouper.averageLE(test_data)).to.eql({"20th Century": 73});
  });

  it('returns an average life expectency for different centuries', function(){
    expect(grouper.averageLE(test_data3)).to.eql({"20th Century": 76.5, "19th Century": 70});
  });

  context('Filter By', function(){

    it('returns an empty object when empty array given', function(){
      expect(grouper.filterBy([])).to.eql({});
    });

    it('can filter and average values with the same key', function(){
      expect(grouper.filterBy([{"20th Century": 50},{"20th Century": 70}])).to.eql({"20th Century": 60});
    });

    it('can keep values with different keys separated', function(){
        expect(grouper.filterBy([{"20th Century": 50},{"19th Century": 70}])).to.eql({"20th Century": 50, "19th Century": 70});
    });

  });

});
