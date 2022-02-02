#!/usr/bin/node

const fs = require('fs');

try {
  fs.writeFile(process.argv[2], process.argv[3], 'utf-8', bar);

function bar (err, data) {
  if (err) {
    console.log(err);
  }
}
}

catch (err) {
 console.log(err);
}
