import "./Comapny.css";
import { deleteEmployee } from "../services/api";
import { useState } from "react";
import UpdateEmployee from "./UpdateEmployee";

function EmployeeList({ employees, loadEmployees }) {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  const handleUpdate = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="box1">

      <h2 className="head">Employees</h2>

      {employees.map((emp) => (
        <div key={emp.emp_id} className="info">

          <h3>{emp.name}</h3>
          <p>Email: {emp.email_id}</p>
          <p>Phone: {emp.phone_no}</p>
          <p>Position: {emp.position}</p>
          <p>About: {emp.about}</p>
          <p>Address: {emp.address}</p>

          <button
            onClick={() => handleDelete(emp.emp_id)}
            className="delete"
          >
            Delete
          </button>

          <button
            onClick={() => handleUpdate(emp)}
            className="update"
          >
            Update
          </button>

        </div>
      ))}

      {selectedEmployee && (
        <UpdateEmployee
          employee={selectedEmployee}
          reload={loadEmployees}
          onClose={() => setSelectedEmployee(null)}
        />
      )}

    </div>
  );
}

export default EmployeeList;