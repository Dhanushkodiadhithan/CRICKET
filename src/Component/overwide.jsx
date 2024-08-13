import React from "react";
import "./overwide.css";
const Overwide = ({over,setover,setstatus,widerun,setwiderun,wicket,setwicket}) => {
  return (
    <div className="overwide">
      <form className="form-ow">
        <div className="head"><h1>LETS PLAY ....</h1></div>
        <div className="over">
          <h2>NO OF OVERS :</h2>
          <input type="text" placeholder="NO OF OVERS..?" value={over} onChange={(e)=>{setover(e.target.value)}}/>
        </div>
        <div className="wide-run">
          <h2>HOW MANY RUNS FOR WIDE ? 0 OR 1</h2>
          <input type="text" placeholder="0 OR 1" value={widerun} onChange={(e)=>{setwiderun(e.target.value)}}/>
        </div>
        <div className="wicket">
          <h2>NUMBER OF WICKET ?</h2>
          <input type="text" placeholder="0" value={wicket.Totalwickets} onChange={(e)=>{setwicket({...wicket,Totalwickets:e.target.value,Maxwicket:e.target.value})}}/>
        </div>
        <button onClick={(e)=>{e.preventDefault(); setstatus(2)}}>CONTINUE...</button>
      </form>
    </div>
  );
};

export default Overwide;
