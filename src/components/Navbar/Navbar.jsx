import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        DevPilot AI
      </div>

      <ul className="nav-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <button className="start-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;