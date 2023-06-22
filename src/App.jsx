import { Route,  Routes } from 'react-router-dom'

// Componentes
import Container from './components/container/container'
import NavBar from './components/pure/NavBar'
import Registro from './components/pure/registro'
import UpdateRegister from './components/pure/UpdateRegister'

// Importaciones de estilos
import './style/navbar.scss'

function App() {

  return (
    <div>
      {/* Navegador */}
      <nav className='navbar' style={styles.navbar}>
        <NavBar />
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Container />}/>
        <Route path='/crearregistro' element={<Registro />}/>
        <Route path='/updateregistro' element={<UpdateRegister />}/>
      </Routes>
    </div>
  )
}

// Estilos en linea
const styles = {
  navbar: {
    background: '#A0B4A3',
    fontWeight: 600,
    fontSize: 20,
    padding: 15
  }
}

export default App
