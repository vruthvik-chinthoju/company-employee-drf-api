import "./Comapny.css";
import { deleteCompany, getCompanies } from "../services/api";
import { useEffect, useState } from "react";
import UpdateCompany from "./UpdateCompany";

function CompanyList() {

  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const loadCompanies = () => {
    getCompanies().then((res) => {
      setCompanies(res.data);
    });
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const handleDelete = async (id) => {
    alert("Deleting Company");

    await deleteCompany(id);

    loadCompanies();
  };

  const handleUpdate = (company) => {
    console.log("upsated",company);
    
    setSelectedCompany(company);
  };

  return (
    <div className="box1">

      <h2 className="head">Companies</h2>

      {companies.map((company) => (
        <div key={company.company_id} className="info">

          <h3>{company.name}</h3>
          <p>Location: {company.location}</p>
          <p>Type: {company.type}</p>
          <p>{company.about}</p>
          <p>{company.added_date}</p>
          <p>{company.active ? "Active" : "Inactive"}</p>

          <button
            onClick={() => handleDelete(company.company_id)}
            className="delete"
          >
            Delete
          </button>

          <button
            onClick={() => handleUpdate(company)}
            className="update"
          >
            Update
          </button>

        </div>
      ))}

      {selectedCompany && (
        <UpdateCompany
          company={selectedCompany}
          reload={loadCompanies}
          onClose={() => setSelectedCompany(null)}
        />
      )}

    </div>
  );
}

export default CompanyList;