import './App.css'
import {Routes, Route, NavLink} from "react-router-dom"
import Page1 from "./pages/Page1/index.jsx";
import Page2 from "./pages/Page2/index.jsx";

function App() {

  return (
    <>
      <nav>
        <NavLink style={({isActive}) => {
          return isActive ? {color: 'orange'} : {}
        }} to={'/'} >Page1</NavLink>
        <NavLink to={'/page2'} >Page2</NavLink>
      </nav>
      <Routes>
        <Route path={"/"} element={<Page1 />} />
        <Route path={'/page2'} element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App