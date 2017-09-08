var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    return ('No Error');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      return('Is Even');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue === false) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'),'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'),'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.equal(detectNetwork('4123456789012345678'),'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
var should = chai.should();
 
  it(FILL_ME_IN, function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123412341234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011123412341234123').should.equal('Discover');
  });
   it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6511123412341234').should.equal('Discover');
  });
   it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6511123412341234123').should.equal('Discover');
  });


for (let prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
     it('has a prefix of ' + prefix + ' and a length of 16', function(){
    detectNetwork(prefix + '3123412341234').should.equal('Discover');
     });
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
    detectNetwork(prefix + '1123412341234123').should.equal('Discover');
     });
  })(prefix);
};

});

describe('Maestro', function() {

 var should = chai.should();
 var suffix = '1231231';
 

for(let length = 12; length <= 19; length++){
  suffix = suffix + '4';
  (function(suffix){
    it('has a prefix of 5018 and has a length of' + length, function(){
      detectNetwork('5018' + suffix).should.equal('Maestro');
    });
    it('has a prefix of 5020 and has a length of' + length, function(){
      detectNetwork('5020' + suffix).should.equal('Maestro');
    });
    it('has a prefix of 5038 and has a length of' + length, function(){
      detectNetwork('5038' + suffix).should.equal('Maestro');
    });
    it('has a prefix of 6304 and has a length of' + length, function(){
      detectNetwork('6304' + suffix).should.equal('Maestro');
    });

  })(suffix);
 };
});


//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

describe('China UnionPay', function(){


var should = chai.should();


for(let prefix1 = 624; prefix1 <= 626; prefix1++){
  var suffix1 = '312312123123';
  for(let length = 16; length <= 19; length++){
    suffix1 = suffix1 + '4';
    (function(prefix1, suffix1){
      it('has a prefix of ' + prefix1 + ' and has a length of ' + (length), function(){
        detectNetwork(prefix1 + suffix1).should.equal('China UnionPay');
      });
    })(prefix1, suffix1);
  }
}

for(let prefix1 = 622126; prefix1 <= 622925; prefix1++){
  var suffix1 = '312312123';
  for(let length = 16; length <= 19; length++){
    suffix1 = suffix1 + '4';
    (function(prefix1, suffix1){
      it('has a prefix of ' + prefix1 + ' and has a length of ' + (length), function(){
        detectNetwork(prefix1 + suffix1).should.equal('China UnionPay');
      });
    })(prefix1, suffix1);
  }
}

for(let prefix1 = 6282; prefix1 <= 6288; prefix1++){
  var suffix1 = '31231212313';
  for(let length = 16; length <= 19; length++){
    suffix1 = suffix1 + '4';
    (function(prefix1, suffix1){
      it('has a prefix of ' + prefix1 + ' and has a length of ' + (length), function(){
        detectNetwork(prefix1 + suffix1).should.equal('China UnionPay');
      });
    })(prefix1, suffix1);
  }
}

});

describe('Switch', function(){
var should = chai.should();

var fourDigit = ['4903', '4905', '4911', '4936', '6333', '6759'];
var sixDigit = ['564182', '633110'];


for(let e = 0; e < fourDigit.length; e++){
  var suffix5 = '12311231123';
  for(let length1 = 16; length1 <= 19; length1++){
      suffix5 = suffix5 + '4';
      if(length1 === 17) {length++}
      else if(length1 !== 17){
      (function(fourDigit, suffix5, e, length1){
        it('has a prefix of ' + fourDigit[e] + ' and has a length of ' + length1, function(){
          detectNetwork(fourDigit[e] + suffix5).should.equal('Switch');
        });
      })(fourDigit, suffix5, e, length1);
      }
    }
  }

  for(let a = 0; a < sixDigit.length; a++){
  var suffix5 = '123112323';
  for(let length1 = 16; length1 <= 19; length1++){
      suffix5 = suffix5 + '4';
      if(length1 === 17) {}
      else if(length1 !== 17){
      (function(sixDigit, suffix5, a, length1){
        it('has a prefix of ' + fourDigit[a] + ' and has a length of ' + length1, function(){
          detectNetwork(sixDigit[a] + suffix5).should.equal('Switch');
        });
      })(sixDigit, suffix5, a, length1);
      }
    }
  }



  });


//hina UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.