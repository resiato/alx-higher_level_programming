#!/usr/bin/node

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', bar);

function bar (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}
