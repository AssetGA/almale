import axios from "axios";
import config from "../../../config.json";

const httpAuth = axios.create({
  baseURL: config.apiEndpoint2 + "/auth/",
  // params: {
  //     key: process.env.REACT_APP_FIREBASE_KEY
  // }
});

const authService = {
  verify: async (payload) => {
    const { data } = await httpAuth.post(`verify`, payload);
    return data;
  },
  verifyGet: async (payload) => {
    const { data } = await httpAuth.patch("verify", payload);
    console.log("dataver", data);
    return data;
  },
};

export default authService;
