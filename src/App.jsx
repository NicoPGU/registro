import { useState } from 'react'
import './App.css'
import Registro from './componentes/Registro'
import SocialButton from './componentes/SocialButton'


function App() {

  return (
    <>
      <div className='main'>
        <div className='title'>
            <h1>Crea una cuenta</h1>
          
            <div className="Registro">
              <Registro/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
