import './Menu.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import { Link } from 'react-router-dom';

function menu() {
    return(
        <header>
          <Navbar expand="lg" className="menuNav">
            <Navbar.Brand className="text-white">React-Eventos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto menuItem">
                <Link to="/" className="menuNav__Link">Eventos</Link>
                <Link to="/agenda" className="menuNav__Link">Agenda</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    </header>
    )
}

export default menu;