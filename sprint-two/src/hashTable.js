

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //declare tuple
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  //if retrieve(k) returns array save array into var bucket
  if (bucket instanceof Array && bucket.length > 0) {
    //push tuple into var bucket
    // bucket = this._storage.get(index);
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
  //iterate thru bucket
  for (var i = 0; i < bucket.length; i++) {
    //check for value = key
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket
  var bucket = this._storage.get(index);
  //iterate thru bucket
  for (var i = 0; i < bucket.length; i++) {
    //check key for value
    if (bucket[i][0] === k) {
      //re-assign value at key with value in key + 1
      for (i; i < bucket.length; i++) {
        bucket[i] = bucket[i + 1];
      }
      //remove last index of array
      bucket.pop();
      //break the inside for loop (stop searching for k)
      break;
    }
  }
  // set bucket
  this._storage.set(index, bucket);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
