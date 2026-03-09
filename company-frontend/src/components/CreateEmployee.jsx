import { useState } from "react";
import { createEmployee } from "../services/api";

function CreateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createEmployee({
      name,
      email,
    });

    alert("Employee Created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default CreateEmployee;