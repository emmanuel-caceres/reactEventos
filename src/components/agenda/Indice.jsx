import './indice.scss';
import Letra from './Letra';
import { Link } from 'react-router-dom';


function Indice () {

    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="col-12 indice">
            <div className="contLetrasAgenda">
                <Link className="letras" to="/agenda"> Agenda </Link>
            </div>
            
            {
                abc.map((item, index) => (

                    <Letra 
                    letra={item}
                    />
                ))
            }
            
        </div>
    )
}

export default Indice;

