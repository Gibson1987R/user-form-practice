import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;

    let value = target.type === 'checkbox' ? target.checked : target.value;

    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(`A description was submitted: 
    ${this.state.lastName} 
    ${this.state.firstName} 
    ${this.state.numberPhone} 
    ${this.state.birthDate} 
    ${this.state.Address}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className='mb-3'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-grupp'>
            <label>
              Last Name  :
              <input
              className='form-control'
              type="text"
              name ='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              First Name  : 
              <input 
              className='form-control'
              type="text" 
              name='firstName'
              value={this.state.firstName} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              NumberPhone: 
              <input 
              className='form-control'
              type="number" 
              name='numberPhone'
              value={this.state.numberPhone} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              BirthDate: 
              <input 
              className='form-control'
              type="number" 
              name='birthDate'
              value={this.state.birthDate} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              Address: 
              <textarea 
              className='form-control'
              type="text" 
              name='Address'
              value={this.state.Address} 
              onChange={this.handleChange}
              maxLength='200'/>
            </label>
          </div>

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
