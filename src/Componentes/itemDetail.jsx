import React from 'react'

const itemDetail = ({producto}) => {
  return (
    <div>
      <p>{producto.nombre}</p>
      <p>{producto.precio}</p>
    </div>
  )
}

export default itemDetail
