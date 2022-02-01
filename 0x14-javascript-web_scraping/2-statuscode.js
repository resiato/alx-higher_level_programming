#!/usr/bin/node

const request = require('request');

request(process.argv[2], bar);

function bar (error, response) {
  if (error) {
    console.error(error);
  }
  console.log('code:', response && response.statusCode);
}
