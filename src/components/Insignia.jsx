import React from 'react';
import './styles/styles.css';

class Insignia extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img className='Badge__hero-1' src="" alt="Logo empresa"/>
        </div>
        <div className="Badge__section-name">
          <img className= 'Badge__avatar' src="" alt=""/>
          <h1> firsName <br/> lastName</h1>  
        </div>
        <div className="Badges__section-info">
          <h3>numbrePhone</h3>
          <h3>birthDate</h3>
          <h3>address</h3>
        </div>
      </div>
    );
  }
}

export default Insignia;