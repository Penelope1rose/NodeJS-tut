const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }

    if (req.url === '/history') {
        res.write('Here is our short history... we have no history. We were just born')
        res.end()
    }
    
    res.end(`<h1>Oops!</h1> <p> 404 page not found </p> <a href="/">Back Home</a>`)
})

server.listen(5000)