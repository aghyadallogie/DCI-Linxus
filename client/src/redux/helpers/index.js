import axios from 'axios';

export const helpFetchRefs = async () => await axios.get('http://localhost:5000/api/references');

export const searchUsers = async (targetObj, config) => await axios.post("http://localhost:5000/api/users/search", targetObj, config);