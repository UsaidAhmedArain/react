// import React, { useState } from "react";
// import MobileBtn from "./MobileBtn";
// import MobileCloseBtn from "./MobileCloseBtn";

// const NavBar = () => {
//   const menuLinks = ["Home", "Portfolio", "Skills", "About", "Contact"];
//   const [open,isOpen] = useState(true);
//   return (
//     <div>
//       <header className="flex justify-between ">
//         <h1 className="text-2xl text-gray-100">Usaid Ahmed</h1>
//         <nav className="hidden md:block">
//           <ul className=" flex gap-4 text-xl bg-white py-2 px-6 rounded-bl-full text-gray-900">
//             {menuLinks.map((item) => {
//               return <li>{item}</li>;
//             })}
//           </ul>
//         </nav>
//         <div className="md:hidden">
//           <MobileBtn></MobileBtn>
//         </div>
//         <div className="hidden absolute right-0 top-0 bg-white h-screen w-3/12">
//          <div><MobileCloseBtn></MobileCloseBtn></div>
//           <ul className="flex flex-col justify-center items-center p-4 gap-4">
//             {menuLinks.map((item) => {
//               return <li>{item}</li>;
//             })}
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default NavBar;
