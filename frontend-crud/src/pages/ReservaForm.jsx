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
      <h1>{params.id ? "Editar Reserva" : "Crear Reserva"}</h1>

      <Formik
        initialValues={reserva}
        enableReinitialize={true}
        onSubmit={async (values ) => {
          console.log(values);

          if (params.id) {
            await updateReserva(params.id, values);
            navigate("/");
          } else {
            await createReserva(values);
          }

          setReserva({
            nombre: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />

            <label htmlFor="">description</label>
            <textarea
              name="description"
              id=""
              rows={3}
              value={values.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservaForm;
