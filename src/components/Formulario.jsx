import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Contador from './Contador';

class Formulario extends React.Component {
  render() {
    return (
      <div className='mb-3'>
        <form onSubmit={this.props.onSubmit}>
          <div className='form-grupp'>
            <label>
              Last Name  :
              <input
              className='form-control'
              type="text"
              name ='lastName'
              value={this.props.lastName}
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              First Name  : 
              <input 
              className='form-control'
              type="text" 
              name='firstName'
              value={this.props.firstName} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              NumberPhone: 
              <input 
              className='form-control'
              type="number" 
              name='numberPhone'
              value={this.props.numberPhone} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              Email: 
              <input 
              className='form-control'
              type='email' 
              name='email'
              value={this.props.email} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              BirthDate: 
              <input 
              className='form-control'
              type="date" 
              name='birthDate'
              value={this.props.birthDate} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              Address: 
              <textarea 
              className='form-control'
              type="text" 
              name='address'
              value={this.props.address} 
              onChange={this.props.onChange}
              id='direccion'
              />
            </label>
          </div>

          <Contador
          onChange={this.props.onChange}
          address={this.props.address}
          /> 

          <input
          className ='btn btn-primary'
          type="submit" 
          value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Formulario;
