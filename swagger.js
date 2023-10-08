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

swaggerAutogen(outputFile, endpointsFiles, doc)
