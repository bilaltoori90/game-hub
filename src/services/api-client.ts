import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac48eda17f154a0a9aaeb06ebc9edf40",
  },
});
