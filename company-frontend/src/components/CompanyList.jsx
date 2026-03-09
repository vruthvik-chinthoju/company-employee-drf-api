import { useEffect, useState } from "react";
import { getCompanies } from "../services/api";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((res) => {
      setCompanies(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Companies</h2>

      {companies.map((company) => (
        <div key={company.url}>
          <h3>{company.name}</h3>
          <p>Location: {company.location}</p>
          <p>Type: {company.type}</p>
          <p>{company.about}</p>
          <p>{company.added_date}</p>
          <p>{company.active}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CompanyList;