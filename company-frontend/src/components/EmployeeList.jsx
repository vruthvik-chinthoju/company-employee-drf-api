import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Employees</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;