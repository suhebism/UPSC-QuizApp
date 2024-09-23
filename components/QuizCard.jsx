import React from 'react';
import Image from 'next/image';

const page = ({level2, level3, level4}) => {
  return (
    <div className='mx-5 p-5 w-[350px] h-[300px] bg-mainGreen rounded-3xl'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-black font-extrabold text-4xl'>Quiz Card</h1>
        <div className='flex flex-col items-center gap-1'>
          <div className='font-thin text-xs'>Beginner</div>
          <div className='flex flex-row gap-1'>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tl-md rounded-bl-md bg-${level2}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] bg-${level3}`}></div>
            <div className={`w-3 h-3 border-black border-[1px] rounded-tr-md rounded-br-md bg-${level4}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
