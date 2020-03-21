import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: process.env.REACT_APP_YT_KEY
  }
});

// const YT_KEY = ;

// console.log(YT_KEY);
