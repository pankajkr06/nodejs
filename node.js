// server.js
const http = require('http')
const server = http.createServer((req, res) => {
        console.log('New connection')
        res.end('Hello Cloud Run from Pankaj')
  })
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
