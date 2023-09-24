import express from "express";
import router from "./routes/index.js";


const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', router);

app.listen(process.env.PORT || PORT, () => console.log("Its working :D"))