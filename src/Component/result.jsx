import React from 'react';
import './result.css';
const Result = ({setscore,setActions,setover,score,setstatus,TeamA,TeamB,setwicket,setwide,widerun}) => {
    function playAgain(){
        setstatus(0);
        setscore({ firstbatting: 0, secondbatting: 0 });
        setActions([]);
        setover(2);
        widerun(1);
        setwide({Awide : 0,Bwide : 0});
        setwicket({Totalwickets : 4,Maxwicket:0,Awickets : 0,Bwickets : 0});
    }
    return (
        <>
            <div className="show">
                {
                    score.firstbatting > score.secondbatting?
                        <div>
                            <h1>{TeamA} WON THE MATCH</h1>
                            <button onClick={playAgain}>PLAY AGAIN</button>
                        </div>
                    :score.firstbatting < score.secondbatting?
                        <div>
                            <h1>{TeamB} WON THE MATCH</h1>
                            <button onClick={playAgain}>PLAY AGAIN</button>
                        </div>
                    :<div>
                        <h1>MATCH DRAW</h1>
                        <button onClick={playAgain}>PLAY AGAIN</button>
                    </div>
                }
            </div>   
        </>
    );
}

export default Result;
