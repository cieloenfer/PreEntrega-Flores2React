import { Link } from "react-router-dom";
import "./item.css"

const item = ({producto}) =>{
    return(
        <div className="item">
            <p className="título"></p>
            <p className="precio"></p>
            <Link to={`/detalle/${producto.id}`} className="link">ver detalles</Link>
        </div>
    );
};

export default item; 