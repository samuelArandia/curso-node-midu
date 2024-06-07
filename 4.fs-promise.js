const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto: ', text)
  })
  .catch(err => {
    console.error('Error:', err)
  })

console.log('Haciendo cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto: ', text)
  })
  .catch(err => {
    console.error('Error:', err)
  })
