import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef(null);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Time's Up!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime === 1 ? "" : "s"}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Finish" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Challenge in progress..." : "Challenge not started"}
      </p>
    </section>
  );
}
