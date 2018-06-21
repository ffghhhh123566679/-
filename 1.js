jQuery('document').ready(function(){
		  jQuery('div').remove();
		
	 function filterNone() {
    return NodeFilter.FILTER_ACCEPT;
}

function getAllComments(rootElem) {
    var comments = [];
    // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
    var iterator = document.createNodeIterator(rootElem, NodeFilter.SHOW_COMMENT, filterNone, false);
    var curNode;
    while (curNode = iterator.nextNode()) {
        comments.push(curNode.nodeValue);
    }
    return comments;
}

window.addEventListener("load", function() {
    console.log(getAllComments(document.body));
});
// Thanks to Yoshi for the hint!
// Polyfill for IE < 9
if (!Node) {
    var Node = {};
}
if (!Node.COMMENT_NODE) {
    // numeric value according to the DOM spec
    Node.COMMENT_NODE = 8;
}

function getComments(elem) {
  var children = elem.childNodes;
  var comments = [];

  for (var i=0, len=children.length; i<len; i++) {
    if (children[i].nodeType == Node.COMMENT_NODE) {
      comments.push(children[i]);
    }
  }
  return comments;
});
