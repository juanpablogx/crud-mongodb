import { useContext } from 'react';
import { ReservasContext } from './ReservasContext';

export const useReservas = () => {
    const context = useContext(ReservasContext);
    if (!context) {
        throw new Error("useReservas debe estar dentro del proveedor ReservasContext");
    }
    return context;
};