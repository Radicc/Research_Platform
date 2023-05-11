import axios from "axios";

export default axios.create({
  method: "GET",
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2",
  headers: {
    "X-RapidAPI-Key": "ec93c127acmsh87a505023594f89p1f9a2bjsn5dd21ed35501",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
});
