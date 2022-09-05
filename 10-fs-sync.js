// we'll look at synchronous file read/write code
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

// write will create a new file if it doesnt exist, else overwrite
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

// write will create a new file if it doesnt exist, else append
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('Done with this task')
console.log('Starting the next one')