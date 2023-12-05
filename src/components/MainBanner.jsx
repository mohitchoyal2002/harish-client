import React from "react";
import DataForm from "./DataForm";
import Button from "./Button";
import HorizontalScroll from "./HorizontalScroll";

const MainBanner = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg,#1B1530 0%,#172B34 100%)" }}
      className="lg:px-10 flex w-screen flex-col items-center gap-3 lg:gap-5 py-4 px-1"
    >
      {/* <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
        <span className="text-text_yellow mr-2 mt-0">Unlock the Goldmine</span>
      </h1> */}
      <h2 className=" text-2xl md:text-2xl:text-2xl text-center font-bold text-white">
        {/* Generate Thousands of{" "}<br></br>
        <span className="text-text_yellow  text-2xl">High-Quality</span> Stock Market
        Leads in a Single Day */}
        Gain{" "}
        <span className="text-text_yellow  text-2xl">
          real-time insights, proven strategies, and expert guidance
        </span>{" "}
        for successful day trading.
      </h2>

      {/**<h3 className="text-lg md:text-xl lg:text-3xl text-center font-bold text-white px-4 lg:px-20">
        Struggling to Generate Quality Leads and Boost Your Stock Market
        Conversions?
      </h3>*/}

      <h3 className=" text-lg md:text-lg lg:text-2xl text-center font-bold text-white">
        Banknifty / Finnifty / Nifty, Every Expiry Special Call
      </h3>

      <div className="py-2 lg:py-2 px-4 md:px-6 lg:px-8 animated-border text-white font-semibold lg:text-2xl text-xl mb-2">
        <p className="flex gap-2 items-center">
          <i
            className="fa-solid fa-circle-check"
            style={{ color: "#1f4723" }}
          ></i>
          NISM certified for equity dealer
        </p>
        <p className="flex gap-2 items-center">
          <i
            className="fa-solid fa-circle-check"
            style={{ color: "#1f4723" }}
          ></i>
          NISM certified research analyst
        </p>
      </div>

      <h3 className=" text-lg mb-2 md:text-lg lg:text-2xl text-center font-bold text-white">
        Calls <span className="text-text_yellow">हिंदी & English Language</span>{" "}
        में
      </h3>

      <div className="h-auto w-full lg:h-1/3 lg:w-1/3">
        <DataForm />
      </div>

      <h3 className=" text-xl mb-2 md:text-lg lg:text-3xl text-center font-bold text-white">
        🔥Attention TRADERS Who Wants To{" "}
        <span className="text-text_yellow">Skyrocket Their Profits🔥</span>
      </h3>

      <div>
        <HorizontalScroll />
      </div>

      <h2 className="font-extrabold mt-2 text-center text-lg md:text-4xl lg:text-4xl text-white">
        Why Choose Us?
      </h2>

      <div className="flex items-center justify-center mx-3 gap-5 text-white text-base md:text-xl lg:text-2xl font-medium flex-wrap">
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              NISM Certification Excellence:
            </span>{" "}
            Rest easy knowing your trades are in the hands of a certified
            professional. Unmatched expertise in Equity Dealing and Research
            Analysis.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Proven Strategies for Profit:
            </span>{" "}
            Gain access to battle-tested strategies that deliver results.
            Banknifty, Finnifty, Nifty - we specialize in every aspect of the
            market.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Exclusive Special Calls Every Expiry:
            </span>{" "}
            Elevate your trading game with our exclusive calls tailored for
            every expiry. Stay steps ahead of the market with insights that
            matter.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Proven Techniques:
            </span>{" "}
            Instantly access the same techniques used by industry leaders.
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Automation:
            </span>{" "}
            Leveraging AI Tools To Automate WhatsApp Campaigns And Nurture Leads
            Through The Funnel
          </div>
        </div>
        <div className="border-text_yellow border-2 rounded-md py-4 px-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <i
            className="fa-solid fa-square-check text-3xl"
            style={{ color: "#6ce12d" }}
          ></i>
          <div className="lg:px-2 md:px-2">
            <span style={{ color: "#6ce12d" }} className="font-bold">
              Data Security:
            </span>{" "}
            Communicate strong data security measures through digital channels,
            building trust and confidence among clients.
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainBanner;
