import "./ScoreCircle.css";

function ScoreCirle({ score, icon, iconsStyle }) {
  function checkhealthScore(score) {
    if (score > 67) return "ContainerScore healthy";
    if (score > 33) return "ContainerScore mid";
    return "ContainerScore nothealthy ";
  }

  function changeScoreColor(score) {
    if (score > 33 && score < 67) return "midScore";
    return "normalScore";
  }

  return (
    <div className={checkhealthScore(score)}>
      <p className={changeScoreColor(score)}>{score}</p>
      {<img src={icon} alt="" className={iconsStyle} />}
    </div>
  );
}

export default ScoreCirle;
