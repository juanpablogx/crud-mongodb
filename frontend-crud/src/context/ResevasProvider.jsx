import { useState } from "react";
import { getReservasRequest } from "../api/reserva.api";
import { createReservaRequest } from "./../api/reserva.api.js";
import { deleteReservaRequest } from "../api/reserva.api";
import { getReservaRequest } from "../api/reserva.api";
import { updateReservaRequest } from "../api/reserva.api";
import { toggleReservaPaidRequest } from "../api/reserva.api";
import { ReservasContext } from "./ReservasContext";

export const ReservasContextProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  const fetchReservas = async () => {
    const reservas = await getReservasRequest();
    console.log(reservas);
    setReservas(reservas);
  };

  const deleteReserva = async (id) => {
    try {
      const response = await deleteReservaRequest(id);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createReserva = async (reserva) => {
    try {
      const response = await createReservaRequest(reserva);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getReserva = async (id) => {
    try {
      const response = await getReservaRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateReserva = async (id, reserva) => {
    try {
      const response = await updateReservaRequest(id, reserva);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleReservaPaid = async (id) => {
    try {
      const reserva = reservas.find((reserva) => reserva.id === id);
      await toggleReservaPaidRequest(id, reserva.pagada === 0 ? 1 : 0);
      setReservas(
        reservas.map((reserva) =>
          reserva.id === id ? { ...reserva, pagada: !reserva.pagada } : reserva
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReservasContext.Provider
      value={{
        reservas,
        fetchReservas,
        deleteReserva,
        createReserva,
        getReserva,
        updateReserva,
        toggleReservaPaid,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
};
