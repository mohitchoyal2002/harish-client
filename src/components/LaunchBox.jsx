import React from "react";
import workshop from '../assets/workshop.jpeg'
import Button from "./Button";

const LaunchBox = () => {
  return (
    <div className="py-10 px-4 lg:px-10 w-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold text-black">
      Dont’t pay Huge Money in  {" "}
        <span className="text-white bg-green-600">Low Quality Leads</span>
      </h1>

      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
      With easy access to some  {" "}
        <span className="underline">Free AI tools</span> and a{" "}
        <span className="underline">Proven High Quality Lead Generation System</span>,  you can build your first or next high-converting lead funnel in just 1 Day!
      </p>
      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
        Even if you’re a Beginner, have no prior experience And have never built a single funnel yet…
      </p>

      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
      And That’s What Exactly I Am Going To Reveal In My Upcoming
      </p>

      <h1 className="text-center mt-2 text-xl md:text-3xl lg:text-4xl font-extrabold">“Facebook High Quality Lead Guide With AI Tools ”</h1>

      <img src={workshop} alt="" className="w-full md:w-1/2 lg:w-1/3" />

      <a
        href="https://rzp.io/l/harishfunnelmastery"
        className=" buttonscale text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center text-center "
      >
        <span className="text-lg lg:text-3xl font-bold">
          {">>Yes I Want High Quality leads"}
        </span>
        <span className="text-base lg:text-2xl">
          Get Step by Step Guide Now ₹299
        </span>
      </a>

      <p className=" pt-2 font-semibold text-black text-base md:text-lg lg:text-2xl text-center">
      Unlock the Power of{" "}
        <span style={{ color: "#E69B2F" }}>High-Quality Leads</span> to
        in Stock Market  <span style={{ color: "#E69B2F" }}>Success</span>
      </p>
    </div>
  );
};

export default LaunchBox;
