const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch (err) {
    console.error(pc.red(`no se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePATH = path.join(directory, file)
    let fileStats
    try {
      fileStats = await fs.stat(filePATH) // status - informacion del archivo
    } catch (err) {
      console.error(pc.red(`no se pudo leer el archivo ${file}`))
      process.exit(1)
    }
    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? 'DIR' : 'FILE'
    const fileSize = fileStats.size.toString()
    const fileModified = fileStats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(30))} ${pc.green(
      fileSize.padStart(10)
    )} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
