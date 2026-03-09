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

      {employees.map((emp, index) => (
        <div key={index}>
          <h3>{emp.name}</h3>
          <p>Email: {emp.email_id}</p>
          <p>Position: {emp.position}</p>
          <p>Phone: {emp.phone_no}</p>
          <p>Address: {emp.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;