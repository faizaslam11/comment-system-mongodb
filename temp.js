const fetch = require("node-fetch");

fetch("https://api.ipify.org?format=json")
  .then(results => results.json())
  .then(data => console.log(data));

//this file does nothin until i run it from thee teminal
