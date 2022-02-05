const { wrap } = require('string-wrapper');

console.log(wrap('hello', '*'));
console.log(wrap('parenthesis', '()'));
console.log(wrap('square bracket', '[]'));
console.log(wrap('curly bracket', '{}'));
console.log(wrap('angle bracket', '<>'));
console.log(wrap('abc', 'xyz'));
console.log(wrap('ampersand', '&'));
