import VerticalText from "@/components/atoms/VerticalText/VerticalText";
import React from "react";
import style from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div name="skills" className={style.Container}>
      {/* <div class="relative flex overflow-x-hidden">
      <div class="animate-marquee whitespace-nowrap">
      <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D]">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-80">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-60">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-40">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-20">SKILLS</div>
      </div>
      </div> */}
        <marquee direction="up" className="absolute w-[385px] h-[600px] left-[995px]">
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D]">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-80">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-60">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-40">SKILLS</div>
          <div className="not-italic font-sora text-8xl leading-[121px] text-[#F1D37D] opacity-20">SKILLS</div>
        </marquee>
      
        <div className="" >
          <div className="absolute left-[0px] top-96 ">
            <VerticalText text="3D VIZUALIZATION" />
          </div>
          <div className="absolute left-[40px] top-60 ">
            <VerticalText text="PHOTOSHOP" />
          </div>
          <div className="absolute left-[80px] top-80 ">
            <VerticalText text="GRAPHIC DESIGNING" />
          </div>
          <div className="absolute left-[120px] top-40 ">
            <VerticalText text="FIGMA" />
          </div>
          <div className="absolute left-[160px] top-96 ">
            <VerticalText text="ADOBE XD" />
          </div>
          <div className="absolute left-[200px] top-80 ">
            <VerticalText text="ILLUSTRATOR" />
          </div>
          <div className="absolute left-[240px] top-[260px] ">
            <VerticalText text="INDESIGN" />
          </div>
          <div className="absolute left-[280px] top-60 ">
            <VerticalText text="ARCHITECTURE" />
          </div>
          <div className="absolute left-[320px] top-60 ">
            <VerticalText text="HTML" />
          </div>
          <div className="absolute left-[360px] top-80 ">
            <VerticalText text="UI/UX DESIGNING" />
          </div>
          <div className="absolute left-[400px] top-60 ">
            <VerticalText text="REVIT" />
          </div>
          <div className="absolute left-[440px] top-96 ">
            <VerticalText text="FILMORA" />
          </div>
          <div className="absolute left-[480px]  top-80 ">
            <VerticalText text="AFTER EFFECTS" />
          </div>
          <div className="absolute left-[520px] top-[280px] ">
            <VerticalText text="CSS" />
          </div>
          <div className="absolute left-[560px] top-80 ">
            <VerticalText text="WIREFRAMING" />
          </div>
          <div className="absolute left-[600px] top-60 ">
            <VerticalText text="PROTOTYPING" />
          </div>
          <div className="absolute left-[640px] top-[350px] ">
            <VerticalText text="ANIMATION" />
          </div>
        </div>
        <div className="">
        <img  className=" relative w-[800px] h-[800px] left-[170px]" src="/assets/skill.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Skills;


