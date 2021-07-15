function Game(props) {
  return (
    <div className="gameBox">
      <p>Game #{props.gameID}</p>
      <div className="teamHeader">
        <h2>{props.awayTeam} vs {props.homeTeam}</h2>
      </div>
    </div>
  );
}

export default Game;
