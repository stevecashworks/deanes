import styled from "styled-components"
const Container=styled.div`
height:auto;
width:100%;
background-color:white;
padding-top:30px;
color:black;
`
export const Header= styled.h1`
color: var(--fade);
text-align:center;
font-size:55px;
`
export const Text=styled.p`
text-align:center;
margin:0 auto;
position:relative;
color:black;
bottom:80px;
font-weight:600;
font-size:22px;
width:200px;
&:after {
    content: "";
    width: 80px;
    height:4px;
    background-color:var(--teal);
    position:absolute;
    bottom:-10px;
    right:40px;
}
`
const AboutDetails= styled.div`
width:80%;
display:flex;
padding: 20px ;
gap:30px;
margin:10px auto;
@media (max-width: 800px) {
  flex-direction:column;
}

`
const Left=styled.div`
flex:3
`
const Right=styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
`
const Intro= styled.h3`

`
const AboutText=styled.p`
`
const InfoCon=styled.div`
border-bottom:1px solid rgb(0,0,0,0.1);
display:flex;
height:60px;
align-items:center;
gap:20px;

`
const Field=styled.div`
font-weight:bold;
width:100px;
`
const Value=styled.div`
`
const Btn=styled.button`
width:200px;
height:30px;
color:white;
background-color:var(--teal);
margin:30px auto;
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
`
const infoList=[
    {field:"Name:",value:"Deanes  Shaniya"},
    {field:"Email:", value:"info@deanes"},
    {field:"Age:", value:36},
    {field:"Location:", value:"Dubai, United Arab Emirates"},
]
const AchievmentsCon=styled.div`
display:flex;
width:80%;
margin:20px auto;
justify-content:center;

`
const Achievement=styled.div` 
width:250px;
border-right: ${props=>props.b?"1px solid rgb(0,0,0,0.1)":"none"};
display:flex;
flex-direction:column;
align-items:center;
@media (max-width:800px){
  width:70px;
}


`
const StatVal=styled.h1`
color:rgb(0,0,0,0.3);
font-size:20px;
`
const StatName = styled.p`
  color: rgb(0, 0, 0, 0.7);
  width:70px;
`;
const achievements=[

{value:"10+", text:"Years Of Experience"},
{value:"250+", text:"Happy Clients"},
{value:"650+", text:"Projects Completed"},
{value:"16", text:"Awards"},
]
const About= () => {
    return (
      <Container id="about">
        <Header>About Me</Header>
        <Text>Know Me Better</Text>
        <AboutDetails>
          <Left>
            <Intro>
              I'm <span style={{ color: "var(--teal)" }}>Deanes</span> an Expert
              Business analyst
            </Intro>
            <AboutText>
              Hello, I'm Deanes, a dynamic financial analyst based in the
              vibrant city of Dubai. Armed with a degree in Finance from a
              prestigious university, I've honed my analytical skills through
              years of hands-on experience in the fast-paced financial landscape
              of Dubai. Specializing in investment analysis and risk management,
              I'm known for providing strategic insights that drive informed
              decision-making.
            </AboutText>
            <AboutText>
              Outside the world of finance, I lead a balanced and fulfilling
              life. An avid adventurer, I find solace in exploring the
              breathtaking landscapes of the United Arab Emirates, capturing the
              beauty of the desert dunes and the modern cityscape through the
              lens of my camera. I believe that the analytical mindset
              cultivated in the financial realm complements my artistic side,
              creating a harmonious blend of logic and creativity.
            </AboutText>
          </Left>
          <Right>
            {infoList.map(inf=>{
                return(
                    <InfoCon>
                        <Field>{inf.field}</Field>
                        <Value>{inf.value}</Value>
                    </InfoCon>
                )
            })}
          <Btn>Download CV</Btn>
          </Right>
        </AboutDetails>
        <AchievmentsCon>
            {achievements.map((ach,index)=>{
              const  b=index!==3
                return (
                    <Achievement b={b}>
                        <StatVal>{ach.value}</StatVal>
                        <StatName>{ach.text}</StatName>
                    </Achievement>
                )
            })}

        </AchievmentsCon>
      </Container>
    );
}
export default About