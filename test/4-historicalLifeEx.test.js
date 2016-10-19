var expect = require('chai').expect,
    data = './data/ancestry',
    test_data = './data/ancestry.test',
    test_data2 = './data/ancestry2.test',
    test_data3 = './data/ancestry3.test',
    Grouper = require('../historicalLifeEx'),
    averageLE,
    objectArray = [{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
      {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
      {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}];

describe('Life Expenctency', function(){

  beforeEach(function(){
    grouper = new Grouper();
  });

  it('returns an array containing a Century and age of individual', function(){
    expect(grouper.averageLE(test_data)).to.eql([{"20th Century": 73}]);
  });

  it('returns an average life expectency for different centuries', function(){
    expect(grouper.averageLE(test_data3)).to.eql([{"19th Century": 70},{"20th Century": 76.5}]);
  });

  context('Group By', function(){

    it('returns an empty object when empty array given', function(){
      expect(grouper.groupBy([])).to.eql({});
    });

    it('can group values with the same key', function(){
      expect(grouper.groupBy([{"20th Century": 50},{"20th Century": 70}])).to.eql({"20th Century": [50,70]});
    });

    it('can list different keys and their grouped values in the same object', function(){
        expect(grouper.groupBy([{"20th Century": 50},{"19th Century": 70}])).to.eql({"20th Century": [50], "19th Century": [70]});
    });

  });

  context('Age And Century', function(){
    it('works out the age and century from data', function(){
      expect(grouper.ageAndCentury(objectArray)).to.eql([
                                                          { '20th Century': 73 },
                                                          { '20th Century': 80 },
                                                          { '18th Century': 41 }
                                                        ]);
    });
  });

  context('averageValues', function(){
    it('averages values of object values together', function(){
      expect(grouper.averageValues({'20th Century': [50,70], 'stuff': [3,4,8,10]})).to.eql({ '20th Century': 60, stuff: 6.25 });
    });
  });

  context('keySort', function(){
    it('sorts keys into alphabetical order', function(){
      expect(grouper.keySort({'one': 1, 'four': 4, 'eleven': 11 })).to.eql([{'eleven': 11},{'four': 4},{'one': 1 }]);
    });
  });

});
