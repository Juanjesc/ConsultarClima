import React from 'react'
import useClima from '../hooks/useClima'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'

const Resultado = () => {

  const {resultado} = useClima()
  console.log(resultado)
  const {name, main} = resultado
  //Grados Kelvin
  const kelvin = 273.15
  return (
    <div className='p-4'>
        <div className=' bg-white p-8 md:p-20  w-full shadow-lg h-full'>
            <h2 className=' font-bold font-apiClima text-4xl text-center'>
                El clima de {name} es:
            </h2>
            <p className=' text-center my-4 font-bold text-4xl'>
               {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <div className='flex justify-between mt-8'>
                <div className=' w-full flex flex-col items-center'>
                    <FaTemperatureLow className=' relative top-1 text-blue-500 my-4'/>
                    <p className='flex flex-col items-center'>
                        Mínima de: <span>{parseInt(main.temp_min - kelvin)} &#x2103;</span>
                    </p>
                </div>
                <div className=' w-full flex flex-col items-center'>
                    <FaTemperatureHigh className=' relative top-1 text-red-500 my-4' />
                    <p className='flex flex-col items-center'>
                        Máxima de: <span>{parseInt(main.temp_max - kelvin)} &#x2103;</span>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Resultado