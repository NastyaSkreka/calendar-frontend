import axios from "axios";

export const axiosClassic = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
