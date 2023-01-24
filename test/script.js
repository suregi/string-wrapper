const {
	wrap,
	wrapP,
	wrapC,
	wrapA,
	wrapS,
	wrapQ,
	wrapD,
} = require('string-wrapper');

console.log(wrap('hello', '*'));
console.log(wrap('parenthesis', '()'));
console.log(wrap('square bracket', '[]'));
console.log(wrap('curly bracket', '{}'));
console.log(wrap('angle bracket', '<>'));
console.log(wrap('abc', 'xyz'));
console.log(wrap('ampersand', '&'));

console.log(wrapP('paren'));
console.log(wrapC('curly'));
console.log(wrapA('angle'));
console.log(wrapS('square'));
console.log(wrapQ('quote'));
console.log(wrapD('double quote'));
