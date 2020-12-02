

function Contador(props) {
  // let agarro = toString(props.Address);
  // let tomalos =  document.getElementsByName("Addres");
  // let tomalo = toString(document.getElementsByName("Addres"));
  // console.log(cajitas);
  // console.log(tomalo);
  // console.log(tomalos);

  let agarro = props.Address;
  let nose = toString(agarro).length;
  let noses = parseInt(nose);
  console.log(typeof agarro);
  console.log(typeof nose);
  console.log(nose);
  let limite = 50;
  // let restan = limite - agarro;
  if (noses > limite){
  return(<h5>Solo tiene permitido {agarro} caracteres</h5>)
  } else{ return( <h5>{noses}</h5>)  }
}

export default Contador;