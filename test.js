
/* global require */

var bf = require('./lib/bruteforce.js');

var should = require('should');

var strParam;

var strings = bf({
  len: 2,
  chars: ['a', 'b'],
  step: function (str) {
    console.log('generated: ' + str);
  },
  end: function (strs) {
    strParam = strs;

    strs.should.eql(['', 'a', 'aa', 'ab', 'b', 'ba', 'bb']);
  }
});

strings.should.eql(strParam);

console.log('test passed');
