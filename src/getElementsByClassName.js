// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  var nodes = [];
  // if node has className
  var node = node || document.body;
  if (_.contains(node.classList, className)) {
    //push node into node array
    nodes.push(node);
  }

  //if node has children
  if (node.childNodes) {
    //iterate through children, recursively
    for ( var i = 0; i < node.childNodes.length; i++) {
     var childNodes = getElementsByClassName(className, node.childNodes[i]);
     nodes = nodes.concat(childNodes);
    }
  }

  //return nodes array
  return nodes
};
