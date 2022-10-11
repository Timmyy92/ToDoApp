import { useState, useEffect } from "react";
import './App.css'

const Timer = () => {
    const [date, setDate] = useState(new Date());
    function newClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(newClock, 1000);
        return function cleanup() {
            clearInterval(timerId)
        };
    },[]);
    return (
        <h1 className="h1">{date.toLocaleTimeString()}</h1>
    )
}

export default Timer;