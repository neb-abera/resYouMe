import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import path from 'path';
// import cors
import * as cors from 'cors';

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client')));

console.log(__dirname);
console.log(process.env.PORT);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
