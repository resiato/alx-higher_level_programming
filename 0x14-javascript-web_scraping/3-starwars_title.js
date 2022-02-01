#!/usr/bin/node

const request = require('request');

request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], bar);

function bar (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(body).title);
}
