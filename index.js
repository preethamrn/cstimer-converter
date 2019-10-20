const fs = require('fs')

const infileName = process.argv[2] || 'cstimer.txt'
const outfileName = process.argv[3] || 'times.tsv'
fs.readFile(infileName, 'utf8', function(err, contents) {
    const times = JSON.parse(contents)
	var output = [["Session Name", "Scramble", "Times"], ]
	for (let [key, value] of Object.entries(times)) {
		console.log(`${key}`);
	}
	
	var outContents = output.reduce((acc, curr) => acc + curr.join('\t') + '\n', "")
	fs.writeFile(outfileName, outContents, 'utf8', () => {})
});
