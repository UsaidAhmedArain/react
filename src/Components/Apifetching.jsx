import React, { useEffect, useState } from "react";
import axios from "axios";
const Apifetching = () => {
  useEffect(() => {
    generateData();
  }, []);
  const generateData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    showData(response.data);
  };
  const [data, showData] = useState([]);
  return (
    <div>
      {data.map((value) => (
        <div key={value} className="flex gap-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Name</h1>
            <h1>{value.name}</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">User Email </h1>
            <p>{value.email}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">UserName</h1>
            <p>{value.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apifetching;
