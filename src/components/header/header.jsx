import styled from "styled-components";
import { icons } from "../Navbar/navbar";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import {useState} from "react"

const Container=styled.div`
    height:70px;
    background-color:var(--dark);
    width:100%;
    z-index:9;
    color:white;
    padding-left:5px;
    box-sizing:border-box;

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
    )
}
export default Header                                