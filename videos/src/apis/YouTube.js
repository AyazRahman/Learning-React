import axios from "axios";

const KEY = "AIzaSyBjbmNW-XuNuRpTV9d3F63NYEOOSoFPL3Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});

/**
 * npm uninstall axios
 * npm install axios@0.18.0 */
