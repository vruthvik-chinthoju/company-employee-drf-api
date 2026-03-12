import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Bar() {

  const [open ,setOpen] = useState(false)

  const handleClick = () =>{
    setOpen(!open)
  }

  return (
    <div className="navbar">
      <div className="main">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-HR-Logo-Design-by-Greenlines-Studios-580x387.jpg" alt="logo" />
        <h3 className="title">HR-Management System</h3>
      </div>
      <div className={`links ${open ? "active" : ""}`}>
        <Link className="link" to="/employees">Employees</Link>
        <Link className="link" to="/companies">Companies</Link>
      </div>
      <div className="close">
        <button onClick={handleClick}> ☰</button>
      </div>
    </div>
  );
}

export default Bar;