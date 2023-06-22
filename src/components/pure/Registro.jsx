import { useState } from 'react'

// API
import { createRegister } from '../../service/service'

// Estilos
import '../../style/formulario.scss'

const Registro = () => {

  // Estado
  const [register, setRegister] = useState(null)
  
  // Funcion que crea los registros para enviarlos a la res api
  const handleSubmit = (e) => {
    e.preventDefault()
    setRegister({
      fecha: e.target.fecha.value,
      nivelazucar1: e.target.nivelazucar1.value,
      medicamento1: e.target.medicamento1.value,
      nivelazucar2: e.target.nivelazucar2.value,
      medicamento2: e.target.medicamento2.value
    })
  }
  
  // Funcion que manda el json para crear el registro en la base de datos
  function createRes() {
    if (register !== null) {
      
      if (register.fecha.length === 9 || register.fecha.length === 7) {
        return window.alert('La fecha que introdusiste no es valida, prueba con este formato 00/00/00')
      }

      createRegister(register)
      window.alert('La creacion del registro a sido exitosa!')
      
    } else {
      window.alert('Porfavor vuelve a hacer click')
    }
  }
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>fecha</label>
        <input type="text" name='fecha'/>
        <label>nivel de azucar 1</label>
        <input type="text" name='nivelazucar1'/>
        <label>medicamento</label>
        <input type="text" name='medicamento1'/>
        <label>nivel de azucar 2</label>
        <input type="text" name='nivelazucar2'/>
        <label>medicamento2</label>
        <input type="text" name='medicamento2'/>
        <button className="btn-submit" type="submit" onClick={() => createRes()}>Craer Registro</button>
      </form>
    </div>
  )
}

export default Registro
