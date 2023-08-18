import { Link } from "react-router-dom";
import "./ErrorCard.css";

function ErrorCard({ errorMessage }) {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>{errorMessage}</p>
                <button className="button">
                  <Link to="/">Go to Home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorCard;
