// app/quiz/[id]/page.jsx

import React from "react";
import quizData from "../../../data/quizData";
import QuizLevel from "../../../components/QuizLevel";

const QuizPage = ({ params }) => {
  const levelId = Number(params.id); // Get the dynamic parameter from the URL
  const quizLevelData = quizData.find((quiz) => quiz.id === levelId); // Find the quiz data for the current level

  // Check if quizLevelData is found
  if (!quizLevelData) {
    return <div>Quiz not found</div>; // Handle the case where the quiz data does not exist
  }

  return <QuizLevel quizLevelData={quizLevelData} currentLevel={levelId} />; // Pass the levelId as currentLevel
};

export default QuizPage;
