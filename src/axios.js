import axios from "axios";
// const baseUrl = 'https://meowfacts.herokuapp.com/';
const baseUrl = 'https://openlibrary.org/';

const instance = axios.create({
    baseURL: baseUrl
})
export default instance;