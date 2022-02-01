#!/usr/bin/node

const request = require('request');

request(process.argv[2], bar);

function bar (error, response, body) {
  if (error) {
    console.error(error);
  }
  const todos = JSON.parse(body).reduce((acc, elem) => {
    if (!acc[elem.userId]) {
      if (elem.completed) {
        acc[elem.userId] = 1;
      }
    } else {
      if (elem.completed) {
        acc[elem.userId] += 1;
      }
    }
    return acc;
  }, {});
  console.log(todos);
}
