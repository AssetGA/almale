import httpService from "./http.service";

const userEndpoint = "/user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  getApi: async () => {
    const { data } = await httpService.get(userEndpoint + "/getApi");
    return data;
  },
};
export default userService;
