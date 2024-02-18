import "./App.css";
import InvitationHero from "./Components/InvitationHero";
import InvitationNav from "./Components/InvitationNav";
// import OpenSea from "./Components/OpenSea";
// import Zoho from "./Components/Zoho";
// import Marks from "./Components/Marks";
// import Context from "./Components/Context";
// import NewTask from "./Components/NewTask";
// import { MyContext } from "./Context/MyContext";
// import { useState } from "react";
// import Sidebar from "./Components/Sidebar";
// import DashbordHeader from "./Components/DashbordHeader";
// import DailyTask from "./Components/DailyTask";
// import Rewards from "./Components/Rewards";
function App() {
  // const [value,setValue] = useState("");
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-screen py-6">
        <DashbordHeader></DashbordHeader>
        <DailyTask></DailyTask>
        <Rewards></Rewards>
      </div>
      {/* <Marks></Marks> */}
      {/* <MyContext.Provider value={{value,setValue}}>
        <Context/>
      </MyContext.Provider> */}
      {/* <Zoho/> */}
      {/* <OpenSea/> */}
      {/* <InvitationNav />
      <InvitationHero /> */}
    </div>
  );
}

export default App;
