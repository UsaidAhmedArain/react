import React, { useState } from "react";

const Marks = () => {
  const [num, checkNum] = useState(0);
  const [evenOdd, isevenOdd] = useState("");
  const handleChange = (e) => {
    checkNum(e.target.value);
  };

  const check = () => {
    if (num % 2 === 0) {
      isevenOdd("Number is Even");
    } else {
      isevenOdd("Number is Odd");
    }
  };
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className={`text-3xl font-bold text-cyan-600`}>Even & Odd Program</h1>
      <div>
        <input
          className={`mt-4 border-2 px-6 py-2 outline-none placeholder:text-black rounded-md `}
          type="text"
          placeholder="Enter Number"
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex justify-center flex-col">
        <button
          className={`p-2 text-white mt-4 px-12 bg-cyan-600`}
          onClick={check}
        >
          Result
        </button>
        <p className="mt-2 text-cyan-600">The Number is {evenOdd}</p>
      </div>
    </div>
  );
};

export default Marks;
