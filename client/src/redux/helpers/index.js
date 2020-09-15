import axios from 'axios';

export const helpFetchRefs = async () => await axios.get('http://localhost:5000/api/references');

export const helpFetchMe = async () => await axios.get('http://localhost:5000/api/users/me');

export const searchUsers = async (targetObj, config) => await axios.post("http://localhost:5000/api/users/search", targetObj, config);

export const helpRegisterUser = async (body, config) => await axios.post("http://localhost:5000/api/auth/register", body, config);

export const helpLoginUser = async (body, config) => await axios.post("http://localhost:5000/api/auth/login", body, config);