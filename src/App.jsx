import React from "react";
import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { Questions } from "./components/quizQuestions";
import QuizQuestion from "./components/QuizQuestion";
import Summary from "./components/Summary";


function App() {
  
  const [startQuiz, setstartQuiz] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersResults, setAnswersResults] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  
  function handleStart() {
    setstartQuiz(true);
    setQuestionIndex(0)
    setAnswersResults({});
    setShowSummary(false);
  }

  function handleQuestion(answerText, isCorrect) {
    setAnswersResults(prevResults => ({
      ...prevResults,
      [questionIndex]: { answer: answerText, isCorrect: isCorrect }
    }));
    
    if (questionIndex+1<Questions.length) {
        setQuestionIndex((prev) => prev + 1);
    } else {
        setShowSummary(true)
    }
  }

  function handleRestart() {
    setstartQuiz(false);
    setQuestionIndex(0);
    setAnswersResults({});
    setShowSummary(false);
  }


  return (
    <>
      {!startQuiz ? (
        <StartScreen handleStart={handleStart} />
      ) : showSummary ? (
        <Summary answersResults={answersResults} onRestart={handleRestart} questions ={Questions} />
      ) : (
        <QuizQuestion
          index={questionIndex}
          handleQuestion={handleQuestion}
          text={Questions[questionIndex].text}
          answers={Questions[questionIndex].answers}/>
      )}
    </>
  );
}





export default App;



