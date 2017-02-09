var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  _.extend(queue, queueMethods);
  queue.storage = {};
  queue.length = 0;
  return queue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.length > 0 ? this.length : 0;
}
queueMethods.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
}
queueMethods.dequeue = function(){
  this.length--;
  var result = this.storage[0];
  for (var i = 0; i < this.length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return result;
}
