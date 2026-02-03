
import { Navbar } from './Components/Navbar.jsx'
import { Home }from './Components/Home.jsx'
import {About} from './Components/About.jsx'
import { Products } from './Components/Products.jsx';
import{Login} from './Components/Login.jsx'
import { Routes,Route } from 'react-router-dom';
import "./App.css";
function App() {

  return (
    <>
       <Navbar />
       <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
       </div>
    </>
  )
}

export default App
