import { getFirestore } from '../../Firebase/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function BtnEditEvento ({idEditar, titulo, fecha, texto}) {


    return (
            <Link to="/editEvento" className="evento__btnEditar"> e </Link>

    )
}

export default BtnEditEvento;