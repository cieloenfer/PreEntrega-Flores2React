import { useState } from 'react'
import ItemListContainer from './Componentes/itemListContainer'
import Navbar from './Componentes/Navbar/Navbar'
import itemDetailContainer from './Componentes/itemDetailContainer'
import itemCount from './Componentes/itemCount'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
   
    <BrowserRouter>
     <div  id='app'>
      <Navbar/> 
      <itemCount initial={1} stock={5} onAdd={(quantify) => console.log(`cantidad agregada`, quantify)}/>
      <Routes>
      <Route path="" element={<ItemListContainer saludo="Bienvenido a Iuris Help"/>}/> 
      <Route path='/categorías/:categoria' elemnt={<ItemListContainer saludo="Bienvenido a Iuris Help"/>}/>
      <Route path='/detalle/:id' element={<itemDetailContainer/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </div>
    </BrowserRouter>
     
      
  )
}

export default App
