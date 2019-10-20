import fs from 'fs'

fs.readFile('DATA', 'utf8', function(err, contents) {
    const times = JSON.parse(contents)
	console.log(times)
});
