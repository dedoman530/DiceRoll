import "./index.css";

function Player(props) {
   return (
      <section
         className={`player ${
            props.score >= 25
               ? "player--winner"
               : props.active
               ? "player--active"
               : ""
         }`}
      >
         <h2 className={`name ${props.number}`}>Player {props.number + 1}</h2>
         <p className="score">{props.score}</p>
         <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score">{props.curScore}</p>
         </div>
      </section>
   );
}

export default Player;
