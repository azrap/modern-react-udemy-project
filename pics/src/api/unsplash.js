import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "GET THE TOKEN FROM THE SPOT"
  }
});
