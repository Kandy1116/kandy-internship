import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-nft-cloud-functions.cloudfunctions.net",
  // baseURL: "http://localhost:5001/nft-cloud-functions/us-central1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
