import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">

      <div className="not-found-container">

        <div className="error-icon">
          ⚙️
        </div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for
          does not exist or has been moved.
        </p>

        <div className="not-found-buttons">

          <Link
            to="/"
            className="home-btn"
          >
            ← Go to Home
          </Link>

          <Link
            to="/dashboard"
            className="dashboard-btn"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;