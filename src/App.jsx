import "./App.css";
import Overwide from "./Component/overwide";
import Teamname from "./Component/teamname";
import Mainscreen from "./Component/mainscreen";
import Choice from "./Component/choice";
import Result from "./Component/result";
import { useState } from "react";
function App() {
  const [status, setstatus] = useState(0);
  const [TeamA, setTeamA] = useState("CSK");
  const [TeamB, setTeamB] = useState("RCB");
  const [over, setover] = useState(2);
  const [wide, setwide] = useState({Awide : 0,Bwide : 0});
  const [wicket, setwicket] = useState({Totalwickets : 4,Maxwicket:4,Awickets : 0,Bwickets : 0});
  const [batting, setbatting] = useState(0);
  const [widerun, setwiderun] = useState(1);
  const [score, setScore] = useState({ firstbatting: 0, secondbatting: 0 });
  const [actions, setActions] = useState([]);

  return(
   <>
  {status === 0 ? <Teamname setstatus={setstatus} TeamA={TeamA} setTeamA={setTeamA} TeamB={TeamB} setTeamB={setTeamB}/> : null}
  {status === 1 ? <Overwide over={over} setover={setover} setstatus={setstatus} widerun={widerun} setwiderun={setwiderun} wicket={wicket} setwicket={setwicket}/>:null}
  {status === 2 ? <Choice setbatting={setbatting} setstatus={setstatus} TeamA={TeamA} TeamB={TeamB} /> : null}
  {status === 3 ? <Mainscreen score={score} setScore={setScore} setbatting={setbatting} setstatus={setstatus} setover ={setover}widerun={widerun} setwiderun={setwiderun} setwicket={setwicket} wide={wide} setwide={setwide} batting={batting} TeamA={TeamA} TeamB={TeamB} over={over} wicket={wicket} actions={actions} setActions={setActions}/> : null}
  {status === 4 ? <Result setscore={setScore} setActions={setActions} setover={setover} score={score} setstatus={setstatus} TeamA={TeamA} TeamB={TeamB} setwicket={setwicket} setwide={setwide} widerun={widerun}/>: null}
  </>
  )
}
export default App;
