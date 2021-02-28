window.onstorage = functionRef;

// Let's take the example usage of onstorage event handler which logs the storage key and it's values

window.onstorage = function (e) {
  console.log(
    "The " +
      e.key +
      "the key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      "."
  );
};
