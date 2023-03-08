import { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './Home.css';
import { ThemeProvider } from '@emotion/react';
import axios from 'axios';
import Quiz from '../Quiz/Quiz';

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
  const [quiz, setQuiz] = useState([]);

  const handlePictureClick = () => {
    console.log('picture clicked');
    setPictureClicked(true);
    setProgramClicked(false);
    setQuestionClicked(false);
    setQuizClicked(false);
    setApiResponse('');
    setRequest('');
    setQuiz([]);
    console.log('request', request);
  };

  const handleProgramClick = () => {
    console.log('signup clicked');
    setProgramClicked(true);
    setPictureClicked(false);
    setQuestionClicked(false);
    setQuizClicked(false);
    setApiResponse('');
    setRequest('');
    console.log('request', request);
  };

  const handleQuizClick = () => {
    console.log('quiz clicked');
    setQuizClicked(true);
    setPictureClicked(false);
    setProgramClicked(false);
    setQuestionClicked(false);
    setApiResponse('');
    setRequest('');
    axios
      .get('http://localhost:3000/quiz')
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
    console.log('request', request);
  };

  const handleQuestionClick = () => {
    // route them to the question page
    console.log('question clicked');
    setQuestionClicked(true);
    setPictureClicked(false);
    setProgramClicked(false);
    setQuizClicked(false);
    setRequest('');
    setQuiz([]);
  };

  const handleRequestSubmit = (event: any) => {
    // event.preventDefault();
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
          Get study questions
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
      {quizClicked ? (
        <div>
          <h2>Here are some questions to study</h2>
          <Quiz key="quiz" questions={quiz} />
        </div>
      ) : null}
      {questionClicked && apiResponse === '' ? <h2>What would you like to ask me?</h2> : null}
      {programClicked && apiResponse === '' ? <h2>What would you like me to program?</h2> : null}
      {pictureClicked && apiResponse === '' ? (
        <h2>What would you like me to make a picture of?</h2>
      ) : null}
      {(questionClicked || programClicked || pictureClicked) && apiResponse === '' ? (
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
