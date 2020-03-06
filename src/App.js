import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li className="dante-public"><Link to="/">Componente Público</Link></li>
            <li className="dante-secure"><Link to="/secured">Componente Privado</Link></li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;