import axios from "axios";

export default axios.create({
  method: "GET",
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news",
  headers: {
    "X-RapidAPI-Key": "5ff7652132mshfd5344fae57d12bp1aac72jsn2afee6589cda",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
});
