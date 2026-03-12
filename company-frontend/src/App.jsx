import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import CreateCompany from "./components/CreateCompany";
import CompanyList from "./components/CompanyList";
import Bar from "./components/NavBar";

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
          path="/employees"
          element={
            <>
              <CreateEmployee loadEmployees={loadEmployees} />
              <EmployeeList employees={employees} loadEmployees={loadEmployees}/>
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