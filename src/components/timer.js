import './timer.css'
import react, { useEffect, useState } from "react";

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
            <div>
                <button onClick={toggle}>{toggleTimer ? "Stop" : "Start"}</button>
                <button onClick={ Reset }>Reset</button>

                <h1>{toggleTimer ? "yes" : "no" }</h1>
            </div>
        </div>
    );
}

export default Timer;