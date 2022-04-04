import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {

  const { handleChangeDatos, datos, error, setError, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('')
    
    cotizarSeguro();
  }

  return (
    <>
      {error && <Error />}

      <form action=""
        onSubmit={handleSubmit}
      >
        <div className=" my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full bg-white p-3 border-gray-400"
            onChange={handleChangeDatos}
            value={datos.marca}
          >
            <option value="">--Selecciona Marca---</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className=" my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            id="year"
            className="w-full bg-white p-3 border-gray-400"
            onChange={handleChangeDatos}
            value={datos.year}
          >
            <option value="">--Selecciona Año---</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className=" my-5">
          <label
            htmlFor="plan"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Planes
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="plan">{plan.nombre}</label>
                <input
                  type="radio"
                  id="plan"
                  name="plan"
                  value={plan.id}
                  onChange={handleChangeDatos}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="py-2 px-6 bg-indigo-400 uppercase font-bold rounded-lg hover:bg-indigo-500 hover:cursor-pointer w-full"
        />
      </form>
    </>
  );
};

export default Formulario;
