import axios from "axios";
import Data from "../models/KanyeModle";

function fetchKanyeApi(): Promise<Data> {
  return axios.get("https://api.kanye.rest/").then((res) => res.data);
}

export default fetchKanyeApi;
