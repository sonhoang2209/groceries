import axios from "./axios";

const getProducts = () => {
  try {
    return axios.get("/products");
  } catch (e) {
    throw e;
  }
};

const getProductById = (id: number) => {
  try {
    const param = {
      id,
    };
    return axios.post("/products/id", param);
  } catch (e) {
    throw e;
  }
};

export { getProducts, getProductById };
