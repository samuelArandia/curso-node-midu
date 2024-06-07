const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log('Archivos en el directorio actual:')
  files.forEach(file => {
    console.log(file)
  })

  const newArray = files.map(file => file.toUpperCase())
  console.log('Archivos en el directorio actual en mayúsculas:')
  console.log(newArray)
})
