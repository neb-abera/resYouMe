import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import path from 'path';
import axios from 'axios';
// import cors
import cors from 'cors';
import url from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5174'
};
app.use(cors(corsOptions));
app.use(express.json());

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);
// app.use('/', express.static(path.join(__dirname, '../client')));

// console.log(process.env.PORT);
// console.log('OpenAI', process.env.OPENAI_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY
});
const openai = new OpenAIApi(configuration);
const openAIAuth = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_KEY}`
  }
};
const quizAuth = { headers: { 'x-api-key': process.env.QUIZAPI_KEY } };

// handle post requests from frontend for api request to openai for completion
app.get('/completion', (req, res) => {
  // console.log('in completion route');
  const query = req.query.prompt;
  // console.log('query', query);
  const prompt = `I'm a professional and I am an expert in the field. I want precise answers with no fluff that wastes my tokens. The prompt I want you to answer is as follows. ${query}`;
  // console.log('prompt', prompt);
  const request = {
    model: 'text-davinci-003',
    max_tokens: 2048,
    prompt: prompt
  };
  // console.log('request', request);
  // res.send(
  //   'I am a professional and I am an expert in the field. I want precise answers with no fluff that wastes my tokens. The prompt I want you to answer is as follows. What is the best way to get a job as a software engineer?'
  // );
  // res.sendStatus(200);
  axios
    .post('https://api.openai.com/v1/completions', request, openAIAuth)
    .then((response) => {
      // console.log(response.data);
      // console.log(response.data.choices[0].text);
      const finalAnswer = response.data.choices[0].text.replace(/\n/g, '');
      res.send(finalAnswer);
      // res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.get('/image', (req, res) => {
  const request = {
    prompt: req.query.prompt
  };
  // console.log('in image route');
  // console.log('request', req.query.prompt);
  // res.send('https://m.media-amazon.com/images/I/71ANuj-CcXL.jpg');
  // res.sendStatus(200);
  // console.log('request', request);

  axios
    .post('https://api.openai.com/v1/images/generations', request, openAIAuth)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
      // res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.get('/quiz', (req, res) => {
  // console.log('in quiz route');
  axios
    .get('https://quizapi.io/api/v1/questions', quizAuth)
    .then((response) => {
      const questions = [];
      for (let i = 0; i < response.data.length; i++) {
        questions.push(response.data[i]);
      }
      res.send(questions);
      // res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

console.log('port', port);
console.log('openai', process.env.OPENAI_KEY);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
