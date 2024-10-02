"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Scale, X } from 'lucide-react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import bird from '../public/img/bird.png';
import { motion } from 'framer-motion';
const QuizLevel = ({ quizLevelData, currentLevel }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false); // New state for showing greeting
  // const [close, setClose] = useState(false);
  const [prompt, setPrompt] = useState (false)
 
  const promptToClose =()=>{
    setPrompt(true);
  }
  const confirmExit=(choice)=>{
    if (choice ==='yes'){
      router.push('/');
    } else{
      setPrompt(false);
    }
  }

  const questions = quizLevelData?.questions || [];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    console.log('Submit');

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

  const totalQuestions = quizLevelData.questions.length;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-col items-center h-screen pt-5 pb-10 justify-between">
      <X className="fixed top-5 left-5 text-white cursor-pointer" onClick={promptToClose}/>{
        prompt &&(
          <div
          className='fixed z-50 h-screen w-screen bg-opacity-50 backdrop-blur-md bg-black text-white flex gap-10 items-center justify-center'>
            <motion.div
             initial={{opacity:0, scale: .5 }}  // Initial scale of 0
             animate={{opacity:1, scale: 1 }}  // Animate to scale of 1
             exit={{ scale: 0 }}     // When exiting, scale back to 0
             transition={{ duration: .2, ease: "easeInOut" }}  // Animation properties
            className='h-20 w-1/2 bg-green-700 flex items-center justify-around'
            onClick={(e) => e.stopPropagation()}  // Stop propagation inside green part
            >
              <button className='w-20 bg-white text-black rounded-full' onClick={()=>confirmExit('yes')}>Yes</button>
              <button className='w-20 bg-white text-black rounded-full'  onClick={()=>confirmExit('no')}>No</button>
            </motion.div>
          </div>
        )
      }
      <div className='w-full'>
        <h2 className="text-white text-center text-lg mb-2">{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</h2>
        <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />
      </div>
      <div className="flex flex-col items-center px-5 justify-center">
        {!showResult ? (
          <div className="flex flex-col items-center gap-5 -mt-20">
            <p className="text-white text-xl text-center font-semibold h-10">{questions[currentQuestionIndex]?.question}</p>
            <Image src={bird} width={100} height={100} alt="bird" />
            <div className="options flex flex-col gap-5 text-white">
              {questions[currentQuestionIndex]?.options.map((option, index) => (
                <div
                  key={index}
                  className={`py-3 px-5 w-[350px] border-[1px] rounded-full text-white focus:outline-none transition-all duration-300 ${
                    selectedAnswer === index
                      ? 'border-green-400 text-green-400'
                      : 'border-gray-500 text-gray-500'
                  }`}
                  onClick={() => handleAnswerSelect(index)} // Trigger option select on div click
                >
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswerSelect(index)}
                    className="hidden" // Hide radio button
                  />
                  <label className={`py-3 px-5 w-[350px] focus:outline-none transition-all duration-300 ${
                    selectedAnswer === index
                      ? ' text-green-400'
                      : 'text-gray-500'
                  }`}>{option}</label>
                </div>
              ))}
            </div>
            
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
      <div className='w-full flex items-center justify-center'>
        <button
                className={` bottom-5 w-[350px] h-14 font-bold rounded-full bg-white text-black transition-all duration-300 ${
                  selectedAnswer === null ? 'border-[1px] border-[#767676] bg-transparent text-[#767676] cursor-not-allowed' : 'opacity-100'
                }`}
                disabled={selectedAnswer === null}
                onClick={handleSubmit}
              >
                Submit
        </button>
      </div>
    </div>
  );
};

export default QuizLevel;
