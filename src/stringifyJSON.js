// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  string = "";
  
  if (typeof obj === 'undefined') {
  	return '';
  }

  else if (obj == null) {
  	return 'null';
  }

  else if (typeof obj === "function") {
  	return '';
  }

  else if (typeof obj === "boolean") {
  	if (obj) return 'true';
  	else return 'false';
  }


  else if (typeof obj == "number") {
  	return obj.toString();

  }

  else if (typeof obj == "string") {
  	return '"' + obj + '"';

  }


  else if (obj.constructor === Array) {
  	string = string + "[";
  	for(var x = 0; x<obj.length;x++) {
  		string = string + stringifyJSON(obj[x]);
	  	if ((x+1) < obj.length)
	  		string = string + ",";
	  }
  	string = string + "]";
  }

  else if (typeof obj == "object") {
  	string = string + "{";
  	var bool = false;
  	for(var x in obj) {

  		if ( (typeof obj[x] === 'undefined') || (typeof obj[x] === 'function'));
  		
  		else {
  			string = string + stringifyJSON(x) + ":" + stringifyJSON(obj[x]) + ",";
			bool = true;
		}
	  }

	if (bool) string = string.slice(0,-1);
  	string = string + "}";
  }

  return string;
};

console.log(stringifyJSON([{a:1,b:2,c:3}]));
console.log(JSON.stringify([{a:1,b:2,c:3}]));
