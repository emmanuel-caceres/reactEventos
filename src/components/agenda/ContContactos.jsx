import Contactos from './Contactos'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore } from '../../Firebase/index'

function ContContactos() {



    const [creaContacto, setcreaContacto] = useState([]);

    const db = getFirestore();

    const getContactos = () => {
        db.collection('contactos').get()
            .then(docs => {
                let arr = [];

                docs.forEach(doc => {
                    arr.push({ ...doc.data(), id: doc.id })
                })

                setcreaContacto(arr.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (a.nombre < b.nombre) {
                        return -1;
                    }
                    return 0;
                }));

            })
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getContactos();
    }, []);

    return (
        <div className="col-12 col-md-5 col-xl-5 agenda">
            <h4 className="text-white">Contactos</h4>
            <div className="contContactos">
                {
                    creaContacto.length ?
                        <>
                            {
                                creaContacto.map((item, index) => (
                                    <div>
                                        <Contactos
                                            id={item.id}
                                            nombre={item.nombre}
                                            telefono={item.telefono}
                                            email={item.email}
                                            foto={item.foto}
                                            letra={item.letra}
                                        />
                                    </div>
                                ))
                            }

                        </> : <div className="cargandoEventos">
                            <h4 className="text-center text-white">Cargando Contactos </h4>
                            <div class="spinner-border text-light ml-5" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div>

                }

            </div>
        </div>
    )
}

export default ContContactos;