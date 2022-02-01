#!/usr/bin/node

/* File System Object */
const fs = require('fs');

/* Read File */
fs.readFile(process.argv[2], 'utf-8', bar)

/*If an error exits, show it, otherwise display the file */
function bar (err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(JSON.stringify(data));
	}
};
