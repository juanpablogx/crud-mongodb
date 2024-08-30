import { useReservas } from "../context/useReservas.jsx";
import { useNavigate } from "react-router-dom";

const ReservaCard = ({ reserva }) => {
  const { delelteReserva, toggleReservaPaid } = useReservas();

  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleReservaPaid(reserva.id);
  };

  return (
    <div className="bg-sale-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{reserva.nombre}</h2>
        <span>{reserva.pagada === 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{reserva.description}</p>
      <span>{reserva.createAt}</span>
      <div className="flex gap-x-1">
        <button className="bg-red-500 px-2 py-1 text-white" onClick={() => delelteReserva(reserva.id)}>Eliminar</button>
        <button className="bg-slate-800 px-2 py-1 text-white" onClick={() => navigate(`/editar/${reserva.id}`)}>
          Editar
        </button>
        <button className="bg-green-500 px-2 py-1 text-white" onClick={() => handleDone(reserva.pagada)}></button>
      </div>
    </div>
  );
};

export default ReservaCard;
