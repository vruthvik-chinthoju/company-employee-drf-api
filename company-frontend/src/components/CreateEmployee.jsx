import "./CreateEmployee.css";
import { createEmployee, getCompanies } from "../services/api";
import { useEffect, useState } from "react";

function CreateEmployee({ loadEmployees }) {

  const positions = [
    "Support",
    "Software Developer",
    "Frontend Developer",
    "Manager",
    "HR",
    "Senior Developer",
    "Business Manager",
    "Other"
  ];

  const [employee, setEmployee] = useState({
    name: "",
    email_id: "",
    phone_no: "",
    address: "",
    about: "",
    position: "",
    company: ""
  });

  const [customPosition, setCustomPosition] = useState("");

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((res) => {
      setCompanies(res.data);
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

    const finalPosition =
      employee.position === "Other"
        ? customPosition
        : employee.position;

    const data = {
      ...employee,
      position: finalPosition
    };

    try {

      await createEmployee(data);

      loadEmployees();

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

      setCustomPosition("");

    } catch (error) {
      console.log("Backend error:", error.response?.data);
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

        <textarea
          name="about"
          placeholder="About Employee"
          value={employee.about}
          onChange={handleChange}
        ></textarea>

        <select
          name="position"
          value={employee.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>

          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}

        </select>

        {employee.position === "Other" && (
          <input
            type="text"
            placeholder="Enter Position"
            value={customPosition}
            onChange={(e) => setCustomPosition(e.target.value)}
          />
        )}

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