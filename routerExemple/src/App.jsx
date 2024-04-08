import './App.css'
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import AddPost from "./pages/AddPost/index.jsx";
import NavBar from "./component/NavBar/index.jsx";
import Param from "./pages/Param/index.jsx";

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/add-post'} element={<AddPost/>}/>
                <Route path={'/param/:id'} element={<Param />} />
                {/*Gestion des routes non matchée*/}
                <Route path={'*'} element={<div>Rien ici</div>} />
            </Routes>
        </>
    )
}

export default App