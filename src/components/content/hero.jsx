import styled from "styled-components";
import vid from "../../assets/video_bg.mp4";
import { useState,useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const VideoCon=styled.div`
position:relative;
height:100vh;
width:100%;
top:0;
background:green;
@media (max-width: 800px) {
  height:600px;
}

`
const Video = styled.video`
  width: calc(100vw - 250px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 800px) {
    height: 600px;
    width:100vw;
    display:block
  }
`;
 const Shadow = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgb(0, 0, 0, 0.9);
   z-index: 2;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
     height: 600px;
     background-color: rgb(0, 0, 0, 0.8);
   }
 `;
 const ContentCon = styled.div`
   @media (max-width: 800px) {
     height: 600px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction:column;
   }
 `;
 const Intro=styled.p`
 font-size:20px;
 font-weight:700;
 text-align:center;
 `
 const Profession = styled.h2`
   text-align: center;
   font-size:30px;
   &:after{
    content:" |";
    animation: fade 0.5s ease infinite ;
   }
   @keyframes fade{
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
   }

 `;
 const Text = styled.p`
   text-align: center;
 `;
 const Btn=styled.button`
 border:1px solid var(--teal);
 color:teal;
 font-weight:700;
 margin:30px auto;
 background-color:transparent;
 display:flex;
 `
 const SlidingIcon = styled.div`
   display: flex;
   font-size: 35px;
   font-weight: 300;
   align-items: center;
   justify-content: center;
   opacity: 0.5;
   animation: slide 3s  linear  0s infinite;

   @keyframes slide {
     0% {
       transform: translateY(0px);
       opacity:1;
     }
     50% {
       transform: translateY(70px);
       opacity:0.5;
     }
     100% {
       transform: translateY(0px);
       opacity:0;
     }
   }
 `;

const Hero = () => {
    const [wordLength, setWordLength]= useState(0)
    useEffect(()=>{
 const typeInterval= setInterval(()=>{
    setWordLength((prev)=>{
 if(prev>30){
    return 0
 }
 return prev+1
    })

 },100)

 return ()=>clearInterval(typeInterval)
    })
  const   job= "Financial Analyst"
return (
  <VideoCon>
    <Video src={vid} autoPlay muted loop></Video>

    <Shadow>
      <ContentCon>
        <Intro>Hi, I'm Deanes</Intro>
        <Profession>A {job.substring(0,wordLength)}</Profession>
        <Text>Based in Dubai</Text>
        <Btn>Let's Connect</Btn>
        <SlidingIcon>
          <MdOutlineKeyboardDoubleArrowDown />
        </SlidingIcon>
      </ContentCon>
    </Shadow>
  </VideoCon>
);    
}

export default Hero