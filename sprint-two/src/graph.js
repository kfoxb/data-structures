

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {
    // to: {},
    // value: node
  };
  this.storage[node].value = node
  this.storage[node].to = {};
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined && this.storage[node].value === node ;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //**remember when we are removing edges, we need to modify
  //the TO object of the other nodes pointing to this target node
  for (var key in this.storage[node].to) {
    delete this.storage[key].to[node]
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].to[toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].to[toNode] = toNode;
  this.storage[toNode].to[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].to[toNode];
  delete this.storage[toNode].to[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    key = Number(key);
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
