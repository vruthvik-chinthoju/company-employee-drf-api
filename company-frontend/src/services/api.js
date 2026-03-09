import axios from "axios";

const API = axios.create({
  baseURL: "https://company-employee-drf-api.onrender.com/api/v1/"
});

export const getCompanies = () => API.get("companies/");
export const createCompany = (data) => API.post("companies/", data);

export const getEmployees = () => API.get("employees/");
export const createEmployee = (data) => API.post("employees/", data);