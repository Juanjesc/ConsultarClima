import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {
  const [alerta, setAlerta] = useState('')
  const {busqueda, datosBusqueda, consultarClima} = useClima()
  const {ciudad, pais} = busqueda
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (Object.values(busqueda).includes('')){
      setAlerta('* Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarClima(busqueda)

  }
  return (
    <div className=" p-4">
      <form 
        className=" bg-white p-8 md:p-20 md:w-max w-full shadow-lg relative" 
        onSubmit={handleSubmit}
      >
        {alerta && 
          <p className=" text-red-600 font-bold font-apiClima italic text-base absolute top-[10%]">
            {alerta}
          </p>
        }
        <div className=" mb-4 md:w-96 w-full">
          <label htmlFor="city" className="block">Ciudad</label>
          <input 
            type="text" 
            id="ciudad"
            name="ciudad"
            placeholder="Elige tu ciudad"
            className="px-4 py-2 rounded-md border border-gray-300 w-full"
            value={ciudad}
            onChange={datosBusqueda}

          />
        </div>
        <div className=" mb-4 md:w-96 w-full">
          <label htmlFor="city" className="block">País</label>
          <select 
            name="pais" 
            id="pais" 
            className="px-4 py-2 rounded-md border border-gray-300 w-full"
            value={pais}
            onChange={datosBusqueda}
          >
            <option value="">-- Seleccione --</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
            <option value="AR">Argentina</option>
            <option value="DE">Alemania</option>
            <option value="FR">Francia</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" className=" bg-purple-700 text-white uppercase px-3 py-2 w-full text-lg font-bold mt-4 cursor-pointer"/>
      </form>
    </div>
  )
}

export default Formulario