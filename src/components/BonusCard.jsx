import React from "react";

const BonusCard = (props) => {
  const {bonus, image, content, price} = props
  return (
    <div className="flex gap-4 flex-col items-center justify-center bg-smoke_bg rounded-xl p-4">
      <div>
        <a
          href=""
          className="px-6 py-4 rounded-md relative bottom-5 bg-btn_blue"
        >
          <span className="text-orange-500 text-xl">🎁 Bonus #{bonus}:</span>
        </a>
      </div>
      <img src={image} alt="" className="h-96" style={{width:'auto'}} />
      <h2 className="font-bold text-xl text-center">
        {content}
      </h2>

      <div>
        <button className="bg-transparent border-2 border-btn_blue rounded-lg text-lg text-btn_blue px-6 py-2">
          Worth ₹ {price}/-
        </button>
      </div>
    </div>
  );
};

export default BonusCard;
