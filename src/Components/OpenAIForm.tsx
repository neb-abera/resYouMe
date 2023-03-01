import React from 'react';
import { Survey } from 'survey-react';
import 'survey-core/modern.min.css';
import { Model } from 'survey-core';

const OpenAIForm = () => {
  const surveyJSON = {
    logoPosition: 'right',
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'text',
            name: 'question1',
            title: 'What is the title of your last job'
          },
          {
            type: 'text',
            name: 'question2',
            title: 'Describe some of your day to day tasks'
          },
          {
            type: 'text',
            name: 'question3',
            title: 'Describe some achievements you had on the job'
          }
        ]
      },
      {
        name: 'page2',
        elements: [
          {
            type: 'text',
            name: 'question4',
            title: 'What would you say are your greatest strengths'
          }
        ]
      }
    ]
  };
  const survey = new Model(surveyJSON);
  return <Survey model={survey} />;
};

export default OpenAIForm;
