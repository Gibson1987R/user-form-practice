import React from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Last Name  :
              <input type="text"
              name ='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}/>
            </label>
          </div>

          <div>
            <label >
              First Name  : 
              <input type="text" 
              name='firstName'
              value={this.state.firstName} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div>
            <label >
              NumberPhone: 
              <input type="number" 
              name='numberPhone'
              value={this.state.numberPhone} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div>
            <label >
              BirthDate: 
              <input type="number" 
              name='birthDate'
              value={this.state.birthDate} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <div>
            <label >
              Address: 
              <textarea type="text" 
              name='Address'
              value={this.state.Address} 
              onChange={this.handleChange}/>
            </label>
          </div>

          <input 
          type="submit" 
          value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Formulario;