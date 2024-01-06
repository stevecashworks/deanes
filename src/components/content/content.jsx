import styled from "styled-components";
import Hero from "./hero";
import About from "./about";
import Services from "./services";

const Container = styled.div`
  background-color: white;
  flex: 4;
  color: white;
  position:absolute;
  left:250px;
  top:0;
  width:calc(100vw - 250px);
  left:250px;
  overflow-x:hidden;
  

`;


export const Content = () => {
  const job= "Financial analyst"
  return (<Container>
    <Hero/>
    <About/>
    <Services/>
    </Container>
    );
};

export default Content
