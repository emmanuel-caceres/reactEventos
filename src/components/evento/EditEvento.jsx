import './NewEvento.scss'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { getFirestore } from '../../Firebase/index';

import { useState } from 'react';
import firebase from 'firebase/app';



function EditEvento() {

    const history = useHistory();

    function direccion() {
        let path = "/";
        history.push(path);
        window.location.reload(true);
    };

    const db = getFirestore();

    function EditarEvento () {
        var washingtonRef = db.collection("eventos").doc();

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            titulo: 'evento editado',
            texto: 'texto evento editado',
            fecha: ''
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }


    const [eventoNuevo, seteventoNuevo] = useState({
        titulo: '',
        texto: '',
        fecha: ''
    })

    const handleChangeInput = (e) => {
        seteventoNuevo({ ...eventoNuevo, [e.target.name]: e.target.value });
    }



    return (
        <div className="container-fluid formularioEvento">
            <div className="row">
                <div className="col-md-7">

                        

                    <form onSubmit={EditarEvento}>
                        <div>
                            <h4>Editar Evento</h4>
                            <h1> hola{eventoNuevo.titulo} jo</h1>
                            <Link to="/">X</Link>
                        </div>
                        <label for="titulo">Titulo</label>
                        <input type="text" value={eventoNuevo.titulo} onChange={handleChangeInput} name="titulo" placeholder="hola"/>

                        <label for="fecha">Fecha</label>
                        <input type="date" name="fecha" id="fecha" value={eventoNuevo.fecha} onChange={handleChangeInput} />

                        <textarea name="texto" id="texto" value={eventoNuevo.texto} onChange={handleChangeInput}></textarea>

                        <button>Enviar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditEvento;