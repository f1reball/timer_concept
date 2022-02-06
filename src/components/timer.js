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

    function timeFormat() {

    }

    useEffect(() => {

        let interval = null;

        if(toggleTimer) {
            interval = setInterval(() => {
                setTime(time => time + 10)
            }, 10)
            timeFormat(time);
        } else {
            clearInterval(interval)
        }

        return() => clearInterval(interval);
        
    }, [toggleTimer])



    return(
        <div className="Container">
            <div>
                <div className='DigitHolder'>
                    <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
                    <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
                    <h1>{("0" + ((time / 10) % 100)).slice(-2)}</h1>
                </div>
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