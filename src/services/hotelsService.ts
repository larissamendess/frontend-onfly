import axios from 'axios';

const API_URL_HOTELS = 'http://localhost:3000/hotels';
const API_URL_HOTELS_DETAILS = 'http://localhost:3000/hotels_details'

export const getHotels = async () => {
    const response = await axios.get(API_URL_HOTELS);
    return response.data;
}

export const getHotelsDetails = async (id: number) => {
    const response = await axios.get(`${API_URL_HOTELS_DETAILS}/${id}`);
    return response.data;
}