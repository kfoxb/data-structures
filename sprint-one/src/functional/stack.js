var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var result = storage[size - 1];
    //delete storage[lastIndex];
    storage[size - 1] = undefined;
    size--;
    return result;
  };

  someInstance.size = function() {
    if (size <= 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
