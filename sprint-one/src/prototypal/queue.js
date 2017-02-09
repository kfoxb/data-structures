var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.length = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.length < 0 ? 0 : this.length;
};
queueMethods.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++
};
queueMethods.dequeue = function(){
  var result = this.storage[0];
  for (var i = 0; i < this.length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.length - 1]
  this.length--
  return result;
};
