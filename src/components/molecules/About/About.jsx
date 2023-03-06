import TextAbout from '@/components/atoms/TextAbout/TextAbout'
import React from 'react'
import style from "./About.module.css"

const About = () => {
  return (
    <div name="about" className={style.Container} >
      <div><TextAbout/></div>
      <img className="absolute m-10 w-[884px] left-[556px] " src="/assets/wavy.jpg" alt="akansha" />
    </div>
  )
}

export default About