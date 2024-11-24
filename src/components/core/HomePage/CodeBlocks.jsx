// import React from "react";
// import CTAButton from "./Button";
// import { TypeAnimation } from "react-type-animation";
// import { FaArrowRight } from "react-icons/fa";

// const CodeBlocks = ({
//   position,
//   heading,
//   subheading,
//   ctabtn1,
//   ctabtn2,
//   codeblock,
//   backgroundGradient,
//   codeColor,
// }) => {
//   return (
//     <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>


//       {/* Section 1  */}
//       <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
//         {heading}

//         {/* Sub Heading */}
//         <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
//           {subheading}
//         </div>

//         {/* Button Group */}
//         <div className="flex gap-7 mt-7">
//           <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
//             <div className="flex items-center gap-2">
//               {ctabtn1.btnText}
//               <FaArrowRight />
//             </div>
//           </CTAButton>
//           <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
//             {ctabtn2.btnText}
//           </CTAButton>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
//         {backgroundGradient}
//         {/* Indexing */}
//         <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
//           <p>1</p>
//           <p>2</p>
//           <p>3</p>
//           <p>4</p>
//           <p>5</p>
//           <p>6</p>
//           <p>7</p>
//           <p>8</p>
//           <p>9</p>
//           <p>10</p>
//           <p>11</p>
//         </div>

//         {/* Codes */}
//         <div
//           className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
//         >
//           <TypeAnimation
//             sequence={[codeblock, 1000, ""]}
//             cursor={true}
//             repeat={Infinity}
//             style={{
//               whiteSpace: "pre-line",
//               display: "block",
//             }}
//             omitDeletionAnimation={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeBlocks;


import React from "react";
import CTAButton from "./Button";

import { FaArrowRight } from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation'
import { GlowCapture,Glow } from "@codaworks/react-glow";
import {useSpring,animated} from 'react-spring'
import styled from 'styled-components'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.01]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroudGradient,
  codeColor,
}) => {
  const Container = styled(animated.div)`position:relative`;
  const [props,set] = useSpring(() => ({xys:[0,0,1],config:{mass:1,tension:300,friction:100}}))
  return (
    <div className={`flex ${position} px-4 my-20 justify-between gap-10`}>
      {/*Section 1*/}
      <div className="w-[50%] flex flex-col gap-8 pt-8">
        {heading}
        <div className="text-richblack-300 font-bold ">{subheading}</div>

        <div className="flex gap-7 mt-5">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-[48%]">
      <GlowCapture>
        <Glow color={`${backgroudGradient === 'type1' ? 'orange':'white'}`}>
        <Container onMouseMove={({clientX:x,clientY:y}) => (set({xys:calc(x,y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{transform:props.xys.interpolate(trans)}}
      className={`min-w-[600px] p-8 m-2 relative leading-6 glow:border-[4px] glow:border-glow rounded-md
                    ${backgroudGradient === 'type1' ? 'glow:bg-orange/30 glow:opacity-50':'glow:bg-blue-100 glow:opacity-20'}  `}>
        
          <div className="flex flex-row p-1 code w-[100%]">
            <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
            </div>
            <div
              className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 glow:text-orange/50 ${backgroudGradient} z-10`}
            >
              <TypeAnimation
                sequence={[codeblock, 1000, ""]}
                repeat={Infinity}
                cursor={true}
                
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                  
                }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
      </Container>
        </Glow>
      </GlowCapture>
      </div>
      
      
      
    </div>
  );
};

export default CodeBlocks;
