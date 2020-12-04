import React from 'react';

function Contador(props) {
  let agarro = props.address.length;
  let limite = 50;
  let restan = limite - agarro;
  if ( agarro < limite){
  return(<h5>{restan}</h5>)
  } else{ return( <h5>Solo puedes escribir {agarro} y te que dan {restan}</h5>)  }
}

export default Contador;