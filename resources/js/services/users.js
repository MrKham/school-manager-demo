import axios from "./index";
const CREATE_USER_URL = '/api/create-user';

export const createUser = async (user) => {
    return axios.post(CREATE_USER_URL, user);
}