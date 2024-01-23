// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from './routes/routes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
app.use(express.json());
app.use('/api', routes);