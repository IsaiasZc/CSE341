import express from 'express';
import router from './routes/index.js';

const app = express();

const PORT = 3001;

app.use('/', router);

app.listen(process.env.PORT || PORT, () => console.log(`It's working on port ${PORT}!`));