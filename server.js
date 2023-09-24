import express from 'express';
import router from './routes/index.js';
import connectDB from './db/connect.js';
import dotenv from "dotenv";


const app = express();

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5050;

app
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', router);

app.listen(process.env.PORT || PORT, () => console.log(`It's working on port ${PORT}!`));