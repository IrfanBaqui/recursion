// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];

  var fn = function(el) {
  	var kids = el.children;
  	for (var i = 0; i < kids.length; i++) {
  		if (kids[i].classList.contains(className))
  			result.push(kids[i]);
  		if (kids[i].hasChildNodes)
  			fn(kids[i]);
  	}
  }
  fn(document);
  return result;

};
