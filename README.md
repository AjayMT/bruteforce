
# bruteforce
[![Build Status](https://travis-ci.org/AjayMT/bruteforce.svg)](https://travis-ci.org/AjayMT/bruteforce)

Generate all possible character permutations.

Example:
```javascript

var bf = require('bruteforce');

bf({
  len: 2,
  chars: ['a', 'b'],
  step: console.log
});

```

This example will produce the output:
```
a
aa
ab
b
ba
bb
```

## Installation
via npm:
```sh
$ npm install --save bruteforce
```

## API
### bruteForce(params)
Return a list of character permutations. `params` is an object with the following keys:
- `len`: maximum length of the permutations
- `chars`: list of characters to use
- `filterSimilarChars`: filter out permutations in which the same character appears consecutively (see #1)
- `prefix` (optional): a prefix that is added to all the permutations. This is a part of the length of each permutation, so it must be less than or equal to `len`.
- `step` (optional): a function to call every time a permuation is generated. It is called with one parameter: the permutation that was generated
- `end` (optional): a function to call after all permutations have been generated. It is called with one argument: the list of all permutations that were generated, which will also be returned

## License
MIT License. See `./LICENSE` for details.
