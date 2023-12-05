import React from "react";
import Button from "./Button";

const FormBox = () => {
  return (
    <div
      className="py-6 px-2 text-xl font-normal bg-smoke_bg w-screen flex flex-col gap-5 justify-center items-center"
      style={{ color: "#333" }}
    >
      <h1
        className="text-center font-extra_bold text-2xl md:text-3xl lg:text-4xl"
        style={{ color: "#151515" , fontWeight:'700',fontSize:'33px'}}
      >
        Please Check All Boxes Where Your Answer Is{" "}
        <span className="text-green-600">YES!</span>
      </h1>

      <div className="mt-3 flex justify-center mx-8 gap-5 text-base md:text-lg lg:text-xl font-medium flex-wrap">
        <div className="bg-white rounded-md py-6 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span className="checkboxes">
            I don’t know how to use Free AI tools to build an entire marketing
            funnel and implement it to grow my business.
          </span>
        </div>
        <div className="bg-white rounded-md py-6 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            I want to launch my profitable funnel to get more customers & sales
            for my business but I don’t know where & how to start
          </span>
        </div>
        <div className="bg-white rounded-md py-6 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            I am a complete beginner with no experience & no technical skills
            and have never used any AI Tools and facebook Ads
          </span>
        </div>
        <div className="bg-white rounded-md py-6 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            I want to make my funnel seamless and automated so that it makes my
            business profitable without any hassle
          </span>
        </div>
        <div className="bg-white rounded-md py-4 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            I don't have a sufficient budget to invest in ads for generating
            high-quality leads.
          </span>
        </div>
        <div className="bg-white rounded-md py-6 px-4 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-5 w-5 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            I Don’t have knowledge of targeting the right audience in Facebook
            ads to generate leads
          </span>
        </div>
      </div>

      <div className="px-1">
        <h3 className="cd lg:text-4xl md:text-4xl text-2xl text-center font-normal text-black">
           <br></br><span className="font-semibold text-lg md:text-3xl lg:text-4xl">Transform Your</span>
          <span className="font-semibold text-lg md:text-3xl lg:text-4xl"> Stock Market Leads</span>
          <h2 className="font-extrabold text-3xl md:text-3xl lg:text-4xl " style={{color:' rgb(22 163 74 )'}}>
          From Cold to Gold
          </h2>
        </h3>
      </div>
    

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

export default FormBox;
