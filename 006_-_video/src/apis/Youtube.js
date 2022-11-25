import axios from "axios";

const KEY = "AIzaSyAfaxtLf217DxY7Uen_WGXuzd2HnJno0zs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
