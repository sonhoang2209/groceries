import axios from "./axios";

const getNews = () => {
  try {
    return axios.get("/news");
  } catch (e) {
    throw e;
  }
};

const getNewById = (id: number) => {
  try {
    const param = {
      id,
    };
    return axios.post("/news/id", param);
  } catch (e) {
    throw e;
  }
};

export { getNews, getNewById };
