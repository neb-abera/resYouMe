import { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './Home.css';
import { ThemeProvider } from '@emotion/react';
import axios from 'axios';
import Quiz from '../Quiz/Quiz';

const questionsArray = [
  {
    id: 422,
    question: 'Is the NULL value treated as 0?',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'MySQL'
      }
    ],
    category: 'SQL',
    difficulty: 'Easy'
  },
  {
    id: 346,
    question: 'MySQL supports multiple database storage engines.',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'MySQL'
      }
    ],
    category: 'SQL',
    difficulty: 'Easy'
  },
  {
    id: 606,
    question: 'How is a constant defined in a PHP script?',
    description: null,
    answers: {
      answer_a: 'define ("ACONSTANT" 123)',
      answer_b: 'define ("ACONSTANT", 123);',
      answer_c: 'define (CONSTANT, 123);',
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'PHP'
      }
    ],
    category: 'Code',
    difficulty: 'Easy'
  },
  {
    id: 1018,
    question:
      'Which Process Validates And Configures Data For The Api Objects Like Pods, Services?',
    description: null,
    answers: {
      answer_a: 'kube-apiserver process validates and configures data for the api objects.',
      answer_b: 'kube-apiserver process validates and configures data for the gui objects.',
      answer_c: 'kube-apiserver process validates and configures data for the cli objects.',
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'Kubernetes'
      }
    ],
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 796,
    question: 'What is a Dockerfile?',
    description: null,
    answers: {
      answer_a:
        'Docker cannot be build images automatically by reading the instructions from a file called Dockerfile.',
      answer_b:
        'Docker can build audio automatically by reading the instructions from a file called Dockerfile.',
      answer_c:
        'Docker can build images automatically by reading the instructions from a file called Dockerfile.',
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'Docker'
      }
    ],
    category: 'Docker',
    difficulty: 'Medium'
  },
  {
    id: 153,
    question: 'The HTML global attribute, "contenteditable" is used to:',
    description: null,
    answers: {
      answer_a: 'Specify whether the content of an element should be editable or not',
      answer_b: 'Update content from the server',
      answer_c:
        'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
      answer_d: 'Return the position of the first found occurrence of content inside a string',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'HTML'
      }
    ],
    category: '',
    difficulty: 'Easy'
  },
  {
    id: 289,
    question: 'How many types of plans are available in wordpress by default?',
    description: null,
    answers: {
      answer_a: '4',
      answer_b: '6',
      answer_c: '2',
      answer_d: '3',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'WordPress'
      }
    ],
    category: 'CMS',
    difficulty: 'Medium'
  },
  {
    id: 344,
    question: 'A systematic collection of data stored in a central location is known as?',
    description: null,
    answers: {
      answer_a: 'CSV',
      answer_b: 'Flat file',
      answer_c: 'Database',
      answer_d: 'Excel',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'MySQL'
      }
    ],
    category: 'SQL',
    difficulty: 'Easy'
  },
  {
    id: 480,
    question: 'Which of the following attribute triggers event when an element gets user Input?',
    description: null,
    answers: {
      answer_a: 'Ondata',
      answer_b: 'Onloadeddata',
      answer_c: 'Oninput',
      answer_d: 'Onhaschange',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'HTML'
      }
    ],
    category: 'Code',
    difficulty: 'Medium'
  },
  {
    id: 704,
    question: 'What is LILO w.r.t linux?',
    description: null,
    answers: {
      answer_a: 'LILO means linux loader, which loads the kernel into memory and starts the OS.',
      answer_b: 'LILO means linux loader, which loads the OS into memory and starts the GUI.',
      answer_c:
        "LILO means linux loader, which loads the GUI into memory so the user can see what's going on.",
      answer_d:
        'LILO means linux loader, which loads the software into memory and starts the kernel then the OS.',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'Linux'
      }
    ],
    category: 'Linux',
    difficulty: 'Hard'
  },
  {
    id: 76,
    question: 'The die() and exit() functions do the exact same thing.',
    description: null,
    answers: {
      answer_a: 'False',
      answer_b: 'True',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_b',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'PHP'
      }
    ],
    category: '',
    difficulty: 'Easy'
  },
  {
    id: 241,
    question: 'Can you start two MySQL servers at one PC?',
    description: null,
    answers: {
      answer_a: 'True',
      answer_b: 'False',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'MySQL'
      }
    ],
    category: 'SQL',
    difficulty: 'Easy'
  },
  {
    id: 320,
    question: 'Which file is the single most important file in Wordpress?',
    description: null,
    answers: {
      answer_a: 'header.php',
      answer_b: 'wp-setting.php',
      answer_c: 'wp-config.php',
      answer_d: 'page.php',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'WordPress'
      }
    ],
    category: 'CMS',
    difficulty: 'Easy'
  },
  {
    id: 79,
    question: 'In PHP, the only way to output text is with echo.',
    description: null,
    answers: {
      answer_a: 'False',
      answer_b: 'True',
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'PHP'
      }
    ],
    category: '',
    difficulty: 'Easy'
  },
  {
    id: 507,
    question: 'Which is not a domain name extension',
    description: null,
    answers: {
      answer_a: '.mil',
      answer_b: '.com',
      answer_c: '.int',
      answer_d: '.org',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'HTML'
      }
    ],
    category: 'Code',
    difficulty: 'Medium'
  },
  {
    id: 389,
    question: 'The maximum length of the char columns is',
    description: null,
    answers: {
      answer_a: '65, 535 Bytes',
      answer_b: 'None Of The Mentioned',
      answer_c: '255 Bytes',
      answer_d: '256 Bytes',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'MySQL'
      }
    ],
    category: 'SQL',
    difficulty: 'Easy'
  },
  {
    id: 691,
    question: 'Which operator can be used to throw a process into background?',
    description: null,
    answers: {
      answer_a: '&',
      answer_b: '&&',
      answer_c: '|',
      answer_d: '||',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'BASH'
      }
    ],
    category: 'Linux',
    difficulty: 'Easy'
  },
  {
    id: 911,
    question: 'Kubernetes cluster data is stored in which of the following?',
    description: null,
    answers: {
      answer_a: 'Kube-apiserver',
      answer_b: 'Kubelet',
      answer_c: 'Etcd',
      answer_d: 'None of the above',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'false',
      answer_c_correct: 'true',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'Kubernetes'
      }
    ],
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 528,
    question: 'Which of the following is an attribute related to font tag?',
    description: null,
    answers: {
      answer_a: 'size',
      answer_b: 'All the options are style tags',
      answer_c: 'color',
      answer_d: 'face',
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'false',
      answer_b_correct: 'true',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'HTML'
      }
    ],
    category: 'Code',
    difficulty: 'Medium'
  },
  {
    id: 925,
    question: 'What is Ingress network?',
    description: null,
    answers: {
      answer_a:
        'Ingress network is a collection of rules that acts as an entry point to the Kubernetes cluster.',
      answer_b:
        'Ingress network is a routing outh that acts as an exit point to the Kubernetes cluster.',
      answer_c:
        'Ingress network is a http node that acts as an entry point to the Kubernetes cluster.',
      answer_d: null,
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: 'false',
    correct_answers: {
      answer_a_correct: 'true',
      answer_b_correct: 'false',
      answer_c_correct: 'false',
      answer_d_correct: 'false',
      answer_e_correct: 'false',
      answer_f_correct: 'false'
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [
      {
        name: 'Kubernetes'
      }
    ],
    category: 'DevOps',
    difficulty: 'Hard'
  }
];

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const simpleArrayOfObjects = [
  { id: 1, question: 'What is the capital of France?', category: 'Geography', difficulty: 'Easy' },
  { id: 2, question: 'What is the capital of Germany?', category: 'Geography', difficulty: 'Easy' },
  { id: 3, question: 'What is the capital of Spain?', category: 'Geography', difficulty: 'Easy' }
];

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

const Home = () => {
  const [pictureClicked, setPictureClicked] = useState(false);
  const [programClicked, setProgramClicked] = useState(false);
  const [quizClicked, setQuizClicked] = useState(false);
  const [questionClicked, setQuestionClicked] = useState(false);
  const [request, setRequest] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handlePictureClick = () => {
    console.log('picture clicked');
    setPictureClicked(true);
    setProgramClicked(false);
    setQuestionClicked(false);
    setQuizClicked(false);
    setApiResponse('');
  };

  const handleProgramClick = () => {
    console.log('signup clicked');
    setProgramClicked(true);
    setPictureClicked(false);
    setQuestionClicked(false);
    setQuizClicked(false);
    setApiResponse('');
  };

  const handleQuizClick = () => {
    console.log('quiz clicked');
    setQuizClicked(true);
    setPictureClicked(false);
    setProgramClicked(false);
    setQuestionClicked(false);
    setApiResponse('');
  };

  const handleQuestionClick = () => {
    // route them to the question page
    console.log('question clicked');
    setQuestionClicked(true);
    setPictureClicked(false);
    setProgramClicked(false);
    setQuizClicked(false);
    setApiResponse('');
  };

  const handleRequestSubmit = (event: any) => {
    event.preventDefault();
    // convert text to correct format for openai
    let url = 'http://localhost:3000/';
    if (questionClicked) {
      url = `http://localhost:3000/completion?prompt=${request}`;
    } else if (pictureClicked) {
      url = `http://localhost:3000/image?prompt=${request}`;
    }
    console.log('url', url);
    axios
      .get(url)
      .then((response) => {
        // setQuestionClicked(false);
        // setPictureClicked(false);
        // setProgramClicked(false);
        setApiResponse(response.data);
        console.log('received response from server ', response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div className="Home">
      <div className="services">
        <h1>What do you want to do?</h1>
        <Button variant="outlined" onClick={handleQuizClick}>
          Take a quiz
        </Button>
        <Button variant="outlined" onClick={handleQuestionClick}>
          Ask me a question
        </Button>
        {/* <Button variant="outlined" onClick={handleProgramClick}>
          Ask me to program something
        </Button> */}
        <Button variant="outlined" onClick={handlePictureClick}>
          Want a picture?
        </Button>
      </div>
      {quizClicked ? <h2>Here are some technical questions</h2> : null}
      {questionClicked ? <h2>What would you like to ask me?</h2> : null}
      {programClicked ? <h2>What would you like me to program?</h2> : null}
      {pictureClicked ? <h2>What would you like me to make a picture of?</h2> : null}
      {questionClicked || programClicked || pictureClicked ? (
        <div>
          <input
            className="searchbar"
            type="text"
            onChange={(e) => setRequest(e.target.value)}
            required
          />
          <input type="submit" onClick={handleRequestSubmit} />
        </div>
      ) : null}
      {apiResponse !== '' && questionClicked ? (
        <div>
          <h2>The answer is </h2>
          <h3>{apiResponse}</h3>
        </div>
      ) : null}
      {apiResponse !== '' && pictureClicked ? (
        <div>
          <h2>Here is your picture</h2>
          <img src={apiResponse.data[0].url} className="aiPicture" alt="AI generated" />
        </div>
      ) : null}
      {/* <Quiz questions={simpleArrayOfObjects} /> */}
    </div>
  );
};

export default Home;

// import { Configuration, OpenAIApi } from 'openai';
// const configuration = new Configuration({
//   organization: 'org-FWuxFAgymlykB0QZAteFZmNY',
//   apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// GET https://api.openai.com/v1/models
// 'Authorization: Bearer YOUR_API_KEY';

// <ThemeProvider theme={theme}>
//   <FormControl>
//     <InputLabel color="primary" htmlFor="my-input">
//       What would you like me to program?
//     </InputLabel>
//     <Input id="my-input" fullWidth aria-describedby="my-helper-text" />
//     <FormHelperText id="my-helper-text" color="primary">
//       being specific is best
//     </FormHelperText>
//   </FormControl>
// </ThemeProvider>
