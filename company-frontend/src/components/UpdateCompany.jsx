import { useState, useEffect } from "react";
import { updateCompany } from "../services/api";
import "./update.css"

function UpdateCompany({ company, onClose, reload }) {

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    about: "",
    type: "",
    active: true
  });

  useEffect(() => {
    if (company) {
      setFormData(company);
    }
  }, [company]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateCompany(company.company_id, formData);

    reload();
    onClose();
  };

  return (
    <div className="modalOverlay">

      <div className="modalBox">

        <h2>Update Company</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Company Name"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type"
          />

          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About"
          />

          <div className="buttons">
            <button type="submit" id="up">Update</button>
            <button type="button" onClick={onClose} id="ca">Cancel</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default UpdateCompany;