import React, { useState } from "react";
import Die from "./Die";
import Button from "./Button";
import Player from "./Player";
import "./index.css";

function Board() {
   const [playing, setPlaying] = useState(true);
   const [activePlayer, setActivePlayer] = useState(0);
   const [scores, setScores] = useState([0, 0]);
   const [currentScore, setCurrentScore] = useState(0);
   const [dieValue, setDieValue] = useState(1);

   const roll = () => {
      if (!playing) return;

      const newDie = Math.ceil(Math.random() * 6);
      setDieValue(newDie);

      if (newDie === 1) {
         switchPlayer();
      } else {
         setCurrentScore((prev) => prev + newDie);
      }
   };

   const hold = () => {
      if (!playing) return;

      setScores((prevScores) => {
         const updatedScores = [...prevScores];
         updatedScores[activePlayer] += currentScore;

         if (updatedScores[activePlayer] >= 25) {
            setPlaying(false);
         }

         return updatedScores;
      });

      setCurrentScore(0);
      switchPlayer();
   };

   const switchPlayer = () => {
      setCurrentScore(0);
      setActivePlayer((prev) => (prev === 0 ? 1 : 0));
   };

   const newGame = () => {
      setPlaying(true);
      setActivePlayer(0);
      setScores([0, 0]);
      setCurrentScore(0);
      setDieValue(1);
   };

   return (
      <main>
         <Die imgName={`dice/die-${dieValue}.png`} />
         <Button purpose="new" label="🆕 NEW GAME" onClick={newGame} />
         <Button purpose="roll" label="🎲 ROLL" onClick={roll} />
         <Button purpose="hold" label="👇 Hold" onClick={hold} />
         <Player
            number={0}
            active={activePlayer === 0}
            score={scores[0]}
            curScore={activePlayer === 0 ? currentScore : 0}
         />
         <Player
            number={1}
            active={activePlayer === 1}
            score={scores[1]}
            curScore={activePlayer === 1 ? currentScore : 0}
         />
      </main>
   );
}

export default Board;
