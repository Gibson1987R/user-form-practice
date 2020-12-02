import React from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Insignia from './components/Insignia';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    // this.state = {form: { value :''}};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  // this.handleChange = e => {
    
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     }
  //   });
  // }
// ----------------------
    this.handleChange = e => { 
      let target = e.target;
  
      let value = target.type === 'checkbox' ? target.checked : target.value;

      let name = target.name;



      if( value.lenght > 10 ){
        alert('mas corta')
      }else{
        this.setState({
          [name]: value
        });
      }
  
      // this.setState({
      //   [name]: value
      // });
    }
  } 


// ------------------------
      handleSubmit = e => {
      alert(`A description was submitted: 
      ${this.state.lastName} 
      ${this.state.firstName} 
      ${this.state.numberPhone} 
      ${this.state.birthDate} 
      ${this.state.Address}`);
      e.preventDefault();
    }
    // this.handleSubmit = e => {
    //   alert(`A description was submitted: 
    //   ${this.state.lastName} 
    //   ${this.state.firstName} 
    //   ${this.state.numberPhone} 
    //   ${this.state.birthDate} 
    //   ${this.state.Address}`);
    //   e.preventDefault();
    // }

  render() {
    return (
      <div className= 'container mt-2'>
        <div className='row'>
          <div className="App col-6">
            <Insignia
            lastName={this.state.lastName}
            firstName={this.state.firstName}
            numberPhone={this.state.numberPhone}
            birthDate={this.state.birthDate}
            Address={this.state.Address}
            email={this.state.email}
            />
          </div>
          <div className='col-6'>
            <Formulario 
            onChange={this.handleChange}
            formValues={this.state.value}
            onSubmit={this.handleSubmit}
            Address={this.state.Address}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
