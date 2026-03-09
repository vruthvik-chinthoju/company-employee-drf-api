import { useState } from "react";
import { createCompany } from "../services/api";

function CreateCompany() {

  const [company, setCompany] = useState({
    name: "",
    location: "",
    about: "",
    type: ""
  });

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCompany(company);
    alert("Company created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Company Name" onChange={handleChange}/>
      <input name="location" placeholder="Location" onChange={handleChange}/>
      <input name="about" placeholder="About company" onChange={handleChange}/>

      <select name="type" onChange={handleChange}>
        <option value="">Select type</option>
        <option value="IT">IT</option>
        <option value="Non-It">Non-IT</option>
        <option value="Mobile-phones">Mobile Phones</option>
        <option value="Hr">HR</option>
      </select>
      <input type="date" name="" id="" />
      <select name="active">
        <option value="True">True</option>
        <option value="False">False</option>
      </select>

      <button>Create Company</button>
    </form>
  );
}

export default CreateCompany;