import React from 'react';
import './result.css';
const Result = ({score,setstatus,TeamA,TeamB}) => {
    return (
        <>
            <div className="show">
                {
                    score.firstbatting > score.secondbatting?
                        <div>
                            <h1>{TeamA} WON THE MATCH</h1>
                            <button onClick={()=>{setstatus(0)}}>PLAY AGAIN</button>
                        </div>
                    :score.firstbatting < score.secondbatting?
                        <div>
                            <h1>{TeamB} WON THE MATCH</h1>
                            <button onClick={()=>{setstatus(0)}}>PLAY AGAIN</button>
                        </div>
                    :<div>
                        <h1>MATCH DRAW</h1>
                        <button onClick={()=>{setstatus(0)}}>PLAY AGAIN</button>
                    </div>
                }
            </div>   
        </>
    );
}

export default Result;
