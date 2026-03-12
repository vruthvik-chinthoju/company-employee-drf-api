import axios from "axios";

const API = axios.create({
  baseURL: "https://company-employee-drf-api.onrender.com/api/"
});


export const getCompanies = () => API.get("companies/");
export const createCompany = (data) => API.post("companies/", data);
export const updateCompany = (id, data) => API.put(`companies/${id}/`, data);
export const deleteCompany = (id) => API.delete(`companies/${id}/`);


export const getEmployees = () => API.get("employees/");
export const createEmployee = (data) => API.post("employees/", data);
export const updateEmployee = (id, data) => API.put(`employees/${id}/`, data);
export const deleteEmployee = (id) => API.delete(`employees/${id}/`);