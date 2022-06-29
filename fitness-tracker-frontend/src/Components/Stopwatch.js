import React from 'react';
import '../styles/StopWatch.css';



function StopWatch() {
    const [time, setTime] = React.useState(0)
    const [timerOn, setTimeOn] = React.useState(false)

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    }, [timerOn])

    return (
        <div className='StopWatch'>
            <div className='time'>
                <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {!timerOn && time === 0 && (
                    <button onClick={() => setTimeOn(true)}>Start</button>
                )}
                {timerOn && (
                    <button onClick={() => setTimeOn(false)}>Stop</button>
                )}
                {!timerOn && time !== 0 && (
                    <button onClick={() => setTimeOn(true)}>Resume</button>
                )}
                {!timerOn && time > 0 && (
                    <button onClick={() => setTime(0)}>Reset</button>
                )}
            </div>
        </div>
    )
}

export default StopWatch;