import { useQuiz } from "../context/quizContext";
import Header from "./Header";
import WelcomeScreen from "./WelcomeScreen";

function App() {
  const { status } = useQuiz();
  console.log(status);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <WelcomeScreen />
      </main>
    </div>
  );
}

export default App;
