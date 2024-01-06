import styled from "styled-components"
import headshot from "../../assets/images/img1.jpeg"
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";
const Container=styled.div`
background-color:var(--dark);
flex:1;
height:100vh;
color:rgb(255,244,255,0.9);
position:fixed;
width:250px;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 30px auto;
  display: flex;
  border: 6px solid rgb(255, 244, 255, 0.2);
`;
const Name = styled.p`
text-align:center;
font-weight:700;
font-size:18px;
`
const Nav=styled.nav`
margin-top:80px;
`
const Ul=styled.ul`
list-style:none;
`
const Li= styled.li`
margin-top:20px;
`
const Anc=styled.a`
color:white
`
const Socials = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 40px;
`;
const icons = [FaInstagram, FaLinkedin, FaFacebook, FaTwitter];
const linksList=[
    {text:"Home",path:"#home"},
    {text:"About",path:"#about"},
    {text:"Services",path:"#services"},
    {text:"Resume",path:"#resume"},
    {text:"Contact",path:"#contact"},
]
const Navbar= () => {
return (
  <Container>
    <Img src={headshot} />
    <Name>Shaniya Malaikraja Deanes</Name>
    <Nav>

    <Ul>
    {linksList.map(link=><Li>
    <Anc href={link.path}>{link.text}</Anc>
    </Li>)}
    </Ul>
    </Nav>
    <Socials>
        {icons.map(Icon=><Icon style={{fontSize:"20px"}}/>)}
    </Socials>
  </Container>
);
}

export default Navbar