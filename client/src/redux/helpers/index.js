import axios from 'axios';

export const helpFetchRefs = async () => await axios.get('http://localhost:5000/api/references');