import React from 'react'
import Button from './Button'

const JoinWorkshop = () => {
  return (
    <div className='pt-40 w-screen bg-dark_blue_image py-10 px-4 flex flex-col justify-center items-center gap-5'>
      <span className='lg:text-4xl text-3xl font-extrabold text-pure_lime text-center'>
        Do join me LIVE Inside the workshop!
      </span>

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
      <p className=" pt-2 font-semibold text-white text-base md:text-lg lg:text-2xl text-center">
      Unlock the Power of{" "}
        <span style={{ color: "#E69B2F" }}>High-Quality Leads</span> to
        in Stock Market  <span style={{ color: "#E69B2F" }}>Success</span>
      </p>
    </div>
  )
}

export default JoinWorkshop
