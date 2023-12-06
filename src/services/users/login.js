// login.js dentro de la carpeta users, que se encuentra en carpeta services dentro de la carpeta SRC
import axios from "axios";
import { urlLogin } from "../../config/apiConfig";

const login = async (userData) => {
  try {
    const response = await axios.post(urlLogin, userData);

    const statusCode = response.status;

    const data = await response.data;

    sessionStorage.setItem("accessToken", data.accessToken);
    sessionStorage.setItem("userName", data.userName);

    return statusCode === 200 && data.accessToken;
  } catch (error) {
    throw error;
  }
};

export default login;
