import React from 'react'

const TopicCard = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='w-40 h-36 rounded-lg bg-white'></div>
      <h1 className='font-medium text-lg text-white'>History</h1>
      <p className='text-xs text-[#A9A9A9]'>Sub topics : 23</p>
      <p className='text-xs text-[#A9A9A9]'>level : Beginner to Advance</p>
    </div>
  )
}

export default TopicCard
