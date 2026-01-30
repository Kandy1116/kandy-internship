import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-nft-cloud-functions.cloudfunctions.net",
});

export default instance;
