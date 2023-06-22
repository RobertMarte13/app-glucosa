import { useState } from "react"
import { updateRegisterAPI } from "../../service/service" 
import '../../style/formulario.scss'

const UpdateRegister = () => {

  const [update, setUpdate] = useState(null)
  const [id, setId] = useState(null)
  
  const handleSubmit2 = (e) => {
    e.preventDefault()
    setUpdate({
      fecha: e.target.fecha.value,
      nivelazucar1: e.target.nivelazucar1.value,
      medicamento1: e.target.medicamento1.value,
      nivelazucar2: e.target.nivelazucar2.value,
      medicamento2: e.target.medicamento2.value
    })
    setId({
      id: e.target.id.value
    })
  }

  function updateRes() {
    if (update !== null) {
      updateRegisterAPI(update, parseInt(id.id))
      window.alert('Actualizacion del registro exitosa!')
    } else {
      window.alert('Para poder confirma vuelva a dar click!')
    }
    
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit2}>
        <label>id</label>
        <input type="text" name='id'/>
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
        <button className="btn-submit" type="submit" onClick={() => updateRes()}>Creando Actualizacion</button>
      </form>
    </div>
  )
}

export default UpdateRegister
