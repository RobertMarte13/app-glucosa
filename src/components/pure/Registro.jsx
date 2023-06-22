import { useState } from "react"
import { createRegister } from "../../service/service"
import '../../style/formulario.scss'

const Registro = () => {

  const [register, setRegister] = useState(null)
  
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
  
  function createRes() {
    if (register !== null) {
      createRegister(register)
      window.alert('La creacion del registro a sido exitosa!')
    } else {
      window.alert('Porfavor vuelve a hacer click')
    }
    // console.log(JSON.stringify(register))
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
        <label>nivel de azucar 1</label>
        <input type="text" name='nivelazucar2'/>
        <label>medicamento</label>
        <input type="text" name='medicamento2'/>
        <button className="btn-submit" type="submit" onClick={() => createRes()}>Craer Registro</button>
      </form>
    </div>
  )
}

export default Registro
