import { Link } from "react-router-dom";
import "./Navbar.css";

function Bar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-HR-Logo-Design-by-Greenlines-Studios-580x387.jpg" alt="logo" />
        <h3 className="title">HR-Management System</h3>
      </div>
      <div className="links">
        <Link className="link" to="/employees">Employees</Link>
        <Link className="link" to="/companies">Companies</Link>
      </div>
    </div>
  );
}

export default Bar;