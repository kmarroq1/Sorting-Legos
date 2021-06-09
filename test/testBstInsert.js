var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('BST Insert Method', function() {
	describe('Root Node', function() {
		it('should equal rootBrick', function() {
			var rootBrick = new Brick(4, "yellow");
			var tree = new BST();
			tree.insert(rootBrick);
			assert.equal(tree.root.data, rootBrick);
		});
	});

	describe('Root Plus Left Child', function() {
		it('should equal brick3', function() {
			var rootBrick = new Brick(4, "yellow");
			var brick3 = new Brick(3, "yellow");
			var tree = new BST();

			tree.insert(rootBrick);
			tree.insert(brick3);

			assert.equal(tree.root.left.data, brick3);
		});
	});

	describe('Root Plus Right Child', function() {
		it('should equal brick5', function() {
			var rootBrick = new Brick(4, "yellow");
			var brick5 = new Brick(5, "yellow");
			var tree = new BST();

			tree.insert(rootBrick);
			tree.insert(brick5);

			assert.equal(tree.root.right.data, brick5);
		});
	});

	describe('Root Plus Left and Right Child', function() {
		it('should equal brick3 and brick5', function() {
			var rootBrick = new Brick(4, "yellow");
			var brick3 = new Brick(3, "yellow");
			var brick5 = new Brick(5, "yellow");
			var tree = new BST();

			tree.insert(rootBrick);
			tree.insert(brick3);
			tree.insert(brick5);

			assert.equal(tree.root.right.data, brick5);
		});
	});

	describe('General Case', function() {
		it('should equal brick3', function() {
			var rootBrick = new Brick(4, "yellow");
			var brick1 = new Brick(1, "yellow");
			var brick2 = new Brick(2, "yellow");
			var brick3 = new Brick(3, "red");
			var brick5 = new Brick(5, "yellow");
			var brick6 = new Brick(6, "yellow");
			var tree = new BST();

			tree.insert(rootBrick);
			tree.insert(brick2);
			tree.insert(brick1);
			tree.insert(brick3);
			tree.insert(brick5);
			tree.insert(brick6);

			assert.equal(tree.root.left.right.data, brick3);
		});
	});
});
