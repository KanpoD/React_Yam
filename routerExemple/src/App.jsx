import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { createContext } from "react";
import Home from "./pages/Home/index.jsx";
import Rules from "./pages/Rules/index.jsx";
import Statistics from "./pages/Stats/index.jsx";
import NavBar from "./component/NavBar/index.jsx";

export const DiceContext = createContext();

const initialState = {
  rolls: 0,
  tripleSixCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ROLL_DICE":
      const rolls = action.payload;
      const tripleSixCount =
        action.payload === 3 ? state.tripleSixCount + 1 : state.tripleSixCount;
      return { ...state, rolls, tripleSixCount };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DiceContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </DiceContext.Provider>
  );
}

export default App;
