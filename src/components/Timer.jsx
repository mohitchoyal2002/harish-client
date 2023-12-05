import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let newSeconds = time.seconds - 1;
      let newMinutes = time.minutes;
      let newHours = time.hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }

      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }

      if (newHours === 0 && newMinutes === 0 && newSeconds === 0) {
        clearInterval(interval);
      }

      setTime({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="my-2 flex gap-4 bg-transparent">
      <div className="px-4 lg:px-5 w-24 py-2 bg-black flex flex-col justify-center items-center rounded-xl">
        <span className="text-text_yellow font-semibold lg:text-4xl text-xl">
          {time.hours}
        </span>
        <span className="text-white text-base">Hours</span>
      </div>

      <div className="px-4 lg:px-5 w-24 py-2 bg-black flex flex-col justify-center items-center rounded-xl">
        <span className="text-text_yellow font-bold lg:text-4xl text-2xl">
          {time.minutes}
        </span>
        <span className="text-white text-base">Minutes</span>
      </div>

      <div className="px-4 lg:px-5 w-24 py-2 bg-black flex flex-col justify-center items-center rounded-xl">
        <span className="text-text_yellow font-bold lg:text-4xl text-2xl">
          {time.seconds}
        </span>
        <span className="text-white text-base">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
