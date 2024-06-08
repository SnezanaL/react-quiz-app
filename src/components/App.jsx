import { useQuiz } from "../context/quizContext";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Error from "./Error";

import WelcomeScreen from "./WelcomeScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Timer from "./Timer";
import Footer from "./Footer";
import Progress from "./Progress";
import FinishQuiz from "./FinishQuiz";

function App() {
  const { status, highScore } = useQuiz();
  console.log(highScore);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <WelcomeScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishQuiz />}
      </Main>
    </div>
  );
}

export default App;
