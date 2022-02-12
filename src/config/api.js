import axios from "axios";

const WhatJobRailsAPI = axios.create({
  baseURL: "https://whatjobrailsapi.herokuapp.com/",
});

export default WhatJobRailsAPI;
