import axios from "axios";

//apply base url for axios

const axiosIcoApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

axiosIcoApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const checkStatusCode = (code, err) => {
  // console.log(err, "<====err")
  if (code && [403, 501, 502, 503, 500, 401].includes(code)) {


    if (axiosIcoApi.defaults.headers.common["token"] !== undefined) {
      // LogoutUser()
      throw new Error(err.response.data.message);
    } else {
      throw new Error(err.response.data.message);
    }
  } else {
    throw new Error(err.message);
  }
};

export async function get(url, config = {}) {
  return await axiosIcoApi
    .get(url, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
    
}

export async function post(url, data, config = {}) {
  return await axiosIcoApi
    .post(url, data, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}

export async function put(url, data, config = {}) {
  return axiosIcoApi
    .put(url, { ...data }, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}

export async function del(url, config = {}) {
  return await axiosIcoApi
    .delete(url, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}
