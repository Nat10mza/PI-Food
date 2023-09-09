import { Link } from "react-router-dom";
import "./ErrorCard.css";

function ErrorCard({ errorMessage }) {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">Error</h1>
              </div>

              <div className="contant_box_404">
                <div className="message-content">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>{errorMessage}</p>
                  <button className="button">
                    <Link to="/">Go to Home</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorCard;
