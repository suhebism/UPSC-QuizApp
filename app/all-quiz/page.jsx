import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="text-white">
      <div className="flex items-center w-full gap-5">
        <Link href="/" className="absolute top-0 left-5">Back</Link>
      </div>
        <h1 className="text-center">All Quizs</h1>
    </div>
  );
};

export default page;
