import { useState } from 'react'
import AppClima from './components/AppClima'
import { ClimaProvider } from './context/climaProvider'

function App() {

  return (
    <ClimaProvider>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
