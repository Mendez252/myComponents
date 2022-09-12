import React, { useState } from "react";
import Button from "../Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [turnOn, setTurnOn] = useState({ color: "black" });
  const [turnOff, setTurnOff] = useState({ color: "gray" });
  const [active, setActive] = useState(false);

  const onHandleClick = (e) => {
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setTurnOn({ color: "black", borderBottom: "1px solid gray" });
      setTurnOff({ color: "gray" });
      setActive(false);
    }
    if (e.target.name === "signup") {
      setTurnOff({ color: "black", borderBottom: "1px solid gray" });
      setTurnOn({ color: "gray" });
      setActive(true);
    }
  };

  return (
    <div className="login_container">
      <img
        className="leftSide"
        src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/04/Types-of-Wall-Texture-sand-swirl.jpg"
        alt="texture"
      />
      <div className="login_title">
        <button name="signin" style={turnOn} onClick={onHandleClick}>
          Sign In
        </button>
        <button name="signup" style={turnOff} onClick={onHandleClick}>
          Sign Up
        </button>
      </div>
      <input className="login_input" type="text" placeholder="email"></input>
      <input
        className="login_input"
        type="password"
        placeholder="password"
      ></input>
      {active && (
        <input
          className="login_input"
          type="password"
          placeholder="rewrite password"
        ></input>
      )}
      <Button flag="sucess" title={active ? "Sign Up" : "Sign In"} />
    </div>
  );
};

export default LoginForm;
