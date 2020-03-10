import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zANRjgR9ZVozLT-kBfPchyjqMcjqQd7lmvq9Tw-OGWo"
  }
});
