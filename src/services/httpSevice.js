import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
    config => {
        if (!config.headers?.authorization) {
            const token = localStorage.getItem("accessToken")
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axios.interceptors.response.use(null, error => {
    return Promise.reject(error);
});

export const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
export default http
