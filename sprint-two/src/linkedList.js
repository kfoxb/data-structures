var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    } else {
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function (target) {
    var checkNext = function (node) {
      if (node === null) {
        return false;
      }
      if (node.value !== target) {
        return checkNext(node.next);
      } else {
        return true;
      }
    };
    return checkNext(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
