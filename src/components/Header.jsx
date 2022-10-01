import React from 'react'
import logo from '../img/logo-clima.png'

const Header = () => {
  return (
    <header className=' shadow-lg mb-8'>
        <div className='flex justify-center items-center py-8 mx-auto gap-8 md:flex-row flex-col'>
            <img src={logo} alt="img_logo" className=' w-1/3 md:w-[10%] object-cover relative left-3 md:left-0' />
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-apiClima font-bold text-4xl'>React-Api-Clima</h1>
                <small className=' mt-4 md:mt-0'>Made with 💙 by: {' '} 
                    <a 
                        href="https://www.linkedin.com/in/juan-jes%C3%BAs-sedano-calder%C3%B3n-08938b1b0/"
                        className=' underline underline-offset-4 text-sky-600 md:inline block'
                    >
                        Juan Jesús Sedano
                    </a> 
                </small>

            </div>
        </div>
    </header>
  )
}

export default Header