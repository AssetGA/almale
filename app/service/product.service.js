import httpService from "./http.service";

const productEndpoint = "/product/";

const productService = {
  get: async () => {
    const { data } = await httpService.get(productEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      productEndpoint + payload._id,
      payload
    );
    return data;
  },
};

export default productService;
