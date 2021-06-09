var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('BST Count Method', function() {
	describe('Count One', function() {
		it('should equal one brick', function() {
			var rootBrick = new Brick(4, "yellow");
			var tree = new BST();
			tree.insert(rootBrick);
			assert.equal(tree.bstCount(), 1);
		});
	});
	describe('Count Zero', function() {
		it('should equal zero bricks', function() {
			var tree = new BST();
			assert.equal(tree.bstCount(), 0);
		});
	});
	describe('Count Several', function() {
		it('should equal 4 bricks', function() {
			var rootBrick = new Brick(4, "yellow");
			var brick1 = new Brick(1, "yellow");
			var brick2 = new Brick(2, "yellow");
			var brick3 = new Brick(3, "red");
			var tree = new BST();

			tree.insert(rootBrick);
			tree.insert(brick2);
			tree.insert(brick1);
			tree.insert(brick3);

			assert.equal(tree.bstCount(), 4);
		});
	});
});
