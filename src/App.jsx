import './App.css'
import styled from "styled-components"
import  Navbar  from './components/Navbar/navbar.jsx'
import  Content  from './components/content/content.jsx'
import Header from './components/header/header.jsx'
const AppCon = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  position: relative;
  @media (max-width: 800px) {
    flex-direction:column;
  
    
  }
`;

function App() {
  return(
    <AppCon>
      <Header/>
      <Navbar/>
      <Content/>
    </AppCon>
  )
}

export default App
