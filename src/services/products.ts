import axiosBase from "./axios";

const getProducts = () => {
  try {
    return axiosBase.get("/products");
  } catch (e) {
    throw e;
  }
};

const getSituationStatus = () => {
  try {
    return axiosBase.get("/api/v1/dashboards/status_of_work_today");
  } catch (e) {
    throw e;
  }
};

const getSituationImage = () => {
  try {
    return axiosBase.get("/api/v1/dashboards/image");
  } catch (e) {
    throw e;
  }
};

export { getProducts, getSituationImage, getSituationStatus };
