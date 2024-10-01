import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const page = ({ quizLevelData }) => {
  return (
    <div className='mx-5 p-5 w-[350px] h-[300px] bg-mainGreen rounded-3xl'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-black font-extrabold text-4xl'>{quizLevelData.title}</h1>
        <div className='flex flex-col items-center gap-1'>
          <div className='font-thin text-xs'>Level :{quizLevelData.level}</div>
          {/* <div className='flex flex-row gap-1'>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tl-md rounded-bl-md bg-${level}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] bg-${level}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tr-md rounded-br-md bg-${level}`}></div>
          </div> */}
        </div>
        <p>{`Subject - Chapter ${quizLevelData.chapter}`}</p>
        <p>1 week left</p>
      <p>+25 XP</p>
      <Link href={`/quiz/${quizLevelData.id}`}>Continue Learning</Link>
      </div>
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
