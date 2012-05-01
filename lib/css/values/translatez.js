/* <translatez>
 *
 * translateZ( WS? <length> WS? )
 */

"use strict";

var base = require('./base');
var util = require('../../util');

var Val = base.baseConstructor();

util.extend(Val.prototype, base.base, {
	name: "translatez"
});


exports.parse = function (unparsedReal, bucket, container) {
	var v = new Val(bucket, container, unparsedReal);
	v.debug('parse', v.unparsed);

	if (! v.functionParser('translatez(',
			[ bucket['length'] ])) {
		v.debug('parse fail');
		return null;
	}

	v.debug('parse success');
	return v;
};