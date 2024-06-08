/* eslint-disable react/prop-types */
import { useQuiz } from "../context/quizContext";

export default function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {/* // Add a button for each option in the question object.  */}

      {question.options.map((option, index) => (
        <button
          // Add a className attribute with the value btn btn-option,
          // answer, correct, or wrong depending on the following conditions:
          // The index is equal to the answer and hasAnswered is true.
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          // Add an onClick event handler that dispatches a NEW_ANSWER action
          // with the index as the payload.
          onClick={() => dispatch({ type: "NEW_ANSWER", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
