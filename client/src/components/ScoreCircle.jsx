import "./ScoreCircle.css";

function ScoreCirle({ score }) {
  function checkhealthScore() {
    if (score > 67) return "ContainerScore healthy";
    if (score > 33) return "ContainerScore mid";
    return "ContainerScore nothealthy ";
  }

  return (
    <div className={checkhealthScore(score)}>
      <p className="score">{score}</p>
    </div>
  );
}

export default ScoreCirle;
