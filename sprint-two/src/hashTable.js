

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //declare tuple
  var tuple = [k, v];
  var bucket;
  //if retrieve(k) returns array save array into var bucket
  if (this._storage.get(index) instanceof Array) {
    //push tuple into var bucket
    bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    //declare bucket array
    bucket = [];
    //push tuple into bucket array
    bucket.push(tuple);
  }
  //set hashtable(index, bucket)
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //bucket = get(index)
  var bucket = this._storage.get(index);

  return bucket[0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
