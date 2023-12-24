import { useEffect, useState}  from "react";
import obtenerProductos from "./data"
import itemList from "./itemList"

const ItemListContainer = ({saludo}) => {
const [productos, setProductos] = useState([]);
const {categoria}= useParams()

useEffect(() =>{
    obtenerProductos
    .then((respuesta) =>{
     if(categoria){
      const ProductosFiltrados = respuesta.filter((producto)=> producto.categoría === categoria)
      setProductos(ProductosFiltrados);
     }else{
       setProductos(respuesta);
     }
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() =>{
        console.log("finalizó la compra")
    })
}, [categoria] )
    return (
        <div className="item-list-container">
           <p className="saludo">{saludo}</p>
           <itemList productos={productos}/>
        </div>
    )
    }

export default ItemListContainer