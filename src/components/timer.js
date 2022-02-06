import { clear } from "@testing-library/user-event/dist/clear";
import react, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0)
    const [timerActive, setTimerActive] = useState(false)


    function Reset() {
        setTimerActive(false);
        setTime(0);
    }

    useEffect(() => {


        let interval = null;
        if(timerActive) {
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return() => clearInterval(interval);
    }, [timerActive])



    return(
        <div>
            <h1>{time}</h1>
            <button onClick={(() => setTimerActive(true))}>Start</button>
            <button onClick={(() => setTimerActive(false))}>Stop</button>
            <button onClick={(() => setTimerActive(true))}>Resume</button>
            <button onClick={ Reset }>Reset</button>
        </div>
    );
}

export default Timer;