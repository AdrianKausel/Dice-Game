import React,  { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';  
import UserRegister from './Components/Formulario';
import axios from 'axios';  
import logo from './Components/assets/logoitau.png'
import Home from './Components/Home';
import WinnerList from './Components/WinnerList';
import Swal from 'sweetalert2'


library.add(fas)
  
function App() {

  const [datas, setDatas] = useState([]);


  const addData =(obj) => {
    return axios.post("http://181.215.135.217:8000/api/players/", obj)
      .then(respn => {
          if(!respn.data.error){
            setDatas([...datas, respn.data.players])
            Swal.fire({
              title: 'Registro exitoso!',
              icon: 'success',
              showConfirmButton: false,
            })
            return true
          }
          else { return false}
      })
  }


  return (
    <BrowserRouter>
          <div className='mainPage'>
            <div className='headerTop'>
            <img className='imageLogo' alt='logo' src={logo}></img>
              <Link className='linkStyle' to='/'> Home </Link>
              <Link className='linkStyle' to='/juego'> Juego! </Link> 
              <Link className='linkStyle' to='/ganadores'> Tabla de ganadores </Link> 
            </div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/juego' element={<Main getData={datas}/>}/>
              <Route path='/registro' element={<UserRegister createData={addData} />} />
              <Route path='/ganadores' element={<WinnerList/>}/>
            </Routes>
          </div>
    </BrowserRouter>
  );
}
  
export default App;