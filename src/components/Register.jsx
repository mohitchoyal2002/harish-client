import React, {useState, useEffect} from "react";

const Register = () => {
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
    <div className="sticky bottom-0 my-4 w-screen flex items-end justify-between lg:items-center py-2 px-4 lg:px-10 border-t-2 border-yellow-500 bg-dark_blue lg:justify-around">
      <div className="flex flex-col items-center">
        <span style = {{background: '#e2b42d'}} className="text-white bg-yellow-400 font-semibold lg:text-sm text-xs px-2 py-1 rounded-md">
          Limited Time Offer
        </span>
        <div className="lg:py-2 py-1 lg:px-6 px-3 border-2 border-yellow-400 shadow shadow-yellow-300 rounded-xl flex items-center text-white lg:gap-10 gap-5">
          <div className="flex flex-col items-center">
            <span className="lg:text-xl text-base font-extrabold">{time.hours}</span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-xl text-base font-extrabold">
              {time.minutes}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-xl text-base font-extrabold">
              {time.seconds}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
      <a href="https://rzp.io/l/harishfunnelmastery" target="_blank" rel="noopener noreferrer">
      <button style={{color: '4c1fb600'}} className="rounded-xl bg-red-600 text-white lg:text-3xl text-base font-extrabold lg:py-2 py-3 lg:px-20 px-4">

Register Now
</button>
      </a>
     
    </div>
  );
};

export default Register;
