import swaggerAutogen from 'swagger-autogen'

swaggerAutogen()

const doc = {
  info: {
    title: 'Contacts API',
    description: 'CSE 341 - week 04'
  },
  host: 'localhost:8080',
  schemes: ['http']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js')
// })
