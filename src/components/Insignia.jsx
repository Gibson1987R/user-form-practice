// import { render } from '@testing-library/react';
import React from 'react';
import './styles/styles.css';

function EdadUsuario(props) {
  let fecha = props.birthDate;
  let fechaActual = new Date();
  let year = fechaActual.getFullYear();
  let edad = parseInt(JSON.stringify(year)) - fecha;

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
          <img className= 'Badge__avatar' src="" alt=""/>
          <h1> {this.props.lastName} <br/> {this.props.firstName}</h1>  
        </div>
        <div className="Badges__section-info">
          <h3>{this.props.numberPhone}</h3>
          <h3>
            <EdadUsuario birthDate={this.props.birthDate}/>
          </h3>
          <h3>{this.props.Address}</h3>
        </div>
      </div>
    );
  }
}

export default Insignia;