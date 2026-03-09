import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";

function App() {
  return (
    <div>
      <h1>Company Employee System</h1>

      <CreateEmployee />

      <EmployeeList />
    </div>
  );
}

export default App;