const os = require('node:os')

console.log('Información del sistema operativo')
console.log('----------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Version del sistema operativo:', os.version())
console.log('Memoria total del sistema operativo:', os.totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria libre del sistema operativo:', os.freemem() / 1024 / 1024 / 1024, 'GB')
console.log('Arquitectura del sistema operativo:', os.arch())
console.log('CPUs', os.cpus())
console.log('Interfaces de red:', os.networkInterfaces())
console.log('El ordenador está encendido desde hace:', os.uptime() / 60 / 60, 'horas')
