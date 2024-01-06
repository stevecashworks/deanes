import styled from "styled-components";
import { Header, Text } from "./about";
import serviceList from "./servicelist";
const Container=styled.div`
 width:100vw;
 height:100vh;
background-color:var(--alternate-background);
padding-top:20px;
color:black;
`
const ServicesCon=styled.div`
display:flex;
flex-wrap:wrap;
width: 70%;
margin:20px auto;
gap:30px;
box-sizing:border-box;
padding-right:50px;
`
const ServiceCon=styled.div`
width:400px;
display:flex;
gap:20px;
background-color:rgb(255,255,255,0.2);
padding:10px;
`
const IconCon=styled.div`
display:flex;
align-items:center;

`
const ServiceTextCon=styled.div``
const ServiceTitle=styled.div`
font-weight:bold;
margin-bottom:10px;
&:after{
content:":"
}
`
const ServiceDescription=styled.div`
`
const Service =({title, text,icon}) => {
 const Icon=icon
  return(
  <ServiceCon>
    <IconCon>
      <Icon style={{fontSize:"40px",color:"var(--teal)"}} />
    </IconCon>
    <ServiceTextCon>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{text}</ServiceDescription>
    </ServiceTextCon>

  </ServiceCon>
 )
}
const   Services= () => {
return (
  <Container>
    <Header
      style={{ color: "rgb(0,0,0,0.1)", position: "relative", right: "100px" }}
    >
      Services
    </Header>
    <Text
      style={{  position: "relative", right: "100px" }}
    >
      What I Do
    </Text>
    <ServicesCon>
      {serviceList.map(x=><Service {...x} />)}
    </ServicesCon>
  </Container>
);
}
export default  Services