var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Stack.prototype.size = function(){
  return this.length > 0 ? this.length : 0;
};

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  var results = this.storage[this.length - 1];
  this.storage[this.length - 1] = undefined;
  this.length--;
  return results;
};