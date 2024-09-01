import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


export const getReservasRequest = async () => {
    try {
        const response = await axios.get(`${API_URL}/reservas`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getReservaRequest = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/reservas/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createReservaRequest = async (reserva) => {
    try {
        const response = await axios.post(`${API_URL}/reservas`, reserva);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteReservaRequest = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/reservas/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateReservaRequest = async (id, reserva) => {
    try {
        const response = await axios.put(`${API_URL}/reservas/${id}`, reserva);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const toggleReservaPaidRequest = async (id, pagada) => {
    try {
        const response = await axios.put(`${API_URL}/reservas/${id}`, { pagada });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}