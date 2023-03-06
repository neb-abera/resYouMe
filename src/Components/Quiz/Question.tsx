const Question = (question: any) => {
  return (
    <li>
      <h3>{question.question}</h3>
      {question.category ? <h4>{question.category}</h4> : null}
      {question.difficulty ? <h4>{question.difficulty}</h4> : null}
    </li>
  );
};

export default Question;
