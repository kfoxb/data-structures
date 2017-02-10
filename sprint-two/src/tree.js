var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {
    value: value,
    children: []
  };
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  } else {
    this.children.forEach(function(child){
      if (child.contains(target)) {
        result = true;
      }
    })
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
