import axios from "axios";
import config from "../../config/config";

const registered = async ({ name, email, password, confirmPassword }) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return response;
};

export { registered };
