import './App.css'
import styled from "styled-components"
import  Navbar  from './components/Navbar/navbar.jsx'
import  Content  from './components/content/content.jsx'
const AppCon= styled.div`
width:100vw;
min-height:100vh;
display:flex;
position:relative;
`

function App() {
  return(
    <AppCon>
      <Navbar/>
      <Content/>

    </AppCon>
  )
}

export default App
