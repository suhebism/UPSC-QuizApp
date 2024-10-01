// components/QuizLevel.jsx
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuizLevel = ({ quizLevelData, currentLevel }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false); // New state for showing greeting

  const questions = quizLevelData?.questions || [];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      if (score + 1 === questions.length) {
        // User answered all questions correctly
        setShowGreeting(true); // Show greeting message
        setTimeout(() => {
          const nextLevel = currentLevel + 1; // Calculate the next level
          router.push(`/quiz/${nextLevel}`); // Navigate to the next level URL
        }, 3000); // Wait for 3 seconds before navigating
      } else {
        setShowResult(true);
      }
    }
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold">{`Level ${currentLevel}`}</h2>
      {!showResult ? (
        <div>
          <h2>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</h2>
          <p>{questions[currentQuestionIndex]?.question}</p>
          <div className="options">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerSelect(index)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>Your score: {score}</div>
      )}

      {showGreeting && (
        <div className="greeting-message">
          <h3 className="text-green-500 font-bold">Congratulations! You've completed Level {currentLevel}!</h3>
          <p>Great job! Get ready for the next challenge!</p>
        </div>
      )}
    </div>
  );
};

export default QuizLevel;
