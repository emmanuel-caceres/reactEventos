import { getFirestore } from '../../Firebase/index';

function BtnBorraContacto ({idBorrar}) {

    

    const db = getFirestore();

    const borraDocumento = () => {
        alert("¿Desea borrar el contacto?")
        
        db.collection("contactos").doc(idBorrar).delete().then(() => {
            console.log("Document successfully deleted!");
            window.location.reload(true);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
            <button onClick={borraDocumento}>X</button>
    )
}

export default BtnBorraContacto;