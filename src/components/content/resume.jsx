import styled from "styled-components";
import { Header,Text } from "./about";
import { educationDetails,experienceDetails } from "./resumedata";
const Container=styled.div`
height:100vh;
background-color:white;
width:100%;
color:black;
z-index:9;
`
const ResumeContainer= styled.div`
margin:20px auto;
width:80%;
display:flex;



`
const DetailCon=styled.div`
flex:1;
`
const ConTitle=styled.div`
`
const CardCon=styled.div`
widtrh:400px;
height:200px;
border:1px solid rgb(0,0,0,0.2);
margin:20px 0;
padding:12px;
border-radius:5px;


`
const DateBtn=styled.button`
background-color:var(--teal);
color: white;
`
const EducationCard=({Degree, CompletionDate, Institution})=>{
    return(
        <CardCon>
            <DateBtn>{`${CompletionDate.Month} ${CompletionDate.Year}`}</DateBtn>

        </CardCon>
    )
}

const Resume= () =>{
return (
  <Container>
    <Header>Resume</Header>
    <Text>Work & Education</Text>
    <ResumeContainer>
      <DetailCon>
        <ConTitle>Education</ConTitle>

        {educationDetails.map((item) => (
          <EducationCard {...item} />
        ))}
      </DetailCon>
      <DetailCon>
        <ConTitle>Experience</ConTitle>
      </DetailCon>
    </ResumeContainer>
  </Container>
);
}
export default Resume