import React from "react";
import "./teamname.css";
const Teamname = ({setstatus,setTeamA,setTeamB,TeamA,TeamB}) => {

  return (
    <div className="teamname">
      <form className="form-tn">
        <div className="head"><h1>LETS PLAY ....</h1></div>
        <div className="teamA">
          <h2>TEAM A NAME :</h2>
          <input type="text" placeholder="Team A name..?" value={TeamA} onChange={(e)=>{setTeamA(e.target.value)}}/>
        </div>
        <div className="teamB">
          <h2>TEAM B NAME :</h2>
          <input type="text" placeholder="Team B name..?" value={TeamB} onChange={(e)=>{setTeamB(e.target.value)}}/>
        </div>

        <button onClick={(e)=>{e.preventDefault(); setstatus(1)}}>CONTINUE...</button>
      </form>
    </div>
  );
};

export default Teamname;
