import { NavLink } from 'react-router-dom';
import "../css/Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">🎟️ TicketPlatform</div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/ticket-integration" className="nav-link">TicketIntegration</NavLink>
        <NavLink to="/ticket-builder" className="nav-link">TicketBuilder</NavLink>
        <NavLink to="/ticket-market" className="nav-link">TicketMarket</NavLink>
      </nav>
    </header>
  );
};

export default Header;
