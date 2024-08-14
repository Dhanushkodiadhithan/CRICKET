import React, { useState, useEffect } from 'react';
import './mainscreen.css';

const Mainscreen = ({ TeamA, TeamB, over, wicket, batting, wide, setwide, setwicket, widerun, setover, setbatting, setstatus, score, setScore}) => {
    const [ScoreA, setScoreA] = useState(0);
    const [ScoreB, setScoreB] = useState(0);
    const [Noofbatting, setNoofbatting] = useState(0);
    const [actions, setActions] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [initialOver, setInitialOver] = useState(over); 
    const [initialWickets, setInitialWickets] = useState(wicket.Totalwickets); 
  
 
    useEffect(() => {
  
        if (Noofbatting === 0) {
            if (batting === 0) {
                setScore({ firstbatting: ScoreA, secondbatting: ScoreB });
            } else {
                setScore({ firstbatting: ScoreB, secondbatting: ScoreA });
            }
        } else {
            if (batting === 0) {
                setScore({ firstbatting: ScoreB, secondbatting: ScoreA });
            } else {
                setScore({ firstbatting: ScoreA, secondbatting: ScoreB });
            }
        }
    }, [Noofbatting, ScoreA, ScoreB, batting]);

    useEffect(() => {
        if (Noofbatting === 1 && score.secondbatting > score.firstbatting) {
            setstatus(4);
        }
    }, [Noofbatting, score, setstatus]);

    useEffect(() => {
        if (Noofbatting === 1 && (actions.filter(action => action.isWicket).length === wicket.Totalwickets || actions.length === initialOver * 6)) {
            setstatus(4);
        }
    }, [Noofbatting, actions, wicket.Totalwickets, initialOver, setstatus]);

    useEffect(() => {
        if (clickCount >= 6) {
            setClickCount(0);
            setover(prevOver => prevOver - 1);
        }
    }, [clickCount, setover]);

    useEffect(() => {
        if (Noofbatting === 0 && (wicket.Totalwickets === 0 || actions.length === initialOver * 6)) {
            setNoofbatting(1);
            setbatting(prevBatting => (prevBatting === 0 ? 1 : 0));
            setActions([]);
            setover(initialOver);
            setwicket({ ...wicket, Totalwickets: initialWickets });
        }
    }, [Noofbatting, wicket.Totalwickets, actions.length, initialOver, initialWickets, setover, setwicket, setbatting]);

    const handleClick = (value, isWicket = false) => {
        setClickCount(prevCount => prevCount + 1); 

        if (value === 'Wide') {
            widerun === 1 &&
            (batting === 0
                ? (setScoreA(prevScore => prevScore + 1), setwide({ ...wide, Awide: wide.Awide + 1 }))
                : (setScoreB(prevScore => prevScore + 1), setwide({ ...wide, Bwide: wide.Bwide + 1 }))
            );
        } else {
            setActions(prevActions => [...prevActions, { value, isWicket }]); 
            if (!isWicket) {
                if (batting === 0) {
                    setScoreA(prevScore => prevScore + value);
                } else {
                    setScoreB(prevScore => prevScore + value);
                }
            } else {
                setwicket(prevWicket => ({
                    ...prevWicket,
                    Totalwickets: prevWicket.Totalwickets - 1,
                    [batting === 0 ? 'Awickets' : 'Bwickets']: batting === 0 ? prevWicket.Awickets + 1 : prevWicket.Bwickets + 1,
                }));
            }
        }
    };

    const overNumbers = Array.from({ length: initialOver }, (_, i) => i + 1);

    return (
        <>
           <div className="container">
           <div className="header">{batting === 0 ? <h1>{TeamA} Batting</h1> : <h1>{TeamB} Batting</h1>}</div>
            <div className="info">
                <h2>OVER LEFT : {over}</h2>
                {
                    widerun === 1 && <h2>WIDE : {batting === 0 ? wide.Awide : wide.Bwide}</h2>
                }
                <h2>WICKETS LEFT : {wicket.Totalwickets}</h2>
            </div>
            <div className="middle">
                <div className="scoreboard">
                    <div className="left">
                        {overNumbers.map(num => (
                            <div key={num} className="over">
                                OVER {num}
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        {actions.map((action, index) => (
                            <div
                                key={index}
                                className="action"
                                style={{
                                    backgroundColor: action.isWicket ? 'red' : 'transparent',
                                    color: action.isWicket ? 'white' : 'black',
                                }}
                            >
                                {action.value}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="click">
                    <div className="zero" onClick={() => handleClick(0)}>0</div>
                    <div className="one" onClick={() => handleClick(1)}>1</div>
                    <div className="two" onClick={() => handleClick(2)}>2</div>
                    <div className="three" onClick={() => handleClick(3)}>3</div>
                    <div className="four" onClick={() => handleClick(4)}>4</div>
                    <div className="six" onClick={() => handleClick(6)}>6</div>
                    <div className="wide" onClick={() => handleClick('Wide')}>WD</div>
                    <div className="out" onClick={() => handleClick('W', true)}>W</div>
                </div>
            </div>
            <div className="foot">
                <h2>{TeamA} SCORE : {ScoreA} / {wicket.Awickets}</h2>
                <h2>{TeamB} SCORE : {ScoreB} / {wicket.Bwickets}</h2>
            </div>
           </div>
        </>
    );
};

export default Mainscreen;
