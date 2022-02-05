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

module.exports = { wrap };
