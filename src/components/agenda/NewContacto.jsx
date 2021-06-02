import './newContacto.scss';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { getFirestore } from '../../Firebase/index';

import { useState } from 'react';

function NewContacto() {

    const history = useHistory();

    function direccion() {
        let path = "/agenda";
        history.push(path);
        window.location.reload(true);
    }


    const db = getFirestore();

    const [eventoNuevo, seteventoNuevo] = useState({
        nombre: '',
        telefono: '',
        email: '',
        foto: 'foto1',
        letra: '',
        letrafiltro:''
    })

    const [letraContacto, setletraContacto] = useState();
    const [letraFiltradora, setletraFiltradora] = useState();

    const handleChangeInput = (e) => {
        
        seteventoNuevo({ ...eventoNuevo, [e.target.name]: e.target.value });
        let letras = eventoNuevo.nombre.substring(0,2);
        let letraFiltrar = eventoNuevo.nombre.substring(0,1);
        
        setletraContacto (letras.toUpperCase());
        setletraFiltradora (letraFiltrar.toUpperCase());
        console.log(letras)
    }

    const creaContacto = (e) => {
        e.preventDefault();

        seteventoNuevo(eventoNuevo.letra = letraContacto);
        seteventoNuevo(eventoNuevo.letrafiltro = letraFiltradora);

        db.collection('contactos').add(eventoNuevo)
            .then(() => {
                direccion();
            })
            .catch(e => console.log(e));
    }


    return (

        <div className="col-12 col-md-6 nuevoContacto">
            <h4>Nuevo Contacto</h4>
            <form onSubmit={creaContacto}>
                
                <input type="text" value={eventoNuevo.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                
                <input type="number" value={eventoNuevo.telefono} onChange={handleChangeInput} name="telefono" placeholder="Telefono"/>

                <input type="text" value={eventoNuevo.email} onChange={handleChangeInput} name="email" placeholder="email"/>

                <button>Crear Contacto</button>
            </form>
        </div>

    )
}

export default NewContacto;