import { useEffect } from "react";
import { useQuiz } from "../context/quizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60); // 60 seconds in a minute
  const seconds = secondsRemaining % 60; // remaining seconds

  useEffect(
    function () {
      // Create an interval that dispatches a tick action every second.
      const id = setInterval(function () {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {/* // Add a conditional expression that displays
       a leading zero if mins is less than 10. */}
      {mins < 10 && "0"}
      {/* // Display the minutes and seconds. 
      Add a conditional expression that displays a leading zero
      if seconds is less than 10.*/}
      {mins}:{seconds < 10 && "0"}
      {/* // Display the seconds.  */}
      {seconds}
    </div>
  );
}
