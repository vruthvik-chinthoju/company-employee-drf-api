import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import CreateCompany from "./components/CreateCompany";
import CompanyList from "./components/CompanyList";
import Bar from "./components/NavBar";

import "./App.css"

import { getEmployees } from "./services/api";

function App() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <BrowserRouter>

      <Bar />

      <Routes>

        <Route
          path="/"
          element={
            <div style={{ textAlign: "center" }}>
              <div className="box">
                <div className="home">
                  <h1>HR Management System</h1>
                  <img src="https://img.freepik.com/premium-vector/people-doodle-businessman-sitting-front-his-computer-hand-drawn-cartoon-illustration_3890-639.jpg?w=360" alt="" />
                  <p>Manage companies and employees easily</p>
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/employees"
          element={
            <>
              <CreateEmployee loadEmployees={loadEmployees} />
              <EmployeeList employees={employees} loadEmployees={loadEmployees} />
            </>
          }
        />

        <Route
          path="/companies"
          element={
            <>
              <CreateCompany />
              <CompanyList />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;