if (typeof EventSource !== "undefined") {
  var source = new EventSource("sse_generator.js");
  source.onmessage = function (event) {
    document.getElementById("output").innerHTML += event.data + "<br>";
  };
}

// Event    	Description
// onopen	    It is used when a connection to the server is opened
// onmessage	This event is used when a message is received
// onerror	    It happens when an error occurs
