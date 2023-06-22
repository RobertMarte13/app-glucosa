import { deleteRegister } from "../../service/service";
import '../../style/btn.scss'

// eslint-disable-next-line react/prop-types
const TodoRegister = ({ response, oneinfo }) => {
  function removeRegister(id) {
    console.log(id)
    deleteRegister(id)
  }
 
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        response && response.map((item, index) => (
          <div style={styles.component} key={index}>
            <h1 style={styles.title}>{item.fecha}</h1>
            <button className="btnInfo" style={styles.btnInfo} onClick={() => oneinfo(item.id)}>Info</button>
            <button style={styles.buttonRemove} onClick={() => removeRegister(item.id)}>BORRAR</button>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  component: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10,
    background: '#f2f3f2'
  },
  buttonRemove: {
    height: 55,
    width: 110,
    border: 'none',
    background: '#db422e',
    fontSize: 24,
    color: 'white',
    cursor: 'pointer',
  },
  btnInfo: {
    height: 40,
    width: 70
  },
  title: {
    paddingLeft: 10
  }

}

export default TodoRegister
