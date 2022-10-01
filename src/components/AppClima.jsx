import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Header from './Header'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppClima = () => {
  const {resultado, cargando, cityNotFound} = useClima()
  console.log(cargando)
  return (
    <>
      <Header />
        <main className='flex justify-center gap-8 md:flex-row flex-col items-center'>
            <Formulario />
            {
              cargando ? (
                <div className=' md:ml-[15%]'>
                  <Spinner />
                </div>) :
              resultado?.name ? <Resultado /> :
              cityNotFound ? <p className=' text-red-700 font-bold shadow-md bg-white p-4'>{cityNotFound}</p> :
              <p>El clima se va a mostrar aquí</p>

            }
        </main>
    </>
  )
}

export default AppClima