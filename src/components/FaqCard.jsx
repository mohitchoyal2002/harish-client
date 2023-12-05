import React, { useEffect } from "react";

const FaqCard = (props) => {
  const { question, answer } = props;

  const click = () => {
    const btn = document.querySelector('answer');
    if (btn.style.height == '0px'){
      btn.style.height = "auto";
      btn.innerText = answer;
    }
    else{
      btn.style.height = "0";
      btn.innerText = '';
    }
  };

  return (
    <div
      className="px-4 py-2 lg:w-3/4  w-full"
    >
      <div className="flex gap-2  bg-text_dark_blue cursor-pointer px-4 py-2">
      <i
        className="fa-solid fa-plus text-xl font-extrabold"
        style={{ color: "#ffffff" }}
      ></i>
      <p className="text-white text-center lg:text-xl text-base">{question}</p>
      </div>
      <p className="h-0"></p>
    </div>
  );
};

export default FaqCard;
