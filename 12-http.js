const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is out short histor')
    }
    res.end(`<h1> Oops! </h1>
    <p> We can't seem to response </P
    <a href="/"> back home </a>
    `)
})

server.listen(5000)