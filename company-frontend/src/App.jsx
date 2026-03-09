import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import CreateCompany from "./components/CreateCompany";
import CompanyList from "./components/CompanyList";

function App() {
  return (
    <div>
      <h1>Company Employee System</h1>

      <CreateEmployee />
      <CreateCompany/>
      <CompanyList/>
      <EmployeeList />
    </div>
  );
}

export default App;