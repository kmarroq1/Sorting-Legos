var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('BrickConstructor', function() {
	describe('BrickSize', function() {
		it('should equal 5', function() {
			Brick.size = 5;
			assert.equal(5, Brick.size);
		});
	});

	describe('BrickColor', function() {
		it('should equal yellow', function() {
			Brick.color = "yellow";
			assert.equal("yellow", Brick.color);
		});
	});
});
