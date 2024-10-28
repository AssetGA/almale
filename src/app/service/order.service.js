import httpService from "./http.service";

const orderEndpoint = "/order/";

const orderService = {
  create: async (payload) => {
    console.log("payload", payload);
    const { data } = await httpService.post(orderEndpoint, payload);
    return data;
  },
};
export default orderService;
