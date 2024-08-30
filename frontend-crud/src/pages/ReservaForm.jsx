import { Form, Formik } from "formik";
import { useReservas } from "../context/useReservas.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReservaForm = () => {
  const { createReserva, getReserva, updateReserva } = useReservas();
  const [reserva, setReserva] = useState({
    nombre: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const reserva = await getReserva(params.id);
        setReserva({
          nombre: reserva.nombre,
          description: reserva.description,
        });
        console.log(reserva);
      }
    };

    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={reserva}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);

          if (params.id) {
            await updateReserva(params.id, values);
          } else {
            await createReserva(values);
          }
          navigate("/");

          setReserva({
            nombre: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Reserva" : "Crear Reserva"}
            </h1>

            <label className="block">Nombre</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />

            <label className="block" htmlFor="">
              description
            </label>
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              name="description"
              id=""
              rows={3}
              value={values.description}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservaForm;
