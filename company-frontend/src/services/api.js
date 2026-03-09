import axios from "axios";

const API_URL = "https://company-employee-drf-api.onrender.com/api/employees/";

export const getEmployees = () => axios.get(API_URL);

export const createEmployee = (data) => axios.post(API_URL, data);

export const deleteEmployee = (id) => axios.delete(`${API_URL}${id}/`);

export const updateEmployee = (id, data) =>
  axios.put(`${API_URL}${id}/`, data);