"use strict";
var util = require('./util');

exports.batch = util.makeVows('border-image-width', {
	'auto': {
		'tokens': ['IDENT'],
		'toString': 'auto',
		'unparsed': [],
		'warnings': []
	},
	'auto inherit': {
		'tokens': ['IDENT', 'S', 'IDENT'],
		'toString': 'auto',
		'unparsed': ['IDENT'],
		'warnings': []
	},
	'1px 2px': {
		'tokens': ['UNIT', 'S', 'UNIT'],
		'toString': '1px 2px',
		'unparsed': [],
		'warnings': []
	},
	'1px 2px 3px': {
		'tokens': ['UNIT', 'S', 'UNIT', 'S', 'UNIT'],
		'toString': '1px 2px 3px',
		'unparsed': [],
		'warnings': []
	},
	'1px 2px 3px 4px': {
		'tokens': ['UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT'],
		'toString': '1px 2px 3px 4px',
		'unparsed': [],
		'warnings': []
	},
	'1px 2px 3px 4px 5px': {
		'tokens': ['UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT'],
		'toString': '1px 2px 3px 4px',
		'unparsed': ['UNIT'],
		'warnings': []
	},
	'inherit': {
		'tokens': ['IDENT'],
		'toString': 'inherit',
		'unparsed': [],
		'warnings': ['css-minimum:3']
	},
	'invalidValue': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	}
});
