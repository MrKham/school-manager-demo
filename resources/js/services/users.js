import axios from "./index";
const CREATE_USER_URL = '/api/create-user';
const GET_LIST_URL = '/api/users';
export const createUser = async (user) => {
    return axios.post(CREATE_USER_URL, user);
}

export const getListUser = async () => {
    return axios.get(GET_LIST_URL);
}