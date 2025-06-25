import React from "react";

function Summary({ answersResults, onRestart, questions }) {
  const totalQuestions = Object.keys(answersResults).length;
  const correctAnswers = Object.values(answersResults).filter(
    (result) => result.isCorrect
  ).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = percentage >= 80;

  return (
    <>
      <div>
        <h1>
          {passed ? (
            <span style={{ color: "green" }}>Gratulacje, zaliczony!</span>
          ) : (
            <span style={{ color: "red" }}>Niestety, quiz niezaliczony</span>
          )}
        </h1>
        <h2>{`Twój wynik to ${percentage}% (${correctAnswers} z ${totalQuestions} poprawnych odpowiedzi)`}</h2>
        <div>
          {Object.entries(answersResults).map(([index, result]) => {
            const questionIndex = parseInt(index);
            const question = questions[questionIndex];
            const userAnswer = result.answer;
            const isCorrect = result.isCorrect;

          
            return (
              <div key={index}>
                <div className="summary">
                  <p className="question">
                    Pytanie {questionIndex + 1}: {question.text}
                  </p>
                  <p>
                    Twoja odpowiedź:{" "}
                    <span style={{ color: isCorrect ? "green" : "red"}}>
                      {userAnswer}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className ="ending"onClick={onRestart}>Zagraj ponownie</button>
      </div>
    </>
  );
}

export default Summary;
