import { useQuiz } from "../context/quizContext";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      {/*  Add a progress element with a max attribute set to the 
      number of questions and a value attribute set to the index 
      plus the number of questions if the answer is not null. */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
