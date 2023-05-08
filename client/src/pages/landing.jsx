import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="">
      <h1>Landing</h1>
      <Link to="/home">
        <button>Go!</button>
      </Link>
    </div>
  );
}

export default Landing;
