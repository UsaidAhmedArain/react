import React from "react";
import notification from "../assets/images/notification.png";
import setting from "../assets/images/setting.png";
import question from "../assets/images/question.png";
import person from "../assets/images/person.png";
import option from "../assets/images/option.png";
const DashbordHeader = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] font-semibold">Dashboard</h1>
        <div className="flex gap-5 items-center">
          <div>
            <img src={notification} alt="notification" />
          </div>

          <div>
            <img src={setting} alt="setting" />
          </div>

          <div>
            <img src={question} alt="question" />
          </div>

        {/* <div className="flex items-center gap-4"> */}
          <div>
            <img src={person} alt="person" />
          </div>
          <div>
            <p className="text-[#FF0032] text-xl font-medium">Gregg</p>
          </div>
          <div>
            <img src={option} alt="option" />
          </div>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashbordHeader;
