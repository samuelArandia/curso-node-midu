// process

// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1); //termina el proceso con un error

// podemos controlar eventos del proceso
process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})

// curren working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
console.log(process.platform)

// cpu
console.log(process.arch)
