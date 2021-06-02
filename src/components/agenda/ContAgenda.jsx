import './ContAgenda.scss';
import ContContactos from './ContContactos';
import Indice from './Indice';
import NewContacto from './NewContacto';

function ContAgenda () {
    return (
        <div className="container contAgenda">
            <div className="row">
                <div className="col-12">
                     <h1>Agenda</h1>
                </div>
            </div>

            <div className="row">
    
                    <Indice />
                
            </div>

            <div className="row rowContactos">
                <ContContactos />
                <NewContacto />
            </div>
        </div>
    )
}

export default ContAgenda;