import React from 'react';
import './App.css';

class Welcome extends React.Component{
  render() {
    return (
      <div className="Welcome">
          <h1 className="dante-title">¡Hola!</h1>
        <p className="dante-p">Este es el componente público.</p>
      </div>
    );
  }
}
export default Welcome;