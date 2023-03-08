import axios from 'axios';
import React, { useState } from 'react';
import './Quiz.css';

const Question = ({ question }: any) => {
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleCorrectAnswerClick = (event: any) => {
    console.log('correct answer clicked');
    setCorrectAnswerClicked(true);
    const url = `http://localhost:3000/completion?prompt=${question.question}`;
    axios
      .get(url)
      .then((response) => {
        setCorrectAnswer(response.data);
        console.log('answer response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <div key={question.id}>
      <h3 onClick={handleCorrectAnswerClick}>
        {`${question.question} `} {`${question.category}, `}
        {question.difficulty}
      </h3>
      {correctAnswerClicked ? <h4 className="answer">The answer is: {correctAnswer}</h4> : null}
    </div>
  );
};

export default Question;
