var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.length = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  size: function(){
    return this.length < 0 ? 0 : this.length;
  },
  pop: function(){
    var result = this.storage[this.length - 1];
    // this line is not MVP, but it behaves like pop
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  }
};

var newObj = Stack();
