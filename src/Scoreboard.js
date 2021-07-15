import React from 'react';
import Game from './Game';

class ScoreBoard extends React.Component {
  renderGame(gmNum, team1, team2) {
    return (
      <Game
        gameID={gmNum}
        homeTeam={team1}
        awayTeam={team2}
      />
    )
  }

  render() {
    return (
      <div className="ScoreBoard">
        <div className="sbRow">
          {this.renderGame(1, "Yankees", "Red Sox")}
          {this.renderGame(2, "Rays", "Orioles")}
          {this.renderGame(3, "Mariners", "Angels")}
          {this.renderGame(4, "Phillies", "Mets")}
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
