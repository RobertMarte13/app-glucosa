import { useEffect, useState } from 'react'

// API
import { APIrequest, responseInfo } from '../../service/service'

// Componentes
import TodoRegister from '../pure/TodoRegister'
import TodoInfo from '../pure/TodoInfo'


const Container = () => {

  // Estados
  const [response, setResponse] = useState(null)
  const [response2, setResponse2] = useState([])

  useEffect(() => {
    // Respuesta de la API que me devuelve todas las informaciones.
    APIrequest().then((res) => setResponse(res));
  }, [])

  // Funcion que me devuelve 
  function oneInfo(id) {
    responseInfo(id).then((res) => setResponse2(res));
  }

  return (
    <div>
      <div className="box-header">
        <h1 className="title">Registro Glucosa</h1>
      </div>
      <div className='content-register'>
        <TodoRegister response={response} oneinfo={oneInfo} />
      </div>
      <div>
        {
          // eslint-disable-next-line react/prop-types
          response2 &&
            response2.map((item, index) => (
              <div key={index}>
                <TodoInfo item={item} setResponse2={setResponse2} />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Container
