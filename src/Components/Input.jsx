import React from "react";
import { IoIosSearch } from "react-icons/io";
const Input = ({placeholder}) => {
  return (
    <div>
      <div className="border border-violet-500 flex items-center">
        <i><IoIosSearch className="text-2xl ml-4"></IoIosSearch></i>
        <input type="text" placeholder={placeholder} className="border-none p-3 focus:outline-none w-full" />
      </div>
    </div>
  );
};

export default Input;
// import React from "react";
// import { IoIosSearch } from "react-icons/io";

// const Input = () => {
//   return (
//     <div>
//       <div className="flex items-center border-2 border-violet-700">
//         <i className="ml-2">
//           <IoIosSearch />
//         </i>
//         <input
//           type="text"
//           className="border-none focus:outline-none py-2 px-1"
//           placeholder="Search..."
//         />
//       </div>
//     </div>
//   );
// };
// export default Input;
