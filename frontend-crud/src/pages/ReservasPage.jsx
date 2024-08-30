import { useEffect } from "react";
import ReservaCard from "../components/ReservaCard.jsx";
import { useReservas } from "../context/useReservas.jsx";

const ReservasPage = () => {
  const { reservas, fetchReservas } = useReservas();

  useEffect(() => {
    fetchReservas();
  }, []);

  function renderMain() {
    if (reservas.length === 0) {
      return <p>No hay reservas</p>;
    }

    return reservas.map((reserva) => (
      <ReservaCard key={reserva.id} reserva={reserva} />
    ));
  }

  return (
    <div>
      <h1>Reservas</h1>

      {renderMain()}
    </div>
  );
};

export default ReservasPage;
