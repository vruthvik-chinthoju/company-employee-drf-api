import { useState } from "react";
import { createCompany } from "../services/api";

function CreateCompany() {

  const [company, setCompany] = useState({
    name: "",
    location: "",
    about: "",
    type: "",
    active: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompany({
      ...company,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCompany(company);

    alert("Company created");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
      />

      <input
        name="about"
        placeholder="About company"
        onChange={handleChange}
      />

      <select name="type" onChange={handleChange}>
        <option value="">Select type</option>
        <option value="IT">IT</option>
        <option value="Non-It">Non-IT</option>
        <option value="Mobile-phones">Mobile Phones</option>
        <option value="Hr">HR</option>
      </select>

      <select name="active" onChange={handleChange}>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>

      <button>Create Company</button>

    </form>
  );
}

export default CreateCompany;