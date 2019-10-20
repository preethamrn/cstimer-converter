const fs = require('fs')

console.log(process.argv)
const fileName = process.argv[2] || 'cstimer.txt'
fs.readFile(fileName, 'utf8', function(err, contents) {
    const times = JSON.parse(contents)
	
});
