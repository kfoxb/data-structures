var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = new BinarySearchTree(value);
  var direction;

  var nextChild = function (node) {
    node.value > this.value ? direction = 'right' : direction = 'left';
    if (this[direction] === undefined) {
      this[direction] = newNode;
    } else {
      nextChild.call(this[direction], newNode);
    }
  };
  nextChild.call(this, newNode);
};

BinarySearchTree.prototype.contains = function (value) {
  var direction;

  var doesThisContain = function (value) {
    if (this.value === value) {
      return true;
    }
    value > this.value ? direction = 'right' : direction = 'left';
    if (this[direction] === undefined) {
      return false;
    } else {
      return doesThisContain.call(this[direction], value);
    }
  };
  return doesThisContain.call(this, value);
};

BinarySearchTree.prototype.depthFirstLog = function (fn) {
  var eachChild = function () {
    fn(this.value);
    if (this.right !== undefined) {
      eachChild.call(this.right);
    }
    if (this.left !== undefined) {
      eachChild.call(this.left);
    }
    return;
  };
  eachChild.call(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
