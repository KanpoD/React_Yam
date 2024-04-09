import React, { useContext } from "react";
import { DiceContext } from "../../App";

function Statistics() {
  const { state } = useContext(DiceContext);

  return (
    <div>
      <h1>Statistiques</h1>
      <p>Nombre de lancers : {state.rolls}</p>
      <p>Nombre de brelans de 6 : {state.tripleSixCount}</p>
    </div>
  );
}

export default Statistics;