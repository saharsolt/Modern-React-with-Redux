import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3xYqZrig9pjEGrTGqHm9_Polwfdukq4X2e7IEpoXr38",
  },
});
