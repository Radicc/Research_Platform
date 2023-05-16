import axios from "axios";

export default axios.create({
  method: "GET",
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news",
  headers: {
    "X-RapidAPI-Key": "9a2cfd44c1msh9b748c8d1b65599p1c7303jsn354475d31f41",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
});
