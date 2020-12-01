import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Formulario extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   let target = event.target;

  //   let value = target.type === 'checkbox' ? target.checked : target.value;

  //   let name = target.name;

    
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   alert(`A description was submitted: 
  //   ${this.props.lastName} 
  //   ${this.props.firstName} 
  //   ${this.props.numberPhone} 
  //   ${this.props.birthDate} 
  //   ${this.props.Address}`);
  //   event.preventDefault();
  // }

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
              value={this.props.value}
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
              value={this.props.value} 
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
              value={this.props.value} 
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
              value={this.props.value} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              BirthDate: 
              <input 
              className='form-control'
              type="number" 
              name='birthDate'
              value={this.props.value} 
              onChange={this.props.onChange}/>
            </label>
          </div>

          <div className='form-grupp'>
            <label >
              Address: 
              <textarea 
              className='form-control'
              type="text" 
              name='Address'
              value={this.props.value} 
              onChange={this.props.onChange}
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
