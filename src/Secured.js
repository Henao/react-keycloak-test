import React from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';
import './App.css';

class Secured extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    // const keycloak = Keycloak({
    //     realm: "MyDemo",
    //     auth-server-url: "http://localhost:8080/auth",
    //     ssl-required: "external",
    //     resource: "my-react-client",
    //     public-client: true,
    //     confidential-port: 0
    //   });
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div className="dante-div">
            <h1 className="dante-title">Hola Julián Henao</h1>
          <p className="dante-p"> Este es un componente de una aplicación protegido por Keycloak.<br /> No deberías poder
           ver esto a menos que te hayas autenticado con Keycloak.</p>
           <UserInfo keycloak={this.state.keycloak} />
          <Logout keycloak={this.state.keycloak} />
        </div>
      ); else return (<div>¡Imposible de autenticar!</div>)
    }
    return (
      <div>Inicializando Keycloak...</div>
    );
  }
}
export default Secured;