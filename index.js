function wrap(sIn, sWrapper) {
	let sOut = '';
	switch (sWrapper) {
		case '()':
			sOut = '(' + sIn + ')';
			break;
		case '[]':
			sOut = '[' + sIn + ']';
			break;
		case '{}':
			sOut = '{' + sIn + '}';
			break;
		case '<>':
			sOut = '<' + sIn + '>';
			break;

		default:
			sOut = sWrapper + sIn + sWrapper;
			break;
	}
	return sOut;
}

function wrapP(sIn) {
	return wrap(sIn, '()');
}
function wrapC(sIn) {
	return wrap(sIn, '{}');
}
function wrapA(sIn) {
	return wrap(sIn, '<>');
}
function wrapS(sIn) {
	return wrap(sIn, '[]');
}

function wrapQ(sIn) {
	return wrap(sIn, "'");
}
function wrapD(sIn) {
	return wrap(sIn, '"');
}

module.exports = { wrap, wrapP, wrapC, wrapA, wrapS, wrapQ, wrapD };
