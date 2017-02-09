var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  return stack;
};

// BOTH styles work: REMEMBER:
// we can assign properties to objects in 2 ways
// 1) use : notation inside object literal
// 2) assign property outside of pre-declared object

var stackMethods = {
  size: function() {
    return this.length > 0 ? this.length : 0;
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  }
};

// stackMethods.size = function() {
//   return this.length > 0 ? this.length : 0;
// }
//
// stackMethods.push = function(value) {
//   this.storage[this.length] = value;
//   this.length++;
// }
//
// stackMethods.pop = function() {
//   var result = this.storage[this.length - 1];
//   delete this.storage[this.length - 1];
//   this.length--;
//   return result;
// }
