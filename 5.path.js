const path = require('node:path')

// unix ->  /
// windows ->  \
// Barras separadoras de directorios dependiendo del sistema operativo
console.log(path.sep)

// unir rutas con path.join
const filepath = path.join('content', 'subfolder', 'test.txt')
console.log(filepath)

// obtener la ultima parte de una ruta o el nombre del fichero
const base = path.basename(filepath)
console.log(base)

const filename = path.basename(filepath, '.txt')
console.log(filename)

const extension = path.extname(filepath)
console.log(extension)
