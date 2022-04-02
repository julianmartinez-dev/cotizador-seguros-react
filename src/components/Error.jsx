import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const { error } = useCotizador();

  return (
    <div className=" w-full p-3 bg-red-300 text-center">
        <p>{error}</p>
    </div>
  )
}

export default Error