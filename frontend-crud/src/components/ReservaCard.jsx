import { useReservas } from "../context/useReservas.jsx";
import { useNavigate } from "react-router-dom";

const ReservaCard = ({ reserva }) => {
  const { delelteReserva, toggleReservaPaid } = useReservas();

  const navigate = useNavigate();

  const handleDone = async() => {
    await toggleReservaPaid(reserva.id)
  }

  return (
    <div>
      <h2>{reserva.nombre}</h2>
      <p>{reserva.description}</p>
      <span>{reserva.pagada === 1 ? "✅" : "❌"}</span>
      <span>{reserva.createAt}</span>
      <button onClick={() => delelteReserva(reserva.id)}>Eliminar</button>
      <button onClick={() => navigate(`/editar/${reserva.id}`)}>Editar</button>
      <button onClick={() => handleDone(reserva.pagada)}></button>
    </div>
  );
};

export default ReservaCard;
