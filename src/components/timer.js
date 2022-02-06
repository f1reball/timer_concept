import './timer.css'
import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0)
    const [toggleTimer, setToggleTimer] = useState(false)


    function Reset() {
        setToggleTimer(false);
        setTime(0);
    }

    function toggle() {
        if(toggleTimer) {
            setToggleTimer(false);
        } else {
            setToggleTimer(true);
        }
    }

    useEffect(() => {

        let interval = null;

        if(toggleTimer) {
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return() => clearInterval(interval);
        
    }, [toggleTimer])



    return(
        <div className="Container">
            <div>
                <h1>{time}</h1>
            </div>
            <div className='ButtonWrapper'>

                <button onClick={toggle} className={toggleTimer ? "Button_Red" : "Button_Green"}>
                    {!toggleTimer ? time === 0 ? "Start" : "Resume" : "Stop"}
                </button>

                <button disabled={time == 0 || toggleTimer} className="Button_Red" onClick={Reset}>Reset</button>

            </div>
        </div>
    );
}

export default Timer;