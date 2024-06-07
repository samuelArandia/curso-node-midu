const http = require('node:http') // PROTOCOLO HTTP
const { findAvailablePort } = require('./10.free-port')

const port = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

findAvailablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
  })
})
