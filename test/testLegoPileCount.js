var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

describe('LegoPile Count Method', function() {
	describe('Count One', function() {
		it('should equal one brick', function() {
			var testBrick = new Brick (5, "yellow");
			var testLegoPile = new LegoPile();
			testLegoPile.insertBrick(testBrick);
			assert.equal(testLegoPile.countLegoPile(), 1);
		});
	});
	describe('Count Zero', function() {
		it('should equal zero bricks', function() {
			var testLegoPile = new LegoPile();
			assert.equal(testLegoPile.countLegoPile(), 0);
		});
	});
	describe('Count Several One Color', function() {
		it('should equal 3 bricks', function() {
			var yellow5Brick = new Brick (5, "yellow");
			var yellow4Brick = new Brick (4, "yellow");
			var yellow6Brick = new Brick (6, "yellow");
			var testLegoPile = new LegoPile();
		
			testLegoPile.insertBrick(yellow5Brick);
			testLegoPile.insertBrick(yellow4Brick);
			testLegoPile.insertBrick(yellow6Brick);

			assert.equal(testLegoPile.countLegoPile(), 3);
		});
	});
	describe('Count Several Each Colors', function() {
		it('should equal 6 bricks', function() {
			var redBrick = new Brick (5, "red");
			var greenBrick = new Brick (5, "green");
			var blueBrick = new Brick (5, "blue");
			var yellowBrick = new Brick (5, "yellow");
			var blackBrick = new Brick (5, "black");
			var whiteBrick = new Brick (5, "white");
			var testLegoPile = new LegoPile();

			testLegoPile.insertBrick(redBrick);
			testLegoPile.insertBrick(greenBrick);
			testLegoPile.insertBrick(blueBrick);
			testLegoPile.insertBrick(yellowBrick);
			testLegoPile.insertBrick(blackBrick);
			testLegoPile.insertBrick(whiteBrick);

			assert.equal(testLegoPile.countLegoPile(), 6);
		});
	});
});
