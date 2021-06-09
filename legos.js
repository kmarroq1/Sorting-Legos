module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
const BST = bst.BST;

function Brick(size, color) {
	this.size = size;
	this.color = color;
}

function LegoPile() {
this.insertBrick = insertBrick;
	this.legos = {
		red: new BST(),
		green: new BST(),
		blue: new BST(),
		yellow: new BST(),
		black: new BST(),
		white: new BST()
	};

}

function insertBrick(brick) {
	this.legos[brick.color].insert(brick);
}
