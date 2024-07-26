import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(
    () => new Date(targetDate) - new Date()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1000;
        if (newTimeLeft < 0) {
          clearInterval(interval);
          return 0;
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      {timeLeft > 0 ? (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      ) : (
        <span>Time&apos;s up!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
