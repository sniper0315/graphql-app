import axios from "axios";

import { APIBASEURL } from "../config/settings";

const getGraphql = (req) => {
  return axios.post(APIBASEURL + "/graphql", req).then((res) => {
    return res.data;
  });
};

const appService = {
  getGraphql,
};

export default appService;
