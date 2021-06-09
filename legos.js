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
	this.hasBrick = hasBrick;
	this.countLegoPile = countLegoPile;
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

function hasBrick(size, color) {
	var brickToFind = new Brick(size,color);
	if (this.legos[color].find(brickToFind) != null) {
		return true;
	} else {
		return false;
	}
}

function countLegoPile() {
	var count = 0;
	for (const key in this.legos) {
		count += this.legos[key].bstCount();
	}
	return count;
}
