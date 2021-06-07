var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('BrickConstructor', function() {
var testBrick = new Brick (5, "yellow");
	describe('BrickSize', function() {
		it('should equal 5', function() {
			assert.equal(5, testBrick.size);
		});
	});

	describe('BrickColor', function() {
		it('should equal yellow', function() {
			assert.equal("yellow", testBrick.color);
		});
	});
});
