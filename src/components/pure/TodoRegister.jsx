import { deleteRegister } from "../../service/service";

import '../../App.scss'
import '../../style/btn.scss'

// eslint-disable-next-line react/prop-types
const TodoRegister = ({ response, oneinfo }) => {

  // Funcion que remueve o elimina del registro cualquier informacion
  function removeRegister(id) {
    deleteRegister(id)
  }
 
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        response && response.map((item, index) => (
          <div className='info-primary' key={index}>
            <h1 className="title">{item.fecha}</h1>
            <button className="btnInfo" onClick={() => oneinfo(item.id)}>Info</button>
            <button className="btnRemove" onClick={() => removeRegister(item.id)}>BORRAR</button>
          </div>
        ))
      }
    </div>
  );
}

export default TodoRegister
