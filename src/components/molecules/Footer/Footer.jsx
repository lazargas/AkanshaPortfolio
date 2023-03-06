import React from 'react'
import style from "./Footer.module.css"
import {AiFillLinkedin} from "react-icons"
import Contact from '@/components/atoms/Contact/Contact'
import Socials from '@/components/atoms/Socials/Socials'

const Footer = () => {
  return (
    <>
        <div name="contact" className={style.Container}>
            <div className='relative p-5  h-[97px] w-[500px] left-[129px] not-italic font-sora text-xl leading-[160%] text-white' >
            "Contact me if you want to elevate your brand's design game. And hey, if you're in the mood for a latte, I'm down for that too" ☕
            </div>
            <div className="relative w-[300px] left-[1200px] bottom-[175px] ">
              <img src="/assets/logo.png" alt="" />
            </div>
            <div className="relative bottom-[200px] w-[300px] left-[1100px] ">
              <Contact/>
            </div>
            <div className="relative bottom-[275px] w-[300px] left-[129px] ">
              <Socials/>
            </div>
        </div>
        <div className={style.Container2} >
        <div className="relative not-italic font-normal text-base leading-[160%] text-white font-sora top-8 left-20 ">
            Copyright Reserved
        </div>
        <div className=' relative w-[120px] h-[26px] not-italic font-sora font-normal text-base leading-[160%] text-white flex-none order-1 grow-0  left-[1280px]  ' >
              Akansha Singh
        </div>
        </div>
    </>
  )
}

export default Footer