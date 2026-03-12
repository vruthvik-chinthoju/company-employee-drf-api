import "./CreateEmployee.css";
import { createEmployee, getCompanies } from "../services/api";
import { useEffect, useState } from "react";

function CreateEmployee({ loadEmployees }) {

  const [employee, setEmployee] = useState({
    name: "",
    email_id: "",
    phone_no: "",
    address: "",
    about: "",
    position: "",
    company: ""
  });

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getCompanies().then((res) => {
      setCompanies(res.data);
      // console.log(res);
      
    });
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: name === "company" ? Number(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(employee); // debug

      await createEmployee(employee);

      loadEmployees()

      alert("Employee created successfully");

      setEmployee({
        name: "",
        email_id: "",
        phone_no: "",
        address: "",
        about: "",
        position: "",
        company: ""
      });

    } catch (error) {
      console.log("Backend error:", error.response.data);
    }
  };

  return (
    <div className="form">

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          name="email_id"
          placeholder="Email"
          value={employee.email_id}
          onChange={handleChange}
        />

        <input
          name="phone_no"
          placeholder="Phone"
          value={employee.phone_no}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={employee.address}
          onChange={handleChange}
        />

        <input
          name="about"
          placeholder="About Employee"
          value={employee.about}
          onChange={handleChange}
        />

        <select
          name="position"
          value={employee.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option value="Manager">Manager</option>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
        </select>

        <select
          name="company"
          value={employee.company}
          onChange={handleChange}
        >
          <option value="">Select Company</option>

          {companies.map((company) => (
            <option key={company.company_id} value={company.company_id}>
              {company.name}
            </option>
          ))}
        </select>

        <button type="submit">Add Employee</button>

      </form>

    </div>
  );
}

export default CreateEmployee;