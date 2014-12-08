// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return ('"' + obj + '"');
  }

  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]))
    }
    return '[' + result.join(',') + ']';
  }

  if (obj && (typeof obj === 'object')) {
    var objResult = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      objResult.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objResult.join(',') + '}'
  }

  return ('' + obj);



};
