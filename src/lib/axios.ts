import axios, { type AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://task-api-eight-flax.vercel.app/',
});


let isRefreshing = false

let pendingQueue: {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}[] = []


const processingQueue = (error: unknown) => {
  pendingQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve(null)
    }
  })
  pendingQueue = []
}



axiosInstance.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry: boolean
    }
    if (((error.response?.status === 401 || error.response?.status === 500) &&
      error.response?.data?.message?.toLowerCase().includes("jwt expired") &&
      !originalRequest._retry
    )) {
      originalRequest._retry = true;
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject })
        }).then(() => axiosInstance(originalRequest))
      }
      isRefreshing = true

      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        console.log("New token arrived", res.data);

        processingQueue(null);


        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processingQueue(refreshError);
        console.error("Refresh token failed, logging out");
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
)

export default axiosInstance
