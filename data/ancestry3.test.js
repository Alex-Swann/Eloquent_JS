var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Hillbilly"}',
  '{"name": "Hillbilly", "sex": "m", "born": 1800, "died": 1870, "father": "Carel Haverbeke", "mother": null}',
  '{"name": "Chuckles", "sex": "m", "born": 1850, "died": 1930, "father": "Carel Haverbeke", "mother": null}',
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
