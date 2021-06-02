import { Link } from 'react-router-dom';

function Letra ({letra}) {
    return(
        <div className="contLetras">
            <Link className="letras" to={"/filter/" + letra}> {letra} </Link>
        </div>
    
        
    )
}

export default Letra;