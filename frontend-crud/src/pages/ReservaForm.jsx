import { Form, Formik } from "formik";
import { useReservas } from "../context/useReservas.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup"; // Importa Yup

const ReservaForm = () => {
  const { createReserva, getReserva, updateReserva } = useReservas();
  const [reserva, setReserva] = useState({
    nombre_cliente: "",
    email_cliente: "",
    fecha_inicio: "",
    fecha_fin: "",
    numero_habitacion: "",
    estado_reserva: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const reserva = await getReserva(params.id);
        if (reserva) {
          setReserva({
            nombre_cliente: reserva.nombre_cliente,
            email_cliente: reserva.email_cliente,
            fecha_inicio: reserva.fecha_inicio.split('T')[0], // Formatear fecha
            fecha_fin: reserva.fecha_fin.split('T')[0], // Formatear fecha
            numero_habitacion: reserva.numero_habitacion,
            estado_reserva: reserva.estado_reserva,
          });
        } else {
          console.error("Reserva no encontrada");
        }
      }
    };

    loadTask();
  }, [params.id]);

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre_cliente: Yup.string().required("El nombre es obligatorio"),
    email_cliente: Yup.string()
      .email("Debe ser un correo válido")
      .required("El email es obligatorio"),
    fecha_inicio: Yup.date().required("La fecha de inicio es obligatoria"),
    fecha_fin: Yup.date().required("La fecha de fin es obligatoria"),
    numero_habitacion: Yup.number()
      .required("El número de habitación es obligatorio")
      .positive("El número de habitación debe ser positivo")
      .integer("El número de habitación debe ser un número entero"),
    estado_reserva: Yup.string().required("El estado de la reserva es obligatorio"),
  });

  return (
    <div>
      <Formik
        initialValues={reserva}
        enableReinitialize={true}
        validationSchema={validationSchema} // Aplica la validación aquí
        onSubmit={async (values) => {
          console.log(values);

          if (params.id) {
            await updateReserva(params.id, values);
          } else {
            await createReserva(values);
          }
          navigate("/");

          setReserva({
            nombre_cliente: "",
            email_cliente: "",
            fecha_inicio: "",
            fecha_fin: "",
            numero_habitacion: "",
            estado_reserva: 0,
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => (
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
              name="nombre_cliente"
              value={values.nombre_cliente}
              onChange={handleChange}
            />
            {errors.nombre_cliente && touched.nombre_cliente ? (
              <div className="text-red-500">{errors.nombre_cliente}</div>
            ) : null}

            <label className="block">Email</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="email"
              name="email_cliente"
              value={values.email_cliente}
              onChange={handleChange}
            />
            {errors.email_cliente && touched.email_cliente ? (
              <div className="text-red-500">{errors.email_cliente}</div>
            ) : null}

            <label className="block">Fecha de Inicio</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="date"
              name="fecha_inicio"
              value={values.fecha_inicio}
              onChange={handleChange}
            />
            {errors.fecha_inicio && touched.fecha_inicio ? (
              <div className="text-red-500">{errors.fecha_inicio}</div>
            ) : null}

            <label className="block">Fecha de Fin</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="date"
              name="fecha_fin"
              value={values.fecha_fin}
              onChange={handleChange}
            />
            {errors.fecha_fin && touched.fecha_fin ? (
              <div className="text-red-500">{errors.fecha_fin}</div>
            ) : null}

            <label className="block">Número de Habitación</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="number"
              name="numero_habitacion"
              value={values.numero_habitacion}
              onChange={handleChange}
            />
            {errors.numero_habitacion && touched.numero_habitacion ? (
              <div className="text-red-500">{errors.numero_habitacion}</div>
            ) : null}

            <label className="block">Estado de la Reserva</label>
            <select
              className="px-2 py-1 rounded-sm w-full"
              name="estado_reserva"
              value={values.estado_reserva}
              onChange={handleChange}
            >
              <option value="">Selecciona un estado</option>
              <option value={0}>Pendiente</option>
              <option value={1}>Confirmada</option>
              <option value={2}>Cancelada</option>
            </select>
            {errors.estado_reserva && touched.estado_reserva ? (
              <div className="text-red-500">{errors.estado_reserva}</div>
            ) : null}

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
