import '../../style/btn.scss'

// eslint-disable-next-line react/prop-types
const TodoInfo = ({ item, setResponse2 }) => {
  return (
    <div className='box-info'>
      <h1 className='fecha' >{item.fecha}</h1>
      <p>ID: {item.id}</p>
      <p>
        Nivel de azucar antes de comer: {item.nivelazucar1}
      </p>
      <p >Medicamento: {item.medicamento1}</p>
      <p>
        Nivel de azucar despues de comer: {item.nivelazucar2}
      </p>
      <p>Medicamento: {item.medicamento2}</p>
      <button
        id="btnBack"
        onClick={() => setResponse2([])}
      >
        X
      </button>
    </div>
  )
}

export default TodoInfo
