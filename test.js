
/* global require */

var bf = require('./lib/bruteforce.js');

var should = require('should');

var strParam, strParam2;

var strings = bf({
  len: 2,
  chars: ['a', 'b'],
  step: function (str) {
    console.log('generated: ' + str);
  },
  end: function (strs) {
    strParam = strs;

    strs.should.eql(['', 'a', 'aa', 'ab', 'b', 'ba', 'bb']);

    console.log();
  }
});

strings.should.equal(strParam);

var strings2 = bf({
  len: 2,
  chars: ['a', 'b'],
  filterSimilarChars: true,
  step: function (str) {
    console.log('generated: ' + str);
  },
  end: function (strs) {
    strParam2 = strs;

    strs.should.eql(['', 'a', 'ab', 'b', 'ba']);

    console.log();
  }
});

strings2.should.equal(strParam2);

console.log('test passed');
