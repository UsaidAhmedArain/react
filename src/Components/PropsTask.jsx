import React from "react";
import Button from "./Button";
import LoginIcon from "./LoginIcon";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import Prec from "./Prec";
import ChatIcon from "./ChatIcon";
import Bars from "./Bars";

const PropsTask = () => {
  const check = () => console.log("Login Button is pressed");
  const test = () => console.log("Register Button is Pressed");
  const usaid = () => console.log("Hello World !");
  const done = () => console.log("Practise Complete");
  return (
    <div>
      <div>
        <Input placeholder={"Enter Your First Name"}></Input>
      </div>
      <div className="mt-3">
        <Input placeholder={"Enter your name"}></Input>
      </div>
      <div className="mt-3">
        <PasswordInput placeholder={"Password"}></PasswordInput>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="mt-4">
          <Button text="Register" func={test} icon={<LoginIcon />} />
        </div>
        <div className="mt-4">
          <Button text="Login" func={check} icon={<LoginIcon />} />
        </div>
        <div className="mt-4">
          <Button text="Testing" func={usaid} icon={<LoginIcon />} />
        </div>
      </div>
      <div>
        <Button text="Usaid" icon={<Bars />} func={done}></Button>
      </div>
    </div>
  );
};

export default PropsTask;
