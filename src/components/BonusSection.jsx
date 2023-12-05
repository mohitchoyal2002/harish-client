import React from "react";
import BonusCard from "./BonusCard";
import bonus1 from "../assets/bon1.png";
import bonus2 from "../assets/bon2.png";
import bonus3 from "../assets/bon3.png";
import bonus4 from "../assets/bon4.png";
import Timer from "./Timer";
import Button from "./Button";

const BonusSection = () => {
  return (
    <div className="bg-white py-10 px-4 w-screen flex flex-col items-center justify-center gap-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <BonusCard
          bonus={1}
          image={bonus1}
          content={"Facebook Ads Campaign Checklist"}
          price={3000}
        />
        <BonusCard
          bonus={2}
          image={bonus2}
          content={"Whatsapp Automation Software"}
          price={2500}
        />
        <BonusCard
          bonus={3}
          image={bonus3}
          content={"50+ Crore Database Pan India"}
          price={3500}
        />
        <BonusCard
          bonus={4}
          image={bonus4}
          content={"300+ Business Automation Template"}
          price={3000}
        />
      </div>

      <div className="mt-12 flex flex-col text-2xl lg:text-5xl items-center gap-5 text-center">
        <h3 className="font-medium">Get All This Inside The Workshop</h3>
        <h2 className="font-extrabold text-red-500 text-2xl lg:text-4xl">
          Total Value Of Bonuses: ₹12,000
        </h2>
        <h3 className=" text-2xl lg:text-4xl">
          Normal Workshop Ticket Price: <del>₹2000</del>
        </h3>
        <h1 className="text-green-600 text-3xl lg:text-5xl font-extrabold">
          Join Today At Just ₹299
        </h1>
        <h3 className="font-bold">
          Time is running out. Reserve your seat now!
        </h3>
      </div>
      <div className="mt-4">
        <Timer />
      </div>

      <p className="font-bold text-xl text-center">
        Fee will increase to <span className="text-red-600">Rs 2,000</span> once
        the timer hits <span className="text-red-600">ZERO</span>
      </p>

      <i
        className="fa-solid fa-arrow-down fa-beat-fade font-extrabold text-xl md:text-3xl lg:text-5xl"
        style={{ color: "#e2b42d" }}
      ></i>
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

export default BonusSection;
