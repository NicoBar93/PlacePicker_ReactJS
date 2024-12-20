import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('intervallo');
            setRemainingTime((prevProgress) => prevProgress - 10);
        }, 10);

        return () => {
            clearInterval(interval);
            console.log('clear');
        };
    }, []);

    return <progress value={remainingTime} max={timer} />;
}