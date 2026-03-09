import { useState } from "react";
import { createEmployee } from "../services/api";

function CreateEmployee() {

  const [employee, setEmployee] = useState({
    name: "",
    email_id: "",
    address: "",
    phone_no: "",
    about: "",
    position: "",
    company: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createEmployee(employee);

    alert("Employee Created");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email_id"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <input
        name="phone_no"
        placeholder="Phone"
        onChange={handleChange}
      />

      <input
        name="about"
        placeholder="About"
        onChange={handleChange}
      />

      <select name="position" onChange={handleChange}>
        <option value="">Select Position</option>
        <option value="Manager">Manager</option>
        <option value="developer">Developer</option>
        <option value="tester">Tester</option>
      </select>

      <input
        name="company"
        placeholder="Company URL (example: /api/companies/1/)"
        onChange={handleChange}
      />

      <button type="submit">Add Employee</button>

    </form>
  );
}

export default CreateEmployee;