import React from 'react';

class RedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // Esta línea es importante!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let input = e.target.value;
    this.setState({
      chars_left: max_chars - input.length
    });
    
    alert(this.state.message);
  }

  render() {
    // Porque `this.handleClick` está vinculada, podemos utilizarla como un manejador de evento
    return (
      <div>
          <textarea onChange={this.handleChange.bind(this)}></textarea>
          <p>Characters Left: {this.state.chars_left}</p>
      </div>
  );
  }
}

export default RedInput;