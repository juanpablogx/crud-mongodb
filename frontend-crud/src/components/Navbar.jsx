import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>Mis Reservas</h1>
      </Link>

      <ul className="flex gap-x-2">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
        </li>
        <li>
          <Link to="/nueva" className="bg-slate-200 px-2 py-1">Crear Nueva Reserva</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
