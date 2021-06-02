import BtnBorrarContacto from "./BtnBorrarContacto";


function Contactos({id, nombre, telefono, email, foto, letra}) {
    return (
        <div className="contactos">
            <h4>{letra}</h4>
            <div className="datosContacto">
                <h6>{nombre}</h6>
                <p> <b>Tel:</b> {telefono}</p>
                <p> <b>email:</b> {email}</p>
            </div>
            <div className="btnBorrarContacto">
                <BtnBorrarContacto 
                idBorrar= {id}/>
            </div>
        </div>
    )
}

export default Contactos;