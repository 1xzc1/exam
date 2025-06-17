import axios from "../axios";

export const fetchSearch = (payload) => {
    return axios.get(payload);
};