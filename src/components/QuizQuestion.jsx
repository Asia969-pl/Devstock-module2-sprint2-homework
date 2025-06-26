import React from "react";

function QuizQuestion({index, text, answers, handleQuestion}) {
  return (
    <div>
      <h2 className="question">{`Pytanie ${index + 1} ${text}`}</h2>
      <div className="buttonsContainer">
        {answers.map((answer, index) => {
          return (
            <button 
            onClick={() => handleQuestion(answer.text, answer.isCorrect)}
              className="questionButtons"
              key={index}
            >{`${answer.text}`}</button>
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestion;
