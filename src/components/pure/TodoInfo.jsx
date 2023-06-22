import '../../style/btn.scss'

// eslint-disable-next-line react/prop-types
const TodoInfo = ({ item, setResponse2 }) => {
  return (
    <div style={styles.component}>
      <h1 style={styles.title}>{item.fecha}</h1>
      <p style={styles.parrafo}>ID: {item.id}</p>
      <p style={styles.parrafo}>
        Nivel de azucar antes de comer: {item.nivelazucar1}
      </p>
      <p style={styles.parrafo}>Medicamento: {item.medicamento1}</p>
      <p style={styles.parrafo}>
        {" "}
        Nivel de azucar despues de comer: {item.nivelazucar2}
      </p>
      <p style={styles.parrafo}>Medicamento: {item.medicamento2}</p>
      <button
        id="btnBack"
        style={styles.btnBack}
        onClick={() => setResponse2([])}
      >
        X
      </button>
    </div>
  )
}

// Estilos en linea
const styles = {
  component: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#f0f0f0",
    color: "#242424",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
    margin: 10
  },
  parrafo: {
    padding: "20px",
  },
  btnBack: {
    height: 55,
    width: "100%",
    border: "none",
    fontSize: 24,
    color: "white",
    cursor: "pointer",
  }
}

export default TodoInfo
