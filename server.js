const express = require('express')
const router = require('./routes/index.js')
const connectDB = require('./db/connect.js')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger.json')

const app = express()

dotenv.config()

connectDB()
const PORT = process.env.PORT || 5050

const options = {
  explorer: true
}

// body parser
app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  })
  .use('/', router)

app.listen(process.env.PORT || PORT, () => console.log(`It's working on port ${PORT}!`))
