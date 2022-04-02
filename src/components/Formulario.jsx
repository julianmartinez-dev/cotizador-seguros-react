import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants';

const Formulario = () => {
  return (
    <>
      <form action="">
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
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full bg-white p-3 border-gray-400"
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
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Planes
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="plan">{plan.nombre}</label>
                <input type="radio" id="plan" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input type="submit" value="Cotizar" className='py-2 px-6 bg-indigo-400 uppercase font-bold rounded-lg hover:bg-indigo-500 hover:cursor-pointer w-full'/>

      </form>
    </>
  );
};

export default Formulario;
