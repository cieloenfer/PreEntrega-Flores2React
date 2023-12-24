import item from "../Componentes/item";

const itemList = ({productos}) => {
    <div className="item-list">
        {
            productos.map ((producto) =>(
                <item producto ={producto} key={producto.id}></item>
            ))
        }
    </div>
}


s