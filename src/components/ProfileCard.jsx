import React from "react";
import himanshu from "../assets/harish.png";

const ProfileCard = () => {
  return (
    <div className="relative lg:w-4/6 top-36 flex flex-col justify-center text-white items-center w-full  bg-dark_blue px-4 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10 justify-center w-full ">
        <img src={himanshu} alt="" className="h-auto w-96 relative bottom-24" />
        <div className="flex flex-col justify-center items-center text-center gap-2 text-lg">
          <h1 className="text-4xl font-extrabold text-white">
            Harish Parihar
          </h1>
          <p>30 under 30</p>
          <p>
            Founder of two 7-figure companies Internet Coaching & Backend
            Closers
          </p>
          <p>Seen on the biggest podcasts in India</p>
          <p>32 crores in online sales by now (Age 24 running)</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
