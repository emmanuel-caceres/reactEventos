import { getFirestore } from '../../Firebase/index';

function BtnBorraEvento ({idBorrar}) {

    

    const db = getFirestore();

    const borraDocumento = () => {
        alert("¿Desea borrar el evento?")
        
        db.collection("eventos").doc(idBorrar).delete().then(() => {
            console.log("Document successfully deleted!");
            window.location.reload(true);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
            <button className="evento__btnBorrar" onClick={borraDocumento}>X</button>
    )
}

export default BtnBorraEvento;