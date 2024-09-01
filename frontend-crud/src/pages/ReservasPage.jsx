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
      return <p className="text-white">No hay reservas</p>;
    }

    return reservas.map((reserva) => (
      <ReservaCard key={reserva._id} reserva={reserva} />
    ));
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center mb-6">
        Reservas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {renderMain()}
      </div>
    </div>
  );
};

export default ReservasPage;
