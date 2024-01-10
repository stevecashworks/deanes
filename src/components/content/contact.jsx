import styled from "styled-components"
import {Header,Text} from "./about"
import { ExportSocials } from "../Navbar/navbar" 
const Container= styled.div`
color:black;
width:100%;
background-color:var(--alternate-background);
/* padding:10px 50px; */
`



const ContactCon = styled.div`
  display: flex;
  margin: 20px auto;
  width: 80%;
  @media (max-width: 800px) {
    flex-direction:column-reverse;
    width:100%;
  }
`;
const ItemInfo=styled.div``
const Details = styled.div`
  @media (max-width: 800px) {
    text-align: center;
    margin-top:50px;
  }
`;
const Form = styled.form`
  margin-left: 80px;
  @media (max-width: 800px) {
    margin-left:0;
  }
`;
const Item= styled.div`
    
`
const ItemHeading= styled.h3`
text-transform:uppercase;
&:after{
    content:":"
}
`
const InpCon=styled.div`
display:flex;
gap:15px;

` 
const Inp = styled.input`
  background-color: white;
  color: rgb(0, 0, 0, 0.3);
  border: 0;
  outline: 0;
  height: 35px;
  width: 300px;
  padding: 3px 10px;
  border-radius: 8px;
  @media (max-width: 800px) {
    width:150px;
  }
`;
const TextArea = styled.textarea`
  background-color: white;
  color: rgb(0, 0, 0, 0.3);
  border: 0;
  outline: 0;
  width: 500px;
  height: 80px;
  padding: 3px 10px;
  border-radius: 8px;
  display: block;
  margin: 30px 0;
  @media (max-width: 800px) {
    width: 250px;
    margin-left:20px;
  }
`;
const Btn=styled.button`
    border:none;
    background-color:var(--teal);
    color:rgb(255,255,255,0.8);
    margin:0 auto;
    display:flex; 
    align-items:center;
    justify-content:center;
`
const Address =[ 
"42 Marina Boulevard,",
"Jumeirah Lakes Towers (JLT),",
"Dubai, UAE" ]
const Contact = () => {
    return (
      <Container id="contact">
        <Header style={{ color: "rgb(0,0,0,0.2)" }}>Contact</Header>
        <Text>Keep in touch.</Text>
        <ContactCon>
          <Details>
            <Item>
              <ItemHeading>address</ItemHeading>
              <ItemInfo>
                {Address.map(item=><p>{item}</p>)}
              </ItemInfo>
            </Item>
            <Item>
                <ExportSocials />
            </Item>
          </Details>
          <Form>
            <ItemHeading>Leave me a Note</ItemHeading>
            <InpCon>
            <Inp placeholder="Your name"></Inp>
            <Inp placeholder="Your Email"></Inp>
            </InpCon>
            <TextArea placeholder="Your Email"></TextArea>
            <Btn>Send Message</Btn>
          </Form>
        </ContactCon>
      </Container>
    );
}
export default Contact