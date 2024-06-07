import { useQuiz } from "../context/quizContext";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Error from "./Error";

import WelcomeScreen from "./WelcomeScreen";
import Question from "./Question";

function App() {
  const { status } = useQuiz();
  console.log(status);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <WelcomeScreen />}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}

export default App;
