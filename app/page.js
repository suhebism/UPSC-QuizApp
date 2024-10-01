import React from "react";
import Nav from "@/components/Nav";
import Badges from "@/components/Badges"
import QuizCard from '../components/QuizCard';
import quizData from '../data/quizData';
import Link from "next/link";
import Slider from "@/components/Slider";
export default function Home() {
  const currentQuiz = quizData[0];
  return (
    <div className="flex flex-col gap-2">
      <Nav/>
      <Badges />
      <div className="px-5 flex justify-between items-end mt-3">
        <h1 className="text-white text-lg font-black">Active cource</h1>
        <Link  href="/all-quiz"><h1 className="text-white text-sm font-normal underline">View all</h1></Link>
      </div>
      <QuizCard  quizLevelData={currentQuiz} />
      <div className="px-5 flex justify-between items-end mt-4">
        <h1 className="text-white text-lg font-black">Featured</h1>
        <h1 className="text-white text-sm font-normal underline">View all</h1>
      </div>
      <Slider/>
    </div>
  );
}
