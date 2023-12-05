import React from 'react'
import FaqCard from './FaqCard'
import Button from './Button'

const Faq = () => {
  return (
    <div className='py-10 px-4 w-screen flex flex-col gap-5 items-center'>
      <h1 className='lg:text-5xl text-3xl text-center font-extrabold text-text_dark_blue'>
      Frequently Asked Questions
      </h1>

      <p className='lg:text-2xl text-lg text-text_dark_blue font-medium text-center lg:w-3/4'>
      I have answered all common questions below that you might have about the workshop. For any further queries, please contact: support@himanshuagrawal.com
      </p>

      <div className='lg:w-3/4 flex flex-col gap-1 items-center'>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>

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
  )
}

export default Faq
