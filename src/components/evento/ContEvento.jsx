import './ContEvento.scss';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../Firebase/index'
import Evento from './Evento';
import BtnNewEvento from './BtnNewEvento';

function ContEvento() {
    const [creaEvent, setcreaEvent] = useState([]);

    const db = getFirestore();

    const getEventos = () => {
        db.collection('eventos').get()
            .then(docs => {
                let arr = [];

                docs.forEach(doc => {
                    arr.push({ ...doc.data(), id: doc.id })
                })

                setcreaEvent(arr.sort(function (a, b) {
                    if (a.fecha > b.fecha) {
                        return 1;
                    }
                    if (a.fecha < b.fecha) {
                        return -1;
                    }
                    return 0;
                }));

            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getEventos();
    }, []);

    return (
        <div className="container contEvento">
            <div className="row">
                <div className="col-12 tituloEvento">
                    <h1 className="text-white">Eventos</h1>
                    <div className="btnNewEvento">
                        <BtnNewEvento />
                    </div>

                </div>
            </div>
            {
                creaEvent.length ?
                    <>
                        {
                            creaEvent.map((item, index) => (
                                <div key={index}>
                                    <Evento
                                        id={item.id}
                                        titulo={item.titulo}
                                        texto={item.texto}
                                        fecha={item.fecha}
                                    />
                                </div>
                            ))
                        }

                    </> :

                    <div className="cargandoEventos">
                        <h2 className="text-center text-white">Cargando Eventos </h2>
                        <div class="spinner-border text-light ml-5" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>


            }

        </div>
    )
}

export default ContEvento;