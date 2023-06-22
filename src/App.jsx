import { Route,  Routes } from "react-router-dom"
import Container from "./components/container/container"
import NavBar from "./components/pure/NavBar"
import Registro from "./components/pure/registro"
import UpdateRegister from "./components/pure/UpdateRegister"

import './style/navbar.scss'

function App() {

  return (
    <div>
      <nav className='navbar' style={styles.navbar}>
        <NavBar />
      </nav>

      <Routes>
        <Route path='/' element={<Container />}/>
        <Route path='/crearregistro' element={<Registro />}/>
        <Route path='/updateregistro' element={<UpdateRegister />}/>
      </Routes>
    </div>
  )
}

const styles = {
  navbar: {
    background: '#A0B4A3',
    fontWeight: 600,
    fontSize: 20,
    padding: 15
  }
}

export default App
