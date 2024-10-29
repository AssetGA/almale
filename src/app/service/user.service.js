import httpService from "./http.service";

const userEndpoint = "/user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  getApi: async (payload) => {
    const { data } = await httpService.get(userEndpoint + "getApi", {
      params: payload,
    });
    console.lof("dataApi", data);
    return data;
  },
};
export default userService;
