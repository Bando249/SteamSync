import GameCard from "./GameCard";
import "./TopGames.css";
const games = Array.from({ length: 15 });
const TopGames = () => {
  return (
    <div>
      <h1>Top Games</h1>

      <div className="game-container">
        {games.map(() => (
          <div className="game">
            <GameCard />
          </div>
        ))}
      </div>
      <div className="button">
        <a href="library" className="btn btn-primary button" role="button">
          Full Library
        </a>
      </div>
    </div>
  );
};

export default TopGames;
