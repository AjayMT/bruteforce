
/* global module, require */

function bruteForce (params) {
  var prefix = params.prefix || '';
  var len = params.len;
  var chars = params.chars;
  var step = params.step;
  var end = params.end;

  if (prefix.length >= len) {
    if (step) step(prefix);

    return [prefix];
  }

  var strings = [prefix];

  for (var i in chars) {
    var nextParams = {
      prefix: prefix + chars[i],
      len: len,
      chars: chars,
      step: step
    };

    strings = strings.concat(bruteForce(nextParams));
  }

  if (end) end(strings);

  return strings;
}

module.exports = bruteForce;
