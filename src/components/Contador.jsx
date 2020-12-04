import React from 'react';

function Contador(props) {
  let agarro = props.address;
  let pasoAString = toString(agarro).valueOf;
  let  largo = pasoAString.length;


  console.log(`${agarro} valor de agarro, que toma props.address`);
  console.log(`${pasoAString} valor de pasoAString, que le aplico toString(agarro).valueOf`);
  console.log(`${largo} valor de largo, que le aplico a pasoAString.length`);

  return (<h5>{largo.length}</h5>)
}

export default Contador;





// let noses = parseInt(nose.length);
// let limite = 50;
// let restan = limite - agarro;
// if (noses > limite){
// return(<h5>Solo tiene permitido {noses} caracteres</h5>)
// } else{ return( <h5>{noses}</h5>)  }