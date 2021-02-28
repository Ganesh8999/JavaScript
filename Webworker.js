// Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js

// counter.js

let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();

// Here postMessage() method is used to post a message back to the HTML page
// Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

// web_worker_example.js
if (typeof W == "undefined") {
  W = new Worker("counter.js");
}

// and now  we can receive messages from web worker

window.onmessage = function (event) {
  document.getElementById("messageId").innerHTML = event.data;
};

// Terminate a Web Worker: Web workers will continue to listen for messages (even after the external script is finished)
// until it is terminated. You can use the terminate() method to terminate listening to the messages.

w.terminate();

// Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code
w = undefined;
