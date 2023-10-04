import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Principal from './pages/Principal';
import Costureras from './pages/Costureras';
import Catologo_general from './pages/Catologo_general';
import Ropa_temporada from './pages/Ropa_temporada';
import Quienes_somos from './componentes/Quienes_somos';
import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/catalogo_general' element={<Catologo_general/>}/>
        <Route path='/costureras' element={<Costureras/>}/>
        <Route path='/ropa_temporada' element={<Ropa_temporada/>}/>
        <Route path='/quienes_somos' element={<Quienes_somos/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;