import { useState } from "react";
import { MyContext } from "../Context/MyContext";
import { useContext } from "react";
const Context = () => {
  const { value, setValue } = useContext(MyContext);
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const result = () => {
    setValue(input);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-center">{value}</h1>
        <input type="text" className="border-2 p-2" onChange={handleChange} />
        <button
          className="bg-black text-base mt-4 text-white py-2 px-5"
          onClick={result}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default Context;
