import axios from "./axios";

const getBrands = () => {
  try {
    return axios.get("/brands");
  } catch (e) {
    throw e;
  }
};

const getBrandById = (id: number) => {
  try {
    const param = {
      id,
    };
    return axios.post("/brands/id", param);
  } catch (e) {
    throw e;
  }
};

export { getBrands, getBrandById };
