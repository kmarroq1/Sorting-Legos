var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

describe('Lego Pile Insert', function() {
	describe('One Brick', function() {
		it('should insert one brick', function() {
			var testBrick = new Brick (5, "yellow");
			var testLegoPile = new LegoPile();
			testLegoPile.insertBrick(testBrick);
			assert.equal(testLegoPile.legos.yellow.root.data, testBrick);
		});
	});

	describe('Each Color Brick', function() {
		it('should insert one brick of each color', function() {
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
			
			assert.equal(testLegoPile.legos.red.root.data, redBrick);
			assert.equal(testLegoPile.legos.green.root.data, greenBrick);
			assert.equal(testLegoPile.legos.blue.root.data, blueBrick);
			assert.equal(testLegoPile.legos.yellow.root.data, yellowBrick);
			assert.equal(testLegoPile.legos.black.root.data, blackBrick);
			assert.equal(testLegoPile.legos.white.root.data, whiteBrick);
		});
	});
	describe('Several One Color Brick', function() {
		it('should insert several bricks of one color', function() {
			var yellow5Brick = new Brick (5, "yellow");
			var yellow4Brick = new Brick (4, "yellow");
			var yellow6Brick = new Brick (6, "yellow");
			var testLegoPile = new LegoPile();
		
			testLegoPile.insertBrick(yellow5Brick);
			testLegoPile.insertBrick(yellow4Brick);
			testLegoPile.insertBrick(yellow6Brick);
	
			assert.equal(testLegoPile.legos.yellow.root.data, yellow5Brick);
			assert.equal(testLegoPile.legos.yellow.root.left.data, yellow4Brick);
			assert.equal(testLegoPile.legos.yellow.root.right.data, yellow6Brick);
		});
	});
});

