// import { render } from '@testing-library/react';
import React from 'react';
import Gravatar from './Gravatar';
import './styles/styles.css';

function EdadUsuario(props) {
  let fecha = new Date(props.birthDate);
  let fechaActual = new Date();
  let edad = fechaActual.getFullYear() - fecha.getFullYear();
  console.log(typeof fecha);
  console.log(fecha);
  
  if (edad >= 18 ) {
    return (<p>Eres mayor tienes {edad} años de edad</p>)
    } else if (edad <=17) {
      return(<p>Eres menor tienes {edad} años de edad</p>)
    } else{ return(<p></p>)}
}

class Insignia extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img className='Badge__hero-1' src="" alt="Logo empresa"/>
        </div>
        <div className="Badge__section-name">
          <Gravatar 
          className='Badge__avatar'
          email ={this.props.email}
          alt='Avatar'/>
          <h1> {this.props.lastName} <br/> {this.props.firstName}</h1>  
        </div>
        <div className="Badges__section-info">
          <h3>{this.props.numberPhone}</h3>
          <h5>
            <EdadUsuario birthDate={this.props.birthDate}/>
          </h5>
          <h6>{this.props.Address}</h6>
        </div>
      </div>
    );
  }
}

export default Insignia;