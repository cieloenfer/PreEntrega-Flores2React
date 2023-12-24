import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import itemDetail from './itemDetail'
import obtenerProductos from '../../data'

const itemDetailContainer = () => {

const [producto, setProducto] = useState()
const {id} = useParams()

useEffect(() =>{
    obtenerProductos
    .then((respuesta)=>{
      const productoEncontrado = respuesta.find((prod)=> prod.id === id)
      setProducto(productoEncontrado)
})
     
}
)
  return (
    <div><itemDetail producto ={producto}/></div>
  )
    
  }

export default itemDetailContainer