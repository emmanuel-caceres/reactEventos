import BtnBorraEvento from './BtnBorraEvento';
import BtnEditEvento from './BtnEditEvento';

function Evento({id, titulo, texto, fecha}) {
  
    const divideFecha = fecha.split("-", 3);

    let mes = '';

    switch (divideFecha[1]) {
        case '01': mes ='Ene';
        break;
        case '02': mes ='Feb';
        break;
        case '03': mes ='Mar';
        break;
        case '04': mes ='Abr';
        break;
        case '05': mes ='May';
        break;
        case '06': mes ='Jun';
        break;
        case '07': mes ='Jul';
        break;
        case '08': mes ='Ago';
        break;
        case '09': mes ='Sep';
        break;
        case '10': mes ='Oct';
        break;
        case '11': mes ='Nov';
        break;
        case '12': mes ='Dic';
        break;
        default: mes ='mes';
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-11 col-md-10 col-xl-7 evento" >
                <div className="botonera">
                    <BtnBorraEvento 
                    idBorrar= {id}/>

                    <BtnEditEvento 
                    idEditar= {id}
                    titulo={titulo}
                    fecha={fecha}
                    texto={texto}
                    />

                </div>

                
                <div className="evento__ctitulo">
                    <h3>{titulo}</h3>
                    <p>{texto}.</p>
                </div>

                <div className="evento__cfecha">
                    <h2>{divideFecha[2]}</h2>
                    <h5>{mes}</h5>
                </div>
            </div>
            
        </div>
    )
};

export default Evento;