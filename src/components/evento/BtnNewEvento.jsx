import { Link } from 'react-router-dom';

function BtnNewEvento() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="newButton">
                    <Link className="newEvent" to="/newEvent"> Nuevo Evento </Link>
            </div>
        </div>
    )
};

export default BtnNewEvento;