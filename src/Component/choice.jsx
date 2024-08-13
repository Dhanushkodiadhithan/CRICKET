import React from "react";
import "./choice.css";
const Choice = ({ setbatting,setstatus ,TeamA,TeamB}) => {
  return (
    <>
      <div className="choice">
        <form className="form-choice">
          <div className="head">
            <h1>WHICH TEAM BATTING FIRST ?</h1>
          </div>
          <div className="A" onClick={() => {setbatting(0);setstatus(3)}}>
            <h2>{TeamA}</h2>
          </div>
          <div className="B" onClick={() => {setbatting(1),setstatus(3)}}>
            <h2>{TeamB}</h2>
          </div>
        </form>
      </div>
    </>
  );
};

export default Choice;
