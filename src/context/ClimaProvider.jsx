import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext()
const ClimaProvider = ({children}) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [cityNotFound, setCityNotFound] = useState(false)
    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    // Esta función será la encargada de tomar los datos de la API, de manera que será asíncrona
    const consultarClima = async datos => {
 
        setCargando(true)
        setCityNotFound(false)
        try {
            const { ciudad, pais } = datos
            const appId = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const url_clima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: clima } = await axios(url_clima)
            setResultado(clima)
        } catch (error) {
            setCityNotFound('Ciudad no encontrada, no hay resultados')
            
        } finally {
            setCargando(false)
        }
       
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda: busqueda,
                datosBusqueda: datosBusqueda,
                consultarClima: consultarClima,
                resultado: resultado,
                cargando: cargando,
                cityNotFound

            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}
export default ClimaContext