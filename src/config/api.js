import axios from "axios";

const WhatJobRailsAPI = axios.create({
  baseURL: "http://whatjobrailsapi.herokuapp.com/",
});

export default WhatJobRailsAPI;
