import axios from "axios";
import config from "../config/config";

// const baseApiUrl = import.meta.env.VITE_API_URL;

const authToken = localStorage.getItem("authToken");

const getProducts = async ({
  limit = 10,
  sort = JSON.stringify({ createdAt: -1 }),
  filters = {},
}) => {
  const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(
    filters
  )}`;

  /**Sort
   * sorting key => from which data you want to sort
   *    createdAt, price, name, +> need json data to send
   * sort order => (1: ascending;asc , -1: desending;desc)
   */

  const response = await axios.get(
    `${config.baseApiUrl}/api/products/?${query}`
  );
  //   console.log(response.data);  // came two time in console due to <StrictMode> in main.jsx
  return response;
};

const getProductById = async (id) => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
  return response;
};

const getCategories = async (id) => {
  return await axios.get(`${config.baseApiUrl}/api/products/category`);
};

const addProduct = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
};

const editProduct = async (id, data) => {
  const response = await axios.put(
    `${config.baseApiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(
    `${config.baseApiUrl}/api/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};

export {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
  getCategories,
};
