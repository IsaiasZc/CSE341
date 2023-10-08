const swaggerAutogen = require('swagger-autogen')

swaggerAutogen()

const doc = {
  info: {
    title: 'Contacts API',
    description: 'CSE 341 - week 04'
  },
  host: 'cse341-isaias.onrender.com',
  schemes: ['https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
