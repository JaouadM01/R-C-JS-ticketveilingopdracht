import { Link } from 'react-router-dom';
import "./css/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-button">← Back to Home</Link>
    </div>
  );
};

export default NotFound;
