import { platform, version, totalmem, freemem, arch, cpus, networkInterfaces, uptime } from 'node:os'

console.log('Información del sistema operativo')
console.log('----------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Version del sistema operativo:', version())
console.log('Memoria total del sistema operativo:', totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria libre del sistema operativo:', freemem() / 1024 / 1024 / 1024, 'GB')
console.log('Arquitectura del sistema operativo:', arch())
console.log('CPUs', cpus())
console.log('Interfaces de red:', networkInterfaces())
console.log('El ordenador está encendido desde hace:', uptime() / 60 / 60, 'horas')
