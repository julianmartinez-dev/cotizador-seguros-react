import { useCallback, useRef } from 'react';

import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;

  //Matiene el valor durante el ciclo de vida del componente
  const yearRef = useRef(year)

  if (resultado === 0) return null;


  //Evitamos el re-render del nombre de la marca y el plan, solo renderiza cuando cambia el resultado
  const [nombreMarca] = useCallback( MARCAS.filter((m) => m.id === Number(marca)),[resultado] );
  const [nombrePlan] = useCallback( PLANES.filter(p => p.id === Number(plan)), [resultado]);

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2 text-xl">
        <span className="font-bold">Total a pagar: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
