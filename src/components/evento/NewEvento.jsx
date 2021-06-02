import './NewEvento.scss'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { getFirestore } from '../../Firebase/index';

import { useState } from 'react';


function NewEvento() {

    const history = useHistory();

    function direccion() {
        let path = "/";
        history.push(path);
        window.location.reload(true);
    }


    const db = getFirestore();

    const [eventoNuevo, seteventoNuevo] = useState({
        titulo: '',
        texto: '',
        fecha: ''
    })

    const handleChangeInput = (e) => {
        seteventoNuevo({ ...eventoNuevo, [e.target.name]: e.target.value });
    }

    const creaEvento = (e) => {
        e.preventDefault();

        db.collection('eventos').add(eventoNuevo)
            .then(() => {
              
                direccion();
            })
            .catch(e => console.log(e));
    }

    return (
        <div className="container-fluid formularioEvento">
            <div className="row">
                <div className="col-md-7">

                    <form onSubmit={creaEvento}>
                        <div>
                            <h4>Nuevo Evento</h4>
                            <Link to="/">X</Link>
                        </div>
                        <label for="titulo">Titulo</label>
                        <input type="text" value={eventoNuevo.titulo} onChange={handleChangeInput} name="titulo" />

                        <label for="fecha">Fecha</label>
                        <input type="date" name="fecha" id="fecha" value={eventoNuevo.fecha} onChange={handleChangeInput} />

                        <textarea name="texto" id="texto" placeholder="Escribe tu evento" value={eventoNuevo.texto} onChange={handleChangeInput}></textarea>

                        <button className="btnPublicar">Enviar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewEvento;