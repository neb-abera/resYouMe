// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import reactLogo from './assets/react.svg';
// import OpenAIForm from '../OpenAIForm';
// import Question from './Question';
import './Quiz.css';
import Question from './Question';

const Quiz = ({ questions }: any) => {
  const questionsList = questions.map((question: any) => (
    <Question key={question.id} question={question} />
  ));
  return <ul key="ulQuiz">{questionsList}</ul>;
};

export default Quiz;

// import { Configuration, OpenAIApi } from 'openai';
// const configuration = new Configuration({
//   organization: 'org-FWuxFAgymlykB0QZAteFZmNY',
//   apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// GET https://api.openai.com/v1/models
// 'Authorization: Bearer YOUR_API_KEY';
