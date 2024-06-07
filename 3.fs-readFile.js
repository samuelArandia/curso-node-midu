// Esto solo en los modulos nativos que no tiene promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <-- ejecutas es callba
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log('Primer texto: ', text)
})

console.log('Haciendo cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { // <-- ejecutas es callback
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log('Segundo texto: ', text)
})
