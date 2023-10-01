import express from 'express'
import router from './routes/index.js'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = express()

dotenv.config()

connectDB()
const PORT = process.env.PORT || 5050

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  })
  .use('/', router)

app.listen(process.env.PORT || PORT, () => console.log(`It's working on port ${PORT}!`))
