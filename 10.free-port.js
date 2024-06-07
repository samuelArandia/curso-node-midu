const net = require('node:net') // PROTOCOLO TCP

function findAvailablePort (port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.unref()
    server.listen(port, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        findAvailablePort(port + 1).then(port => resolve(port))
      } else {
        reject(error)
      }
    })
  })
}

module.exports = { findAvailablePort }
