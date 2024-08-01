import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(threeDaysInMilliseconds);

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
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="font-Poppins text-[24px]">
      <div className="text-[12px] font-[400] leading-[12px] flex gap-10 mb-3 font-Poppins">
        <span>Days</span>
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
      {timeLeft > 0 ? (
        <span className="font-[700] text-[32px] leading-[30px]">
          {days}d : {hours}h : {minutes}m : {seconds}s
        </span>
      ) : (
        <span>Time&apos;s up!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
