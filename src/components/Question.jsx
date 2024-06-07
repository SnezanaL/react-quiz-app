import { useQuiz } from "../context/quizContext";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div className="start">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
