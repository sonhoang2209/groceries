import axios from "./axios";

const login = (username: string, password: string) => {
  try {
    const param = {
      username,
      password,
    };
    return axios.post("users/login", param);
  } catch (e) {
    throw e;
  }
};

export { login };
