#!/usr/bin/node

const request = require('request');

request(process.argv[2], bar);

function bar (error, response, body) {
  if (error) {
    console.error(error);
  }

  const antilles = JSON.parse(body).results.filter((elem) => {
    return elem.characters.filter((url) => { return url.includes('18'); }).length;
  }).length;
  console.log(antilles);
}
