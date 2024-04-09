import React, { useState, useContext } from "react";
import { DiceContext } from "../../App";
import { Link } from "react-router-dom";

function Simulator() {
  const { dispatch } = useContext(DiceContext);
  const [numOfExperiments, setNumOfExperiments] = useState(100);
  const [tripleSixCount, setTripleSixCount] = useState(0);
  const [successPercentage, setSuccessPercentage] = useState(0);
 
  const [percentageList, setPercentageList] = useState([]);
  const [totalPercentage, setTotalPercentage] = useState(0);


  const rollDice = () => {
    let tripleSixCount = 0;

    for (let i = 0; i < numOfExperiments; i++) {
      let sixCount = 0;

      // Lancer 6 dés
      for (let j = 0; j < 6; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 6) {
          sixCount++;
        }
      }

      if (sixCount >= 3) {
        tripleSixCount++;
      }
      
    }
    const percentage = ((tripleSixCount / numOfExperiments) * 100).toFixed(2);
    setPercentageList(prevList => [...prevList, percentage]);
    const totalPercentageValue = (percentageList.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur), 0) / percentageList.length).toFixed(2);
    setTotalPercentage(totalPercentageValue)
    console.log(totalPercentageValue);
    
    setSuccessPercentage(percentage);

    setTripleSixCount(tripleSixCount);
    dispatch({ type: "ROLL_DICE", payload: numOfExperiments });
  };

  return (
    <div>
      <h1>Simulateur de jeu de dés</h1>
      <div>
        Nombre d'expériences :
        <input
          type="number"
          value={numOfExperiments}
          onChange={(e) => setNumOfExperiments(e.target.value)}
        />
      </div>
      <button onClick={rollDice}>Lancer</button>
      <br />
      <br />
      <p>Nombre de brelans de 6 : {tripleSixCount}</p>
      <p>Pourcentage de réussite : {successPercentage}%</p>
      <p>Pourcentage de réussite totale : {totalPercentage}%</p>
      <Link to="/statistics">Voir les statistiques</Link>
    </div>
  );
}

export default Simulator;
