import { HashRouter ,Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Purcheses from './Pages/Purcheses'
import ProductDetail from './Pages/ProductDetail'
import AppNav from './Components/AppNav'
import Container from 'react-bootstrap/Container';
import Loader from './Components/Loader'
import { useSelector } from 'react-redux'

function App() {

//

  const isLoading=useSelector(state=>state.isLoading)

  return (
    <>
      <HashRouter>
        <AppNav/>
        <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/purcheses" element={<Purcheses/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
        </Routes>
        </Container>
        { isLoading&&<Loader/>}
      </HashRouter>
    
    </>
  )
}

export default App
