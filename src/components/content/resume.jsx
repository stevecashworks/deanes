import styled from "styled-components";
import { Header,Text } from "./about";
import { educationDetails,experienceDetails } from "./resumedata";
const Container=styled.div`
height:auto;
background-color:white;
width:100%;
color:black;
z-index:9;
`
const ResumeContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const DetailCon=styled.div`
flex:1;
`
const ConTitle=styled.div`
font-size:25px;
font-weight:700;
&:after{
    content:":";
}
`
const CardCon = styled.div`
  width: 400px;
  height: 200px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  margin: 20px 0;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 800px) {
    height:auto;
    width:250px;
    font-size:14px;
  }
`;
const InstitutionCon = styled.div`
  color: var(--crim);
  margin: 20px 0;
  @media (max-width: 800px) {
    margin:5px 0;
  }
`;
const DegreeCon = styled.div`
  margin: 20px 0;
  @media (max-width: 800px) {
    margin:5px 0;
  }
`;
const DateBtn=styled.button`
background-color:var(--teal);
color: white;
`
const EducationCard=({Degree, CompletionDate, Institution})=>{
    return(
        <CardCon>
            <DateBtn>{`${CompletionDate.Month} ${CompletionDate.Year}`}</DateBtn>
            <InstitutionCon>{Institution}</InstitutionCon>
            <DegreeCon>{Degree}</DegreeCon>
        </CardCon>
    )
}

const Exp = ({Position, StartDate, EndDate, Company,Responsibilities}) =>{
  let dateStr
  if(EndDate){
    dateStr= `${StartDate.Year} - ${EndDate.Year}`
  }
  else{
    dateStr=`${StartDate.Year} - Present`
  }
    return(
    <CardCon style={{height:"250px"}}>
      <DateBtn>{dateStr}</DateBtn>
      <InstitutionCon>{Company}</InstitutionCon>
      <InstitutionCon style={{color:"black"}}>{Position}</InstitutionCon>
      <DegreeCon>{Responsibilities[0]}</DegreeCon>

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
      <DetailCon style={{marginLeft:"30px"}}>
        <ConTitle>Experience</ConTitle>
        {experienceDetails.map(exp=><Exp {...exp}/>)}
      </DetailCon>
    </ResumeContainer>
  </Container>
);
}
export default Resume