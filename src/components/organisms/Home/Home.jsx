import About from '@/components/molecules/About/About'
import Footer from '@/components/molecules/Footer/Footer'
import Intro from '@/components/molecules/Intro/Intro'
import Projects from '@/components/molecules/Projects/Projects'
import Skills from '@/components/molecules/Skills/Skills'
import React from 'react'
import { Animator, ScrollContainer, ScrollPage,batch,Fade,Sticky,MoveOut,FadeOut,ZoomOut } from 'react-scroll-motion'

const Home = () => {
  return (
    // <ScrollContainer>
    //     <ScrollPage page={0}>
    //       <Animator animation={ZoomOut(1,0.7)} >
    //       <Intro/>
    //       </Animator>
    //     </ScrollPage>
    //     <ScrollPage page={1}>
    //       <Animator animation={ZoomOut(1,0.7)} >
    //       <About/>
    //       </Animator>
    //     </ScrollPage>
    //     <ScrollPage className='p-20' page={2}>
    //       <Animator animation={ZoomOut(1,0.7)} >
    //       <Skills/>
    //       </Animator>
    //     </ScrollPage>
    //     <ScrollPage page={3}>
    //       <Animator animation={ZoomOut(1,0.7)} >
    //       <Projects/>
    //       </Animator>
    //     </ScrollPage>
    //     <ScrollPage page={4}>
    //       <Animator animation={ZoomOut(1,0.7)} >
    //       <Footer/>
    //       </Animator>
    //     </ScrollPage>    
    // </ScrollContainer>
    <>
    <div className='' >
      <div className='' ><Intro/></div>
      <div className='' ><About/></div>
      <div className='' ><Skills/></div>
      <div className='' ><Projects/></div>
      <div className='' ><Footer/></div>
    </div>
    </>
  )
}

export default Home