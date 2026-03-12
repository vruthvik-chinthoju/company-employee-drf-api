import "./CreateCompany.css";
import { useState } from "react";
import { createCompany } from "../services/api";

function CreateCompany() {

  const companyTypes = [
    "IT",
    "Non-IT",
    "Mobile Phones",
    "HR",
    "Finance",
    "Other"
  ];

  const [company, setCompany] = useState({
    name: "",
    location: "",
    about: "",
    type: "",
    active: true
  });

  const [customType, setCustomType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompany({
      ...company,
      [name]: name === "active" ? value === "true" : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalType =
      company.type === "Other" ? customType : company.type;

    const data = {
      ...company,
      type: finalType
    };

    await createCompany(data);

    alert("Company created");

    setCompany({
      name: "",
      location: "",
      about: "",
      type: "",
      active: true
    });

    setCustomType("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Company Name"
          value={company.name}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={company.location}
          onChange={handleChange}
        />

        <textarea
          name="about"
          placeholder="About company"
          value={company.about}
          onChange={handleChange}
        />

        <select
          name="type"
          value={company.type}
          onChange={handleChange}
        >
          <option value="">Select company type</option>

          {companyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}

        </select>

        {company.type === "Other" && (
          <input
            type="text"
            placeholder="Enter company type"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
          />
        )}

        <select
          name="active"
          value={company.active}
          onChange={handleChange}
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        <button>Create Company</button>

      </form>
    </div>
  );
}

export default CreateCompany;