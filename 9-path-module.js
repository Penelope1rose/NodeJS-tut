const path = require('path')

// to see which seperator your platform use. this case, windows is a backward slash
console.log(path.sep)

// joins a sequence of path segments using platform specific seperator
// returns a normalized resulting path
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// only display/return the last portion of the file path. this case, its 'test.txt'
const base = path.basename(filePath)
console.log(base)

// return absolute path with sequence of paths or path segments 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)