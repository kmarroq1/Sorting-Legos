var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

describe('Lego Pile Has Brick', function() {
	describe('Find Brick', function() {
		it('should find brick', function() {
			var testBrick = new Brick (5, "yellow");
			var testLegoPile = new LegoPile();
			testLegoPile.insertBrick(testBrick);
			assert.equal(testLegoPile.hasBrick(5, "yellow"), true);
		});
	});

	describe('No Brick Found', function() {
		it('should not find brick', function() {
			var testLegoPile = new LegoPile();
			assert.equal(testLegoPile.hasBrick(5, "yellow"), false);
		});
	});
	describe('Find Brick Out Of Many', function() {
		it('should find brick', function() {
			var testBrick5 = new Brick (5, "yellow");
			var testBrick6 = new Brick (6, "yellow");
			var testLegoPile = new LegoPile();
			testLegoPile.insertBrick(testBrick5);
			testLegoPile.insertBrick(testBrick6);
			assert.equal(testLegoPile.hasBrick(6, "yellow"), true);
		});
	});
	describe('No Brick Found Out Of Many', function() {
		it('should not find brick', function() {
			var testBrick5 = new Brick (5, "yellow");
			var testBrick6 = new Brick (6, "yellow");
			var testLegoPile = new LegoPile();
			testLegoPile.insertBrick(testBrick5);
			testLegoPile.insertBrick(testBrick6);
			assert.equal(testLegoPile.hasBrick(7, "yellow"), false);
		});
	});
});
