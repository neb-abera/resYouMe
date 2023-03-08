const Answers = ({ answers }, { correct_answers }) => {
  const displayAnswers = answers.map((answer: any) => () => {
    if (answer) {
      return (
        <li key={answer.id}>
          <h4>{answer.answer}</h4>
        </li>
      );
    }
  });
  return <ul>{displayAnswers}</ul>;
};

export default Answers;
