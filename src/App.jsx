//Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Menu from './components/menu/Menu';

import ContEvento from './components/evento/ContEvento';
import NewEvento from './components/evento/NewEvento';
import EditEvento from './components/evento/EditEvento';

import ContAgenda from './components/agenda/ContAgenda';

import Footer from './components/footer/Footer';
import ContAgendaFiltrada from './components/agenda/ContAgendaFiltrada';


function App() {
  return (
    <BrowserRouter>

      <Menu />

      <Switch>

        <Route exact path="/">
          <ContEvento />
        </Route>

        <Route path="/newEvent">
          <ContEvento />
          <NewEvento />
        </Route>


          <Route path="/editEvento">
            <ContEvento />
            <EditEvento />
          </Route>



        <Route path="/agenda">
          <ContAgenda />
        </Route>

        <Route exact path="/filter/:filtroLetra">
          <ContAgendaFiltrada />
        </Route>
      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
