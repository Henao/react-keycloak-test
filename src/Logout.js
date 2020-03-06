import React from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';

class Logout extends React.Component {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={ () => this.logout() }>
        Salir
      </button>
    );
  }
}
export default withRouter(Logout);