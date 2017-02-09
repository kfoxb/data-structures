var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length > 0 ? this.length : 0;
}

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

stackMethods.pop = function() {
  var result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return result;
}
