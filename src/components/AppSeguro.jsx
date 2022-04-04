import Formulario from "./Formulario";
import Spinner from "./Spinner";
import Resultado from "./Resultado";
import useCotizador from "../hooks/useCotizador";

const AppSeguro = () => {

  const { resultado, cargando } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className=" text-white text-center text-4xl font-black">
          Cotizador de Seguros de Auto
        </h1>
      </header>

      <main className="bg-white md:w-1/3 lg:1/4 mx-2 md:mx-auto shadow rounded-lg p-10">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};

export default AppSeguro;
