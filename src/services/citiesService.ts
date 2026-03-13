import axios from 'axios';

const API_URL = 'http://localhost:3000/cities';

export const getCities = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

