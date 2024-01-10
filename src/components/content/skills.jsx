import styled from "styled-components";
import {FaDownload} from "react-icons/fa"
const Container = styled.div`
  width: 100%;
  padding: 20px 150px;
  color: black;
  box-sizing: border-box;
  display:block;
  margin:10px auto;
  @media (max-width: 800px) {
    width:80%;
    padding:20px 0px;
}
`;
const Header=styled.h2`
margin:0;
padding:0;
opacity:70%;
`
const SkillGrid= styled.div`
display:grid;
column-gap:50px;
grid-template-columns:repeat(2,1fr);
margin: 20px auto;

`
const Progress = styled.div`
height:9px;
position:relative;
background-color:rgb(0,0,0,0.4);
border-radius:5px;
&:after{
    content:" ";
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:${props=>props.no}%;
    transform-origin: left;
    background-color:var(--teal);
    border-radius:inherit;
}
`
const Perc=styled.p`
font-weight:600;

`
const Skill= styled.div`
`
const ProgressCon=styled.div`
    display:flex;
`
const Btn=styled.button`
height:40px;
padding:2px 7px;
display:flex;
align-items:center;
justify-content:center;
gap:5px;
margin:20px auto;
opacity:0.7;
`

const SkillsList = [
  { skill: "Financial Analysis", percentage: 90 },
  { skill: "Investment Advisory", percentage: 85 },
  { skill: "Risk Management", percentage: 88 },
  { skill: "Strategic Planning", percentage: 87 },
  { skill: "Budgeting and Forecasting", percentage: 85 },
  { skill: "Community Engagement", percentage: 80 }
];
const Skills= () => {
    return(
        <Container>
            <Header>My Skills</Header>
            <SkillGrid>
                {SkillsList.map(skill =>{
                    return(
                        <Skill>
                            <Perc>{skill.skill}</Perc>
                            

                            <Progress no={skill.percentage}/>
                            {skill.percentage}%
                            
                        </Skill>
                    )
                })}
            </SkillGrid>
            <Btn><span>Download CV</span> <FaDownload/></Btn>
        </Container>
    )
}

export default Skills