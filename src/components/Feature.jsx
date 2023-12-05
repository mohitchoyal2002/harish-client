import React from 'react'
import feature from '../assets/feature.webp'
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import Button from './Button';
import aibanner from '../assets/aibanner.png';

const Feature = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen py-8 px-4 gap-5'>
      <h1 className='font-extrabold lg:text-5xl text-3xl'>Our Live Workshops</h1>
      <img src={aibanner} alt="" className='w-4/5 md:w-1/2 lg:w-1/2'/>
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
      <p className=" pt-1 font-semibold text-black text-base md:text-lg lg:text-2xl text-center">
      Unlock the Power of{" "}
        <span style={{ color: "#E69B2F" }}>High-Quality Leads</span> to
        in Stock Market  <span style={{ color: "#E69B2F" }}>Success</span>
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <img
          src={review1}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review2}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review3}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review4}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review1}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
        <img
          src={review2}
          alt="review2"
          className="w-96 h-auto border-text_yellow border-2"
        />
      </div>

    </div>
  )
}

export default Feature
