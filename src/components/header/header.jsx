import styled from "styled-components";
import { icons } from "../Navbar/navbar";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import {useState} from "react"
import { linksList } from "../Navbar/navbar";

const Container=styled.div`
    height:70px;
    background-color:var(--dark);
    width:100%;
    z-index:5;
    color:white;
    padding-left:5px;
    box-sizing:border-box;
    position:fixed;
    display:none;
    @media (max-width:800px){
        display:block;
    }

`
const Nav=styled.div`
    position:fixed;
    z-index:9;
    background-color:rgb(0,0,0,0.9);
    height:500px;
    width:100vw;
    top:70px;
    transform:scaleY(${props=>props.open?"1":"0"});
    transition:all 0ms.5 ease;
    transform-origin:top;
    display:none;
    @media (max-width:800px){
        display:block;
    }
`
const Ul=styled.ul`
width:100%;
height:100%;
list-style: none;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
`
const Li=styled.li`
border-bottom:1px solid rgb(255,255,255,0.5);
padding-bottom:10px;

    
`
const A=styled.a`
color:white;
font-weight:bold;
`
const HeaderTop=styled.div`
display:flex;
box-sizing:border-box;
justify-content:space-between;
align-items:center;
`
const Name=styled.p`
font-weight:700;
font-size:14px;
`
const Socials=styled.div`
    display:flex;
    gap:5px;
`
const BtnCon=styled.div`
`
const Header = () => {
    const [menuOpen,setMenuOpen]=useState(false)
    const Icon= menuOpen?IoMdClose:IoMdMenu
    return (
        <>
        <Container>
        <HeaderTop>
        <Name>Deanes Shaniya</Name>
                <Socials>
                    {
                        icons.map(Icon=><Icon style={{fontSize:"18px"}}/>)
                    }
                </Socials>
            </HeaderTop>
            <BtnCon onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <Icon style={{fontSize:"20px"}}/>
            </BtnCon>
            
            </Container>
            <Nav open={menuOpen}>
                <Ul>

            {linksList.map(item=>{
                return(
                    <Li onClick={()=>{setMenuOpen(false)}}>
                        <A href={item.path}>{item.text}</A>
                    </Li>
                    )
                })}
                </Ul>
            </Nav>
            </>
    )
}
export default Header                                