#!/usr/bin/node

const request = require('request');
const fs = require('fs');

request(process.argv[2], bar);

function bar (error, response, body) {
  if (error) {
    console.error(error);
  }
  try {
    fs.writeFile(process.argv[3], body, 'utf8', function (err, result) { if (err) console.log(err); });
  } catch (err) {
    console.log(err);
  }
}
