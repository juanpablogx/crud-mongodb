import { useReservas } from "../context/useReservas.jsx";
import { useNavigate } from "react-router-dom";

const ReservaCard = ({ reserva }) => {
  const { deleteReserva, /* toggleReservaPaid */ } = useReservas();

  const navigate = useNavigate();

  /* const handleDone = async () => {
    await toggleReservaPaid(reserva._id);
  }; */

  const renderEstadoReserva = (estado) => {
    switch (estado) {
      case 0:
        return "⚠️"; // Pendiente
      case 1:
        return "✅"; // Pagada
      case 2:
        return "❌"; // Cancelada
      default:
        return "";
    }
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{reserva.nombre_cliente}</h2>
        <span>{renderEstadoReserva(reserva.estado_reserva)}</span>
      </header>
      <p className="text-xs">{reserva.email_cliente}</p>
      <p className="text-xs">
        Fecha de inicio: {new Date(reserva.fecha_inicio).toLocaleDateString()}
      </p>
      <p className="text-xs">
        Fecha de fin: {new Date(reserva.fecha_fin).toLocaleDateString()}
      </p>
      <p className="text-xs">
        Número de habitación: {reserva.numero_habitacion}
      </p>
      <span>{new Date(reserva.fecha_creacion).toLocaleDateString()}</span>
      <div className="flex gap-x-1 justify-end">
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => deleteReserva(reserva._id)}
        >
          Eliminar
        </button>
        <button
          className="bg-slate-800 px-2 py-1 text-white"
          onClick={() => navigate(`/editar/${reserva._id}`)}
        >
          Editar
        </button>
        {/* <button
          className="bg-green-500 px-2 py-1 text-white"
          onClick={handleDone}
        >
          {reserva.estado_reserva === 1
            ? "Marcar como no pagada"
            : "Marcar como pagada"}
        </button> */}
      </div>
    </div>
  );
};

export default ReservaCard;
