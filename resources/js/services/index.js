import axios from "axios";
import get from "lodash/get";

const baseURL = "/";

const headers = {
    "Content-Type": "application/json",
};

const instance = axios.create({
    baseURL,
    headers,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const status =
            error.response && error.response.status
                ? error.response.status
                : 500;
        return Promise.reject({
            status,
            data: get(error, "response.data"),
        });
    }
);

export default instance;
