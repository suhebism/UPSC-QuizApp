// 'use client'; // This is required to use hooks in the Pages Router

// import { useRouter } from 'next/router'; // next/router for Pages Router
// import { useState } from 'react';
// import quizData from '../data/quizData';

// const QuizLevel = () => {
//   const router = useRouter(); // Use next/router in Pages Router
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const quizLevelData = quizData[0]; // Hardcoded for demo purposes
//   const { questions } = quizLevelData;

//   const handleAnswerSelect = (index) => {
//     setSelectedAnswer(index);
//   };

//   const handleSubmit = () => {
//     if (selectedAnswer === null) return;

//     if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null);
//     } else {
//       setShowResult(true);
//     }
//   };

//   return (
//     <div>
//       {!showResult ? (
//         <div>
//           <p>{questions[currentQuestionIndex].question}</p>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div key={index}>
//               <input
//                 type="radio"
//                 name="answer"
//                 value={index}
//                 checked={selectedAnswer === index}
//                 onChange={() => handleAnswerSelect(index)}
//               />
//               <label>{option}</label>
//             </div>
//           ))}
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       ) : (
//         <div>Your score: {score}</div>
//       )}
//     </div>
//   );
// };

// export default QuizLevel;
