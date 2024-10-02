import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Book } from "lucide-react";
const page = ({ quizLevelData }) => {
  return (
    <div className="mx-5 p-5 w-[350px] h-[300px] bg-mainGreen rounded-3xl flex flex-col justify-between">
      <div className="flex flex-col justify-between gap-3">
        <div className="flex items-start justify-between w-full">
          <h1 className="text-black font-extrabold text-4xl w-1/2">
            {quizLevelData.title}
          </h1>
          <div className="font-semibold text-xs">
            Level - {quizLevelData.level}
          </div>
        </div>

        <div className="flex gap-2">
          <Book strokeWidth={2} size={20} />
          <p className="font-semibold ">{`Subject - Chapter ${quizLevelData.chapter}`}</p>
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1 mx-2">
          <p className="font-semibold">1 week left</p>
          <p className="font-semibold text-sm">+25 XP</p>
        </div>
        <Link href={`/quiz/${quizLevelData.id}`}>
          <Button />
        </Link>
        </div>
        {/* <div className='flex flex-col items-center gap-1'>
          <div className='flex flex-row gap-1'>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tl-md rounded-bl-md bg-${level}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] bg-${level}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tr-md rounded-br-md bg-${level}`}></div>
          </div>
        </div> */}
        
      
    </div>
  );
};

export default page;

// components/QuizCard.jsx

// Example QuizCard component (simplified)
// import Link from 'next/link';

// const QuizCard = ({ quizLevelData }) => {
//   return (
//     <div className="quiz-card">
//       <h2>{quizLevelData.title}</h2>
//       <p>{`Subject - Chapter ${quizLevelData.chapter}`}</p>
//       <p>1 week left</p>
//       <p>+25 XP</p>
//       <Link href={`/quiz/${quizLevelData.id}`}>Continue Learning</Link>
//     </div>
//   );
// };

// export default QuizCard;
